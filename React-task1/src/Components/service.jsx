import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function Service() {
  return (
    <div>
      <h1>Service Page</h1>
      <div>
        <Link to="/">Home </Link>
        <Link to="/service">Service </Link>
        <Link to="/about">About </Link>
      </div>
    </div>
  )
}
