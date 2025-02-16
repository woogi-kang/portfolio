import { createServerSupabaseClient } from './supabase/server'
import type { Tables } from './supabase/types'

export const api = {
    projects: {
        async getAll() {
            'use server'
            const supabase = await createServerSupabaseClient()
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: true })

            if (error) throw error
            return data as Tables<'projects'>[]
        },
        async getById(id: string) {
            'use server'
            const supabase = await createServerSupabaseClient()
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
        async getAll() {
            'use server'
            const supabase = await createServerSupabaseClient()
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error
            return data as Tables<'blog_posts'>[]
        },
        async getById(id: string) {
            'use server'
            const supabase = await createServerSupabaseClient()
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
        async getExperience() {
            'use server'
            const supabase = await createServerSupabaseClient()
            const { data, error } = await supabase
                .from('experience')
                .select('*')
                .order('period', { ascending: false })

            if (error) throw error
            return data as Tables<'experience'>[]
        },
        async getSkills() {
            'use server'
            const supabase = await createServerSupabaseClient()
            const { data, error } = await supabase
                .from('skills')
                .select('*')
                .order('category', { ascending: true })

            if (error) throw error
            return data as Tables<'skills'>[]
        },
        async getEducation() {
            'use server'
            const supabase = await createServerSupabaseClient()
            const { data, error } = await supabase
                .from('education')
                .select('*')
                .order('period', { ascending: false })

            if (error) throw error
            return data as Tables<'education'>[]
        }
    }
} 