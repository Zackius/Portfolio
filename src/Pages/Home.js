import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Work from '../components/Work'

const Home = () => {
  return (
      <section className='md:pl-[410px]'>
           <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer/>
    </section>
  )
}

export default Home