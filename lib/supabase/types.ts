export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number
          title: string
          title_ko: string
          summary: string
          summary_ko: string
          description: string
          description_ko: string
          period: string
          category: 'professional' | 'freelance' | 'personal'
          role: string
          role_ko: string
          company: string
          company_ko: string
          tech_stack: {
            category: string
            items: string[]
          }[]
          key_features: {
            title: string
            title_ko: string
            items: string[]
            items_ko: string[]
          }[]
          responsibilities: {
            title: string
            title_ko: string
            items: string[]
            items_ko: string[]
          }[]
          achievements: {
            title: string
            title_ko: string
            items: string[]
            items_ko: string[]
          }[]
          technical_challenges: {
            title: string
            title_ko: string
            problem: string
            problem_ko: string
            solution: string
            solution_ko: string
            details: string[]
            details_ko: string[]
          }[]
          libraries_used: {
            name: string
            description: string
            description_ko: string
          }[]
          architecture: string
          architecture_ko: string
          lessons_learned: {
            title: string
            title_ko: string
            items: string[]
            items_ko: string[]
          }[]
          improvements: {
            title: string
            title_ko: string
            items: string[]
            items_ko: string[]
          }[]
          image_urls: string[]
          thumbnail_url: string | null
          github_url: string | null
          live_url: string | null
          order_num: number
          is_featured: boolean
          created_at: string
          updated_at: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          title_ko: string
          description: string
          description_ko: string
          content: string
          content_ko: string
          thumbnail_image_url: string
          read_time: string
          category: string
          created_at: string
        }
      }
      experience: {
        Row: {
          id: number
          company: string
          company_ko: string
          period: string
          position: string
          position_ko: string
          department: string
          department_ko: string
          role: string
          role_ko: string
          description: string
          description_ko: string
          technical_achievements: {
            title: string
            title_ko: string
            items: string[]
            items_ko: string[]
          }[]
          leadership: {
            title: string
            title_ko: string
            items: string[]
            items_ko: string[]
          }[]
          is_current: boolean
          order: number
          created_at: string
        }
      }
      skills: {
        Row: {
          id: string
          category: string
          items: string[]
          order: number
        }
      }
      education: {
        Row: {
          id: string
          degree: string
          degree_ko: string
          major: string
          major_ko: string
          institution: string
          institution_ko: string
          period: string
          description: string
          description_ko: string
        }
      }
      certifications: {
        Row: {
          id: string
          name: string
          name_ko: string
          issuer: string
          issuer_ko: string
          date: string
          description: string
          description_ko: string
          credential_url: string | null
          credential_id: string | null
          logo_url: string | null
        }
      }
      qualifications: {
        Row: {
          id: string
          name: string
          name_ko: string
          issuer: string
          issuer_ko: string
          date: string
          description: string
          description_ko: string
          credential_url: string | null
          credential_id: string | null
          logo_url: string | null
        }
      }
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'] 