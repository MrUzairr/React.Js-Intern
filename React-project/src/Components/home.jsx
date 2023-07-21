import {React} from 'react'
import Navbar from './Extra_Components/navbar';
import Footer from './Extra_Components/footer';
import Carosel from './Extra_Components/carosel'
import CardComponent from './Extra_Components/cardComponent'

export default function Home() {

  return (
    <div>
      <Navbar/>
      <Carosel/>
      <CardComponent limit='6' pagetitle="Previous Products"/>
      <Footer/>
    </div>
  )
}
