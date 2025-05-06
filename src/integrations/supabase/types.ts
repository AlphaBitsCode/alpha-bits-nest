export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      assistant_skills: {
        Row: {
          assistant_id: string
          created_at: string
          id: string
          skill_id: string
        }
        Insert: {
          assistant_id: string
          created_at?: string
          id?: string
          skill_id: string
        }
        Update: {
          assistant_id?: string
          created_at?: string
          id?: string
          skill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assistant_skills_assistant_id_fkey"
            columns: ["assistant_id"]
            isOneToOne: false
            referencedRelation: "assistants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_skills_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["id"]
          },
        ]
      }
      assistants: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          introduction: string
          is_public: boolean
          name: string
          persona: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          introduction: string
          is_public?: boolean
          name: string
          persona: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          introduction?: string
          is_public?: boolean
          name?: string
          persona?: string
          updated_at?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          content: string
          created_at: string
          excerpt: string
          featured_image: string | null
          id: string
          published_at: string
          slug: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          content: string
          created_at?: string
          excerpt: string
          featured_image?: string | null
          id?: string
          published_at: string
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          content?: string
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          id?: string
          published_at?: string
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      class_registrations: {
        Row: {
          coding_background: string | null
          country: string
          course_id: string
          created_at: string
          email: string
          full_name: string
          id: string
          interest: string | null
          phone: string
          referral_code: string | null
          referral_source: string | null
        }
        Insert: {
          coding_background?: string | null
          country: string
          course_id: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          interest?: string | null
          phone: string
          referral_code?: string | null
          referral_source?: string | null
        }
        Update: {
          coding_background?: string | null
          country?: string
          course_id?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          interest?: string | null
          phone?: string
          referral_code?: string | null
          referral_source?: string | null
        }
        Relationships: []
      }
      event_bookings: {
        Row: {
          company: string | null
          created_at: string
          email: string
          event_id: string
          expectations: string | null
          id: string
          name: string
          role: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          event_id: string
          expectations?: string | null
          id?: string
          name: string
          role: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          event_id?: string
          expectations?: string | null
          id?: string
          name?: string
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          contact_person: string
          country: string
          created_at: string | null
          email: string
          id: string
          institution_name: string
          institution_type: string
          message: string | null
          phone: string | null
          product: string
          updated_at: string | null
        }
        Insert: {
          contact_person: string
          country: string
          created_at?: string | null
          email: string
          id?: string
          institution_name: string
          institution_type: string
          message?: string | null
          phone?: string | null
          product: string
          updated_at?: string | null
        }
        Update: {
          contact_person?: string
          country?: string
          created_at?: string | null
          email?: string
          id?: string
          institution_name?: string
          institution_type?: string
          message?: string | null
          phone?: string | null
          product?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      members: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      preorders: {
        Row: {
          address: string
          country: string
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          product: string
          quantity: number
          updated_at: string
        }
        Insert: {
          address: string
          country: string
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          product?: string
          quantity?: number
          updated_at?: string
        }
        Update: {
          address?: string
          country?: string
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          product?: string
          quantity?: number
          updated_at?: string
        }
        Relationships: []
      }
      project_members: {
        Row: {
          created_at: string | null
          id: string
          member_id: string
          project_id: string
          role: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          member_id: string
          project_id: string
          role?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          member_id?: string
          project_id?: string
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_members_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          client: string
          created_at: string | null
          deadline: string | null
          description: string | null
          google_sheet_id: string | null
          google_sheet_range: string | null
          id: string
          name: string
          progress: number | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          client: string
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          google_sheet_id?: string | null
          google_sheet_range?: string | null
          id?: string
          name: string
          progress?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          client?: string
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          google_sheet_id?: string | null
          google_sheet_range?: string | null
          id?: string
          name?: string
          progress?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      skills: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
