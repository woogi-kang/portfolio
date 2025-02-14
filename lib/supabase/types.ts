export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          title_ko: string
          description: string
          description_ko: string
          category: 'professional' | 'freelance' | 'personal'
          image_urls: string[]
          tags: string[]
          link?: string
          created_at: string
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
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'] 