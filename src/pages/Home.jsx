import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { About, Hero } from '../sections'

const Home = () => {
  return (
    <>
    <Navbar />
    <section className="mt-20">
    <Hero />
     </section>
     <section>
      <About />
    </section>

    <Footer/>
   
    
    </>
   
  )
}

export default Home
