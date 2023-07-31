import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const handleClick = () => {
    if(localStorage.getItem('check')==='false'){
      alert('Please Login first');
    }
    else{
      window.open('/create','_self');
      localStorage.setItem('check',false);
    }

  }
  return (
    <div className='home-header'>
        <h2>Inc. This Work</h2>
        <h1><span>“ </span>Blog<span> ”</span></h1>
        <p>
            awesome place to make yourself <br/> productive and entertained through daily updates. 
        </p>
      <Link className='createBtn createPage' onClick={handleClick} style={{textDecoration:'none'}}>Create Blog</Link>
    </div>
  )
}
