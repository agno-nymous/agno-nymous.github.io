import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Background } from './components/Background'
import { ThemeProvider } from './components/ThemeProvider'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'
import { BlogPage } from './pages/BlogPage'
import { useHashRoute } from './hooks/useHashRoute'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const { route, setRoute } = useHashRoute()

  return (
    <ThemeProvider>
      <main className="flex flex-col min-h-screen w-full bg-bg-primary">
        <Background />
        <Header route={route} setRoute={setRoute} />
        <div className="flex-grow flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={route}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full"
            >
              {route === '/' && <HomePage />}
              {route === '/resume' && <ResumePage />}
              {route === '/blog' && <BlogPage />}
            </motion.div>
          </AnimatePresence>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  )
}
