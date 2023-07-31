import React from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import BlogList from './blogList'
import Navbar from './Extra_Components/navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BlogList />
    </div>
  )
}
