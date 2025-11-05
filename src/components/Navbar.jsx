import { useState } from 'react'

function Navbar() {
  const [active, setActive] = useState('Models')

  const links = ['Models', 'Technology', 'Design', 'Reserve']

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <nav className="mx-auto mt-4 w-[92%] md:w-[86%] lg:w-[80%] rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,150,255,0.15)]">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
            <span className="font-semibold tracking-wider text-white/90 uppercase">Apex Hyper</span>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm text-white/70">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => setActive(link)}
                  className={`relative transition-colors hover:text-white ${active === link ? 'text-white' : ''}`}
                >
                  {link}
                  <span className={`absolute -bottom-2 left-0 h-[2px] w-full transition-opacity ${active === link ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-cyan-400/90 to-blue-600/90 shadow-[0_0_12px_rgba(56,189,248,0.7)]`} />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button className="group rounded-lg border border-cyan-400/20 bg-black/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-black/60">
              <span className="relative inline-block">
                Reserve
                <span className="absolute -inset-x-1 -bottom-1 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
