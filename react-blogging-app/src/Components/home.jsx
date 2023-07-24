import React from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import BlogList from './blogList'

export default function Home() {
  return (
    <div>
      {/* blogs={getData} */}
      <Header/>
      <BlogList />
    </div>
  )
}
