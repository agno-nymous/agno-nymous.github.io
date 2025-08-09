import { motion } from 'framer-motion'

export function BlogPage() {
  const posts = [
    {
      title: 'Schema‑Constrained Extraction with Instructor',
      date: '2025‑07‑18',
      tags: ['Instructor', 'Pydantic', 'VLM'],
      summary: 'How I design prompts + dynamic Pydantic models to get crisp JSON from messy docs.',
    },
    {
      title: 'Running Multiple vLLM Backends via Nginx/Traefik',
      date: '2025‑07‑10',
      tags: ['vLLM', 'Routing', 'DevOps'],
      summary: 'A tiny gateway pattern for OpenAI‑compatible routing using model slugs.',
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-4xl font-bold text-primary text-center mb-8"
      >
        Blog
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {posts.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: i * 0.1 }}
            className="bg-surface rounded-lg p-6 flex flex-col border border-theme hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-primary">{p.title}</h3>
            <p className="text-sm text-muted mt-1">{p.date}</p>
            <p className="text-secondary mt-4 flex-grow">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-3 py-1 bg-accent-primary text-white rounded-full text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 text-accent-primary hover:text-accent-secondary cursor-pointer font-medium transition-colors">
              Read more →
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}