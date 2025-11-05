import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specs from './components/Specs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Geist','Inter',system-ui,sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <Specs />
      </main>
      <Footer />
    </div>
  )
}

export default App
