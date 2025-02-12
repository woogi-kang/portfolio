import { createServerSupabaseClient } from './supabase/server'
import type { Tables } from './supabase/types'

export const api = {
    projects: {
        getAll: async () => {
            const supabase = createServerSupabaseClient()
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error
            return data as Tables<'projects'>[]
        },
        getById: async (id: string) => {
            const supabase = createServerSupabaseClient()
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('id', id)
                .single()

            if (error) throw error
            return data as Tables<'projects'>
        }
    },
    blog: {
        getAll: async () => {
            const supabase = createServerSupabaseClient()
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error
            return data as Tables<'blog_posts'>[]
        },
        getById: async (id: string) => {
            const supabase = createServerSupabaseClient()
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('id', id)
                .single()

            if (error) throw error
            return data as Tables<'blog_posts'>
        }
    },
    resume: {
        getExperience: async () => {
            const supabase = createServerSupabaseClient()
            const { data, error } = await supabase
                .from('experience')
                .select('*')
                .order('period', { ascending: false })

            if (error) throw error
            return data as Tables<'experience'>[]
        },
        getSkills: async () => {
            const supabase = createServerSupabaseClient()
            const { data, error } = await supabase
                .from('skills')
                .select('*')
                .order('category', { ascending: true })

            if (error) throw error
            return data as Tables<'skills'>[]
        },
        getEducation: async () => {
            const supabase = createServerSupabaseClient()
            const { data, error } = await supabase
                .from('education')
                .select('*')
                .order('period', { ascending: false })

            if (error) throw error
            return data as Tables<'education'>[]
        }
    }
} 