import React from 'react'
import Navbar from '../../Components/Navbar'
import Carusel from '../../Components/Carusel'
import About from '../About'
import Services from '../Services'
import Footer from '../../Components/Footer'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Carusel/>
        <About/>
        <Services/>
        <Footer/>
    </div>
  )
}
