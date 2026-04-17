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
    PostgrestVersion: "14.1"
  }
  ba_site: {
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
      cases: {
        Row: {
          categoria: string
          cliente_logo_url: string | null
          cliente_nome: string
          created_at: string
          depoimento: string | null
          depoimento_autor: string | null
          depoimento_autor_cargo: string | null
          depoimento_autor_foto: string | null
          desafio: string
          descricao_curta: string
          id: string
          metrica_principal: string
          ordem: number
          resultados: Json | null
          setor: string | null
          slug: string | null
          solucao: string
          status: string
          tecnologias_usadas: string[] | null
          timeline: string | null
          titulo: string
          updated_at: string
        }
        Insert: {
          categoria: string
          cliente_logo_url?: string | null
          cliente_nome: string
          created_at?: string
          depoimento?: string | null
          depoimento_autor?: string | null
          depoimento_autor_cargo?: string | null
          depoimento_autor_foto?: string | null
          desafio: string
          descricao_curta: string
          id?: string
          metrica_principal: string
          ordem?: number
          resultados?: Json | null
          setor?: string | null
          slug?: string | null
          solucao: string
          status?: string
          tecnologias_usadas?: string[] | null
          timeline?: string | null
          titulo: string
          updated_at?: string
        }
        Update: {
          categoria?: string
          cliente_logo_url?: string | null
          cliente_nome?: string
          created_at?: string
          depoimento?: string | null
          depoimento_autor?: string | null
          depoimento_autor_cargo?: string | null
          depoimento_autor_foto?: string | null
          desafio?: string
          descricao_curta?: string
          id?: string
          metrica_principal?: string
          ordem?: number
          resultados?: Json | null
          setor?: string | null
          slug?: string | null
          solucao?: string
          status?: string
          tecnologias_usadas?: string[] | null
          timeline?: string | null
          titulo?: string
          updated_at?: string
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
        Relationships: []
      }
      newsletter_ratings: {
        Row: {
          anonymous_id: string | null
          id: string
          ip_address: unknown
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
          ip_address?: unknown
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
          ip_address?: unknown
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
          _role: Database["ba_site"]["Enums"]["app_role"]
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
  ba_site: {
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
A new version of Supabase CLI is available: v2.90.0 (currently installed v2.75.0)
We recommend updating regularly for new features and bug fixes: https://supabase.com/docs/guides/cli/getting-started#updating-the-supabase-cli
