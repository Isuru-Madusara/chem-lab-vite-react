import Header from './components/Header'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Protocol from './components/Protocol'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Protocol />
      </main>
      <Footer />
    </div>
  )
}
