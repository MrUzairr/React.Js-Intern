import React from 'react'
import Navbar from './Extra_Components/navbar';
import Footer from './Extra_Components/footer';
import CardComponent from './Extra_Components/cardComponent'


export default function Product() {
  return (
    <div>
        <Navbar/>
        <CardComponent limit='20' pagetitle="Our Products"/>
        <Footer/>
    </div>
  )
}
