import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Work from './components/Work'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <div class='flex'>
      <aside class="h-screen sticky top-0">
      <Navbar/>
      </aside>
      <main >
           <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      </main>
    </div>
  )
}

export default App
