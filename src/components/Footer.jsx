function Footer() {
  return (
    <footer className="relative bg-black py-12">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-white/10 bg-black/40 px-6 py-6 backdrop-blur-xl sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Apex Hyper. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white/80 transition">Privacy</a>
            <a href="#" className="hover:text-white/80 transition">Terms</a>
            <a href="#" className="hover:text-white/80 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
