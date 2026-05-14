import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Disciplines from './components/Disciplines'
import Results from './components/Results'
import Gallery from './components/Gallery'
import OurRace from './components/OurRace'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Disciplines />
        <Results />
        <Gallery />
        <OurRace />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
