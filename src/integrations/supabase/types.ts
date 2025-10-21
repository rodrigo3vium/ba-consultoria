export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string | null
          date: string
          excerpt: string
          id: number
          image: string | null
          slug: string | null
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          category: string
          content: string
          created_at?: string | null
          date: string
          excerpt: string
          id?: number
          image?: string | null
          slug?: string | null
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string | null
          date?: string
          excerpt?: string
          id?: number
          image?: string | null
          slug?: string | null
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          anonymous_id: string
          created_at: string
          event_name: string
          id: string
          idempotency_key: string
          lead_id: string | null
          page_url: string | null
          properties: Json | null
          referrer: string | null
          score_points: number | null
          session_id: string
        }
        Insert: {
          anonymous_id: string
          created_at?: string
          event_name: string
          id?: string
          idempotency_key: string
          lead_id?: string | null
          page_url?: string | null
          properties?: Json | null
          referrer?: string | null
          score_points?: number | null
          session_id: string
        }
        Update: {
          anonymous_id?: string
          created_at?: string
          event_name?: string
          id?: string
          idempotency_key?: string
          lead_id?: string | null
          page_url?: string | null
          properties?: Json | null
          referrer?: string | null
          score_points?: number | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      funnel_history: {
        Row: {
          created_at: string
          funnel_id: string
          id: string
          lead_id: string
          observacao: string | null
          stage_from_id: string | null
          stage_to_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          funnel_id: string
          id?: string
          lead_id: string
          observacao?: string | null
          stage_from_id?: string | null
          stage_to_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          funnel_id?: string
          id?: string
          lead_id?: string
          observacao?: string | null
          stage_from_id?: string | null
          stage_to_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funnel_history_funnel_id_fkey"
            columns: ["funnel_id"]
            isOneToOne: false
            referencedRelation: "funnels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funnel_history_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funnel_history_stage_from_id_fkey"
            columns: ["stage_from_id"]
            isOneToOne: false
            referencedRelation: "funnel_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funnel_history_stage_to_id_fkey"
            columns: ["stage_to_id"]
            isOneToOne: false
            referencedRelation: "funnel_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      funnel_stages: {
        Row: {
          ativo: boolean
          cor: string
          created_at: string
          descricao: string | null
          funnel_id: string
          id: string
          nome: string
          ordem: number
          probabilidade: number
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          cor?: string
          created_at?: string
          descricao?: string | null
          funnel_id: string
          id?: string
          nome: string
          ordem?: number
          probabilidade?: number
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          cor?: string
          created_at?: string
          descricao?: string | null
          funnel_id?: string
          id?: string
          nome?: string
          ordem?: number
          probabilidade?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funnel_stages_funnel_id_fkey"
            columns: ["funnel_id"]
            isOneToOne: false
            referencedRelation: "funnels"
            referencedColumns: ["id"]
          },
        ]
      }
      funnels: {
        Row: {
          ativo: boolean
          cor: string
          created_at: string
          descricao: string | null
          id: string
          nome: string
          ordem: number
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          cor?: string
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
          ordem?: number
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          cor?: string
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
          ordem?: number
          updated_at?: string
        }
        Relationships: []
      }
      hotmart_sales: {
        Row: {
          created_at: string
          data_confirmacao: string | null
          data_venda: string | null
          documento: string | null
          id: string
          lead_id: string | null
          moeda: string | null
          numero_parcela: number | null
          origem_checkout: string | null
          preco_oferta: number | null
          preco_produto: number | null
          produto: string
          status: string | null
          tipo_pagamento: string | null
        }
        Insert: {
          created_at?: string
          data_confirmacao?: string | null
          data_venda?: string | null
          documento?: string | null
          id?: string
          lead_id?: string | null
          moeda?: string | null
          numero_parcela?: number | null
          origem_checkout?: string | null
          preco_oferta?: number | null
          preco_produto?: number | null
          produto: string
          status?: string | null
          tipo_pagamento?: string | null
        }
        Update: {
          created_at?: string
          data_confirmacao?: string | null
          data_venda?: string | null
          documento?: string | null
          id?: string
          lead_id?: string | null
          moeda?: string | null
          numero_parcela?: number | null
          origem_checkout?: string | null
          preco_oferta?: number | null
          preco_produto?: number | null
          produto?: string
          status?: string | null
          tipo_pagamento?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hotmart_sales_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_aliases: {
        Row: {
          anonymous_id: string
          created_at: string | null
          id: string
          lead_id: string
        }
        Insert: {
          anonymous_id: string
          created_at?: string | null
          id?: string
          lead_id: string
        }
        Update: {
          anonymous_id?: string
          created_at?: string | null
          id?: string
          lead_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_aliases_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_consents: {
        Row: {
          analytics_consent: boolean
          anonymous_id: string | null
          created_at: string | null
          id: string
          ip_address: unknown | null
          lead_id: string | null
          marketing_consent: boolean
          policy_version: string
          user_agent: string | null
        }
        Insert: {
          analytics_consent?: boolean
          anonymous_id?: string | null
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          lead_id?: string | null
          marketing_consent?: boolean
          policy_version: string
          user_agent?: string | null
        }
        Update: {
          analytics_consent?: boolean
          anonymous_id?: string | null
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          lead_id?: string | null
          marketing_consent?: boolean
          policy_version?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_consents_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_funnel_positions: {
        Row: {
          created_at: string
          entrada_etapa_at: string
          funnel_id: string
          id: string
          lead_id: string
          stage_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          entrada_etapa_at?: string
          funnel_id: string
          id?: string
          lead_id: string
          stage_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          entrada_etapa_at?: string
          funnel_id?: string
          id?: string
          lead_id?: string
          stage_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_funnel_positions_funnel_id_fkey"
            columns: ["funnel_id"]
            isOneToOne: false
            referencedRelation: "funnels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_funnel_positions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_funnel_positions_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "funnel_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_interactions: {
        Row: {
          created_at: string
          descricao: string
          id: string
          lead_id: string
          tipo: Database["public"]["Enums"]["interaction_type"]
          user_id: string | null
        }
        Insert: {
          created_at?: string
          descricao: string
          id?: string
          lead_id: string
          tipo: Database["public"]["Enums"]["interaction_type"]
          user_id?: string | null
        }
        Update: {
          created_at?: string
          descricao?: string
          id?: string
          lead_id?: string
          tipo?: Database["public"]["Enums"]["interaction_type"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_interactions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_profiles: {
        Row: {
          area_aplicacao: string | null
          canal_aquisicao: string | null
          cidade_estado: string | null
          created_at: string
          desejo_realizar: string | null
          expectativas: string | null
          experiencia_ia: string | null
          id: string
          idade: number | null
          lead_id: string
          maior_dificuldade: string | null
          nivel_organizacao: number | null
          nivel_produtividade: number | null
          objetivo_principal: string | null
          situacao_profissional: string | null
          updated_at: string
        }
        Insert: {
          area_aplicacao?: string | null
          canal_aquisicao?: string | null
          cidade_estado?: string | null
          created_at?: string
          desejo_realizar?: string | null
          expectativas?: string | null
          experiencia_ia?: string | null
          id?: string
          idade?: number | null
          lead_id: string
          maior_dificuldade?: string | null
          nivel_organizacao?: number | null
          nivel_produtividade?: number | null
          objetivo_principal?: string | null
          situacao_profissional?: string | null
          updated_at?: string
        }
        Update: {
          area_aplicacao?: string | null
          canal_aquisicao?: string | null
          cidade_estado?: string | null
          created_at?: string
          desejo_realizar?: string | null
          expectativas?: string | null
          experiencia_ia?: string | null
          id?: string
          idade?: number | null
          lead_id?: string
          maior_dificuldade?: string | null
          nivel_organizacao?: number | null
          nivel_produtividade?: number | null
          objetivo_principal?: string | null
          situacao_profissional?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_profiles_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: true
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          created_at: string
          email: string
          faturamento: string | null
          first_touch_campaign: string | null
          first_touch_medium: string | null
          first_touch_source: string | null
          id: string
          last_active_at: string | null
          last_touch_campaign: string | null
          last_touch_medium: string | null
          last_touch_source: string | null
          nome: string
          observacoes: string | null
          origem: string | null
          produto: string
          responsavel_id: string | null
          score: number | null
          score_updated_at: string | null
          situacao_profissional: string | null
          status: Database["public"]["Enums"]["lead_status"]
          tags: string[] | null
          ultima_interacao: string | null
          whatsapp: string
        }
        Insert: {
          created_at?: string
          email: string
          faturamento?: string | null
          first_touch_campaign?: string | null
          first_touch_medium?: string | null
          first_touch_source?: string | null
          id?: string
          last_active_at?: string | null
          last_touch_campaign?: string | null
          last_touch_medium?: string | null
          last_touch_source?: string | null
          nome: string
          observacoes?: string | null
          origem?: string | null
          produto: string
          responsavel_id?: string | null
          score?: number | null
          score_updated_at?: string | null
          situacao_profissional?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          tags?: string[] | null
          ultima_interacao?: string | null
          whatsapp: string
        }
        Update: {
          created_at?: string
          email?: string
          faturamento?: string | null
          first_touch_campaign?: string | null
          first_touch_medium?: string | null
          first_touch_source?: string | null
          id?: string
          last_active_at?: string | null
          last_touch_campaign?: string | null
          last_touch_medium?: string | null
          last_touch_source?: string | null
          nome?: string
          observacoes?: string | null
          origem?: string | null
          produto?: string
          responsavel_id?: string | null
          score?: number | null
          score_updated_at?: string | null
          situacao_profissional?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          tags?: string[] | null
          ultima_interacao?: string | null
          whatsapp?: string
        }
        Relationships: []
      }
      newsletter_ratings: {
        Row: {
          anonymous_id: string | null
          id: string
          ip_address: unknown | null
          newsletter_edition: string
          rated_at: string
          rating: number
          subscriber_id: string
          user_agent: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          anonymous_id?: string | null
          id?: string
          ip_address?: unknown | null
          newsletter_edition: string
          rated_at?: string
          rating: number
          subscriber_id: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          anonymous_id?: string | null
          id?: string
          ip_address?: unknown | null
          newsletter_edition?: string
          rated_at?: string
          rating?: number
          subscriber_id?: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_ratings_subscriber_id_fkey"
            columns: ["subscriber_id"]
            isOneToOne: false
            referencedRelation: "newsletter_subscribers"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscribers: {
        Row: {
          anonymous_id: string | null
          created_at: string
          email: string
          emails_opened: number | null
          emails_sent: number | null
          id: string
          last_email_opened_at: string | null
          lead_id: string | null
          nome: string
          preferences: Json | null
          referrer: string | null
          status: string
          subscribed_at: string
          subscription_source: string
          unsubscribed_at: string | null
          updated_at: string
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
          whatsapp: string | null
        }
        Insert: {
          anonymous_id?: string | null
          created_at?: string
          email: string
          emails_opened?: number | null
          emails_sent?: number | null
          id?: string
          last_email_opened_at?: string | null
          lead_id?: string | null
          nome: string
          preferences?: Json | null
          referrer?: string | null
          status?: string
          subscribed_at?: string
          subscription_source?: string
          unsubscribed_at?: string | null
          updated_at?: string
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          whatsapp?: string | null
        }
        Update: {
          anonymous_id?: string | null
          created_at?: string
          email?: string
          emails_opened?: number | null
          emails_sent?: number | null
          id?: string
          last_email_opened_at?: string | null
          lead_id?: string | null
          nome?: string
          preferences?: Json | null
          referrer?: string | null
          status?: string
          subscribed_at?: string
          subscription_source?: string
          unsubscribed_at?: string | null
          updated_at?: string
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_lead"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      scoring_rules: {
        Row: {
          active: boolean | null
          created_at: string | null
          daily_cap: number | null
          description: string | null
          event_name: string
          id: string
          points: number
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          daily_cap?: number | null
          description?: string | null
          event_name: string
          id?: string
          points: number
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          daily_cap?: number | null
          description?: string | null
          event_name?: string
          id?: string
          points?: number
        }
        Relationships: []
      }
      sessions: {
        Row: {
          anonymous_id: string
          created_at: string | null
          device: string | null
          duration_sec: number | null
          events_count: number | null
          first_event_at: string
          id: string
          landing_page: string | null
          last_event_at: string
          lead_id: string | null
          pageviews: number | null
          referrer: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          anonymous_id: string
          created_at?: string | null
          device?: string | null
          duration_sec?: number | null
          events_count?: number | null
          first_event_at: string
          id: string
          landing_page?: string | null
          last_event_at: string
          lead_id?: string | null
          pageviews?: number | null
          referrer?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          anonymous_id?: string
          created_at?: string | null
          device?: string | null
          duration_sec?: number | null
          events_count?: number | null
          first_event_at?: string
          id?: string
          landing_page?: string | null
          last_event_at?: string
          lead_id?: string | null
          pageviews?: number | null
          referrer?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sessions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      vw_newsletter_performance: {
        Row: {
          avg_rating: number | null
          first_rating_at: string | null
          last_rating_at: string | null
          newsletter_edition: string | null
          rating_1_count: number | null
          rating_2_count: number | null
          rating_3_count: number | null
          rating_4_count: number | null
          rating_5_count: number | null
          total_ratings: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      count_events_today: {
        Args: {
          p_anonymous_id: string
          p_event_name: string
          p_lead_id: string
        }
        Returns: number
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      upsert_session: {
        Args: {
          p_anonymous_id: string
          p_device: string
          p_event_time: string
          p_landing_page: string
          p_lead_id: string
          p_referrer: string
          p_session_id: string
          p_utm_campaign: string
          p_utm_medium: string
          p_utm_source: string
        }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
      interaction_type: "email" | "whatsapp" | "telefone" | "reuniao" | "nota"
      lead_status:
        | "novo"
        | "contatado"
        | "qualificado"
        | "convertido"
        | "perdido"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      interaction_type: ["email", "whatsapp", "telefone", "reuniao", "nota"],
      lead_status: [
        "novo",
        "contatado",
        "qualificado",
        "convertido",
        "perdido",
      ],
    },
  },
} as const
