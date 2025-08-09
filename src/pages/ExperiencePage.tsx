import { motion } from 'framer-motion'

export function ExperiencePage() {
  const roles = [
    {
      role: 'Machine Learning Engineer',
      org: 'Katalyst Data Management',
      period: '2023 — Present',
      points: [
        'Document AI pipelines for OCR + structured extraction (Instructor).',
        '5× productivity via table/line/text detection & automation.',
        'vLLM services (Qwen2.5 VL, InternVL3, Gemma 3); GPU/latency tuning.',
      ],
    },
    {
      role: 'Data Scientist / ML Developer',
      org: 'Various',
      period: '2019 — 2023',
      points: [
        'Medical image captioning; analytics in safety & customer insights.',
        'MLOps with Docker; dashboards in PowerBI/Tableau; Python/R/SQL.',
      ],
    },
  ]

  return (
    <section className="container mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-5xl font-bold text-primary text-center mb-16"
        style={{ fontFamily: 'var(--font-comfortaa)' }}
      >
        Experience
      </motion.h2>
      <div className="grid gap-12 max-w-6xl mx-auto">
        {roles.map((r, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.2 }}
            className="bg-card rounded-3xl p-10 border border-theme shadow-lg hover:shadow-xl transition-all hover:scale-102"
          >
            <header className="flex flex-col gap-3 mb-8">
              <h3 className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-comfortaa)' }}>
                {r.role} · {r.org}
              </h3>
              <span className="text-lg text-muted font-semibold" style={{ fontFamily: 'var(--font-poppins)' }}>
                {r.period}
              </span>
            </header>
            <ul className="mt-8 space-y-4 text-secondary">
              {r.points.map((p, j) => (
                <li key={j} className="flex items-start gap-4">
                  <span className="text-accent-primary mt-2 text-xl">●</span>
                  <span className="text-xl leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>{p}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}