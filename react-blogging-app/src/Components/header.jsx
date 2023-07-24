import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='home-header'>
        <h2>Inc. This Work</h2>
        <h1><span>“ </span>Blog<span> ”</span></h1>
        <p>
            awesome place to make yourself <br/> productive and entertained through daily updates. 
        </p>
      <Link to='/create' className='createBtn' style={{textDecoration:'none'}}>Create Blog</Link>
    </div>
  )
}
