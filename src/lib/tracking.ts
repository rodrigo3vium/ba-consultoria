import { supabase } from '@/integrations/supabase/client';

// Função auxiliar para gerar hash SHA-256
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

class LeadTracker {
  private anonymousId: string;
  private sessionId: string;
  private leadId: string | null = null;
  private sessionStart: number;
  private lastActivity: number;
  private heartbeatInterval: number | null = null;
  private consentGiven: boolean = false;

  // Configurações
  private readonly SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 min
  private readonly HEARTBEAT_INTERVAL_MS = 30 * 1000; // 30 seg

  constructor() {
    this.anonymousId = this.getOrCreateAnonymousId();
    this.sessionId = this.getOrCreateSessionId();
    this.sessionStart = Date.now();
    this.lastActivity = Date.now();
    this.leadId = localStorage.getItem('_lead_id');

    // Verificar consentimento
    this.checkConsent();

    // Iniciar heartbeat
    this.startHeartbeat();

    // Capturar saída
    window.addEventListener('beforeunload', () => this.endSession());
    
    // Detectar inatividade
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseHeartbeat();
      } else {
        this.resumeHeartbeat();
      }
    });
  }

  private getOrCreateAnonymousId(): string {
    let id = localStorage.getItem('_anon_id');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('_anon_id', id);
    }
    return id;
  }

  private getOrCreateSessionId(): string {
    const stored = sessionStorage.getItem('_session_id');
    const storedTime = sessionStorage.getItem('_session_start');
    
    // Nova sessão se não existe ou expirou
    if (!stored || !storedTime || 
        Date.now() - parseInt(storedTime) > this.SESSION_TIMEOUT_MS) {
      const newId = crypto.randomUUID();
      sessionStorage.setItem('_session_id', newId);
      sessionStorage.setItem('_session_start', Date.now().toString());
      return newId;
    }
    
    return stored;
  }

  private checkConsent(): void {
    // Verificar se há consentimento armazenado
    const consent = localStorage.getItem('_tracking_consent');
    this.consentGiven = consent === 'true';
  }

  public setConsent(analytics: boolean, marketing: boolean): void {
    this.consentGiven = analytics;
    localStorage.setItem('_tracking_consent', analytics.toString());
    
    // Registrar consentimento
    this.track('consent_given', {
      analytics_consent: analytics,
      marketing_consent: marketing,
      policy_version: '1.0'
    });
  }

  private async generateIdempotencyKey(
    eventName: string,
    timestamp: string,
    pageUrl: string
  ): Promise<string> {
    const payload = `${this.anonymousId}|${this.sessionId}|${eventName}|${timestamp}|${pageUrl}`;
    return await sha256(payload);
  }

  async identify(email: string, phone: string, name: string): Promise<void> {
    try {
      const { data, error } = await supabase.functions.invoke('identify-lead', {
        body: { 
          email, 
          phone, 
          name, 
          anonymous_id: this.anonymousId,
          session_id: this.sessionId
        }
      });

      if (error) throw error;

      if (data?.lead_id) {
        this.leadId = data.lead_id;
        localStorage.setItem('_lead_id', data.lead_id);
      }
    } catch (err) {
      console.error('Identify failed:', err);
    }
  }

  async track(
    eventName: string, 
    properties: Record<string, any> = {}
  ): Promise<void> {
    // Não rastrear se não tem consentimento (exceto consent_given)
    if (!this.consentGiven && eventName !== 'consent_given') {
      return;
    }

    try {
      this.lastActivity = Date.now();
      
      const timestamp = new Date().toISOString();
      const pageUrl = window.location.href;
      const utmParams = this.getUTMParams();
      
      const idempotencyKey = await this.generateIdempotencyKey(
        eventName,
        timestamp,
        pageUrl
      );

      await supabase.functions.invoke('track-event', {
        body: {
          event_name: eventName,
          anonymous_id: this.anonymousId,
          session_id: this.sessionId,
          page_url: pageUrl,
          referrer: document.referrer,
          timestamp,
          idempotency_key: idempotencyKey,
          properties: {
            ...properties,
            ...utmParams,
            user_agent: navigator.userAgent,
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            viewport_size: `${window.innerWidth}x${window.innerHeight}`,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          }
        }
      });
    } catch (err) {
      console.error('Track failed:', err);
    }
  }

  async page(pageName?: string): Promise<void> {
    await this.track('page_view', {
      page_name: pageName || document.title,
      path: window.location.pathname
    });
  }

  private startHeartbeat(): void {
    this.heartbeatInterval = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        this.sendHeartbeat();
      }
    }, this.HEARTBEAT_INTERVAL_MS);
  }

  private pauseHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  private resumeHeartbeat(): void {
    if (!this.heartbeatInterval) {
      this.startHeartbeat();
    }
  }

  private async sendHeartbeat(): Promise<void> {
    const duration = Math.floor((Date.now() - this.sessionStart) / 1000);
    
    // Usar sendBeacon para garantia de envio
    const payload = JSON.stringify({
      session_id: this.sessionId,
      anonymous_id: this.anonymousId
    });
    
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/session-heartbeat`;
    
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([payload], { type: 'application/json' }));
    }
  }

  private async endSession(): Promise<void> {
    this.pauseHeartbeat();
    await this.sendHeartbeat();
  }

  private getUTMParams(): Record<string, string | null> {
    const params = new URLSearchParams(window.location.search);
    
    // Salvar first touch se não existir
    if (!localStorage.getItem('_first_touch_source') && params.get('utm_source')) {
      localStorage.setItem('_first_touch_source', params.get('utm_source') || '');
      localStorage.setItem('_first_touch_medium', params.get('utm_medium') || '');
      localStorage.setItem('_first_touch_campaign', params.get('utm_campaign') || '');
    }
    
    return {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_term: params.get('utm_term'),
      utm_content: params.get('utm_content'),
    };
  }

  // Método para revogar consentimento
  public async revokeConsent(): Promise<void> {
    this.consentGiven = false;
    localStorage.removeItem('_tracking_consent');
    
    await this.track('consent_revoked', {});
  }

  // Método para solicitar deleção de dados (LGPD)
  public async requestDataDeletion(): Promise<void> {
    // Limpar dados locais
    localStorage.removeItem('_anon_id');
    localStorage.removeItem('_lead_id');
    localStorage.removeItem('_tracking_consent');
    sessionStorage.clear();
  }
}

export const tracker = new LeadTracker();
