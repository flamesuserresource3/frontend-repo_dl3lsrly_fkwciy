import { Zap, Gauge, Battery, Navigation } from 'lucide-react'

const specs = [
  { icon: Gauge, label: '0–100 km/h', value: '1.8s' },
  { icon: Zap, label: 'Power', value: '1,200 hp' },
  { icon: Battery, label: 'Range', value: '620 km' },
  { icon: Navigation, label: 'Aero Drag', value: 'Cd 0.17' },
]

function Specs() {
  return (
    <section id="specs" className="relative bg-black py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />
      </div>

      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 md:grid-cols-4 md:divide-x md:divide-white/10">
            {specs.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 px-6 py-8">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-cyan-500/10 blur-lg" />
                  <Icon className="relative h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-white/50">{label}</div>
                  <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-white/50">
          Engineered for the edge. Every surface sculpts airflow. Every photon serves performance. Designed for 16K detail and beyond.
        </p>
      </div>
    </section>
  )
}

export default Specs
