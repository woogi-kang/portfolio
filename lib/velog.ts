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

const VELOG_GRAPHQL_URL = 'https://v2.velog.io/graphql'

export async function getVelogPosts(username: string): Promise<VelogPost[]> {
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
        })

        const { data } = await response.json()
        return data?.posts || []
    } catch (error) {
        console.error('Error fetching Velog posts:', error)
        return []
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
