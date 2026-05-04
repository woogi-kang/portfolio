# Woogi AX Portfolio

Kang Taewook's portfolio site focused on AX engineering, AI agent workflows, PromptOps, RAG products, automation pipelines, and Flutter multi-platform product operations.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react
- Supabase utilities remain for admin/contact legacy flows, but the public portfolio content is static and version-controlled.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content Structure

Primary portfolio content lives in:

```text
lib/portfolio-data.ts
```

Main routes:

- `/` - AX/AI Agent focused homepage
- `/portfolio` - case study index
- `/portfolio/[slug]` - static case study detail
- `/resume` - resume summary and PDF download
- `/posts` - writing feed
- `/contact` - contact form

## Assets

- `public/profile.jpg` - profile image used in the hero
- `public/kang-taewook-resume-submission-2026.pdf` - downloadable resume
