import { motion } from 'framer-motion'

export function ResumePage() {
  return (
    <section className="w-full px-4 sm:px-6 py-10 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-8 sm:mb-16"
        style={{ fontFamily: 'var(--font-space)' }}
      >
        Resume
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="max-w-xl sm:max-w-2xl md:max-w-6xl mx-auto"
      >
        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-theme shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <motion.a 
              href="/Ashish-Thomas-Chempolil-FlowCV-Resume-7Jul2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-8 sm:py-4 btn-primary rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'var(--font-space)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume (PDF)
            </motion.a>
          </div>
          <div className="w-full h-[400px] sm:h-[800px] border border-theme rounded-xl sm:rounded-2xl overflow-hidden bg-white">
            <iframe
              src="/Ashish-Thomas-Chempolil-FlowCV-Resume-7Jul2025.pdf"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Ashish Thomas Chempolil Resume"
            >
              <p className="text-center text-muted p-8">
                Your browser does not support PDF viewing. 
                <a 
                  href="/Ashish-Thomas-Chempolil-FlowCV-Resume-7Jul2025.pdf"
                  className="text-accent-primary hover:underline ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Please download the PDF directly.
                </a>
              </p>
            </iframe>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
