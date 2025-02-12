export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          title_ko: string
          description: string
          description_ko: string
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
          id: string
          position: string
          position_ko?: string
          company: string
          period: string
          description: string
          description_ko?: string
          achievements: string[]
          achievements_ko?: string[]
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
          institution: string
          period: string
          description: string
          description_ko: string
        }
      }
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'] 