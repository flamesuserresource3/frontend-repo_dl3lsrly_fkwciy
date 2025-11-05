import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      {/* Spline scene as full-width background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle neon and depth overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-72 w-[90%] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-cyan-500/10 via-cyan-400/10 to-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute -bottom-16 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,153,255,0.35),rgba(0,0,0,0))] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-[92%] max-w-7xl flex-col items-start justify-end pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            Apex Hyper<span className="text-white/70">—</span>
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">Electric. Sublime. Uncompromised.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/70">
            A cinematic vision of speed: sculpted carbon, silent power, and light that breathes. Depth of field. Cinematic lighting. Ultra‑photorealistic.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="group rounded-xl border border-white/10 bg-black/40 px-5 py-2 text-sm text-white/90 backdrop-blur-xl transition hover:bg-black/60">
              <span className="relative inline-flex items-center gap-2">
                Preorder
                <span className="absolute -inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
              </span>
            </button>
            <a href="#specs" className="text-sm text-cyan-300/90 hover:text-cyan-200 transition">
              Explore specs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
