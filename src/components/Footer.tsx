export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="border-t border-theme" />
      <p className="text-muted text-xs text-center pt-4 font-inter">
        © {new Date().getFullYear()} Ash Thomas — Built with care.
      </p>
    </footer>
  )
}