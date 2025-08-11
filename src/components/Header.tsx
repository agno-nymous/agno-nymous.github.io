import { ThemeToggle } from './ThemeToggle';

export function Header({ route, setRoute }: { route: string; setRoute: (r: string) => void }) {
  return (
    <header className="w-full px-2 sm:px-4 py-4 sm:py-6 flex flex-wrap justify-between items-center gap-y-2 bg-bg-surface border-b border-theme">
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => setRoute('/')}
          className="text-primary font-bold text-xl sm:text-2xl bg-transparent border-0 cursor-pointer hover:text-accent-primary transition-colors"
          style={{ fontFamily: 'var(--font-space)' }}
        >
          Ash Thomas
        </button>
      </div>
      <nav className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
        <a 
          href="#/" 
          className={`px-4 py-2 sm:px-5 sm:py-3 rounded-full text-base font-medium border transition-colors ${
            route === '/' 
              ? 'bg-surface border-theme text-primary' 
              : 'border-transparent text-muted hover:text-primary hover:bg-surface'
          }`}
        >
          Home
        </a>
        <a 
          href="#/resume" 
          className={`px-4 py-2 sm:px-5 sm:py-3 rounded-full text-base font-medium border transition-colors ${
            route === '/resume' 
              ? 'bg-surface border-theme text-primary' 
              : 'border-transparent text-muted hover:text-primary hover:bg-surface'
          }`}
        >
          Resume
        </a>
        <a 
          href="#/blog" 
          className={`px-4 py-2 sm:px-5 sm:py-3 rounded-full text-base font-medium border transition-colors ${
            route === '/blog' 
              ? 'bg-surface border-theme text-primary' 
              : 'border-transparent text-muted hover:text-primary hover:bg-surface'
          }`}
        >
          Blog
        </a>
        <a 
          href="mailto:ashishthomas7@gmail.com"
          className="px-3 py-2 rounded-full text-sm font-medium border-transparent text-muted hover:text-primary transition-colors"
        >
          Contact
        </a>
        <ThemeToggle />
      </nav>
    </header>
  )
}