export interface VelogPost {
    id: string
    title: string
    short_description: string
    thumbnail: string | null
    url_slug: string
    released_at: string
    updated_at: string
    tags: string[]
}

export interface VelogPostDetail extends VelogPost {
    body: string
}

export type VelogPostsResult = {
    posts: VelogPost[]
    error: string | null
}

const VELOG_GRAPHQL_URL = 'https://v2.velog.io/graphql'

export function normalizeVelogExcerpt(value: string): string {
    return value
        .replace(/\r\n?/g, '\n')
        .replace(/^\s{0,3}>\s?/gm, '')
        .replace(/\s+/g, ' ')
        .trim()
}

export function normalizeVelogTitle(value: string): string {
    return value
        .replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '')
        .replace(/\s*완벽\s*해결\s*가이드\s*\|\s*/gi, ': ')
        .replace(/\s+/g, ' ')
        .trim()
}

export async function getVelogPosts(username: string): Promise<VelogPostsResult> {
    const query = `
    query Posts($username: String!) {
      posts(username: $username, limit: 20) {
        id
        title
        short_description
        thumbnail
        url_slug
        released_at
        updated_at
        tags
      }
    }
  `

    try {
        const response = await fetch(VELOG_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { username },
            }),
            next: { revalidate: 60 }, // Cache for 60 seconds
            signal: AbortSignal.timeout(8000),
        })

        if (!response.ok) {
            throw new Error(`Velog responded with ${response.status}`)
        }

        const payload = await response.json()
        if (payload.errors?.length) {
            throw new Error("Velog GraphQL returned an error")
        }

        const posts: VelogPost[] = payload.data?.posts || []
        return {
            posts: posts.map((post) => ({
                ...post,
                title: normalizeVelogTitle(post.title),
                short_description: normalizeVelogExcerpt(post.short_description),
            })),
            error: null,
        }
    } catch (error) {
        console.error('Error fetching Velog posts:', error)
        return {
            posts: [],
            error: "Velog에서 글 목록을 불러오지 못했습니다.",
        }
    }
}

export async function getVelogPost(username: string, slug: string): Promise<VelogPostDetail | null> {
    const query = `
    query Post($username: String!, $slug: String!) {
      post(username: $username, url_slug: $slug) {
        id
        title
        short_description
        thumbnail
        url_slug
        released_at
        updated_at
        tags
        body
      }
    }
  `

    try {
        const response = await fetch(VELOG_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { username, slug },
            }),
            next: { revalidate: 60 },
        })

        const { data } = await response.json()
        return data?.post || null
    } catch (error) {
        console.error('Error fetching Velog post:', error)
        return null
    }
}
