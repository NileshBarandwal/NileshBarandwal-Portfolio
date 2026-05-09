import './index.css'
import { BackgroundSystem } from './components/BackgroundSystem'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Chronicle } from './components/Chronicle'
import { SelectedWorks } from './components/SelectedWorks'
import { ResearchSection } from './components/ResearchSection'
import { TechnicalArsenal } from './components/TechnicalArsenal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="dark">
      <BackgroundSystem />
      <Navbar />
      <main className="max-w-container-max mx-auto relative z-[1]">
        <Hero />
        <Chronicle />
        <SelectedWorks />
        <ResearchSection />
        <TechnicalArsenal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
