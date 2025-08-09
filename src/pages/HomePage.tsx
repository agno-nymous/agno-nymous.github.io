import { motion } from 'framer-motion'

export function HomePage() {
  return (
    <section className="container mx-auto px-6 py-20 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1 
          className="text-7xl font-bold mb-8 text-primary"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ fontFamily: 'var(--font-space)' }}
        >
          Ashish Thomas Chempolil
        </motion.h1>
        <motion.p 
          className="mt-8 text-xl text-secondary max-w-4xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Machine Learning Engineer focused on OCR, multimodal extraction, and clean, production‑ready AI systems. 
          Passionate about creating intelligent solutions that bridge the gap between data and actionable insights.
        </motion.p>
        <motion.div 
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            href="mailto:ashishthomas7@gmail.com" 
            className="px-10 py-5 btn-primary rounded-2xl font-bold transition-all text-xl shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)" }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: 'var(--font-space)' }}
          >
            Say hello
          </motion.a>
          <motion.a 
            href="#/resume" 
            className="px-10 py-5 btn-secondary rounded-2xl font-bold transition-all text-xl shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)" }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: 'var(--font-space)' }}
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
