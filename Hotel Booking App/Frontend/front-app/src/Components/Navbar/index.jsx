import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUsers, faPhone,faUser,faBellConcierge, faBars } from '@fortawesome/free-solid-svg-icons'
import { faSkyatlas } from '@fortawesome/free-brands-svg-icons'
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink
import swal from 'sweetalert2'

export default function Navbar() {
  const roomControl = () =>{
    if(JSON.parse(localStorage.getItem('currentUser'))==null){
      swal.fire('Sorry','You don\'t have permission Please Login first','error').then(result=>{
      })
    }
      else{
        window.location.href = '/room'

      }
  }
  const user = JSON.parse(localStorage.getItem('currentUser'));
  function logout(){
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }
  const [isToggled, setIsToggled] = useState(false);
  const toggleBtn = () =>{
    setIsToggled(!isToggled);
  }
  return (
    <div>
      <div className="nav-container">
        <div className="nav-content">

          <div className="nav-logo">
            <div>
              <h3><Link to='/' className='nav-logo-txt'>StayEase</Link></h3>
            </div>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
            <FontAwesomeIcon icon={faBars} />
            </label>
            <div className="nav-btn">
              {user ? (<>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" onClick={toggleBtn} aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faUser} className="nav-icon" />
                     {user.name}
                  </button>
                  {isToggled && (<div class="dropdown-menu mt-2" style={{display:'block'}} aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/profile">Profile</a>
                    <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                  </div>
                )}
                </div>
              </>) :
                (<>
                  <Link to='/signup' className="nav-links nav-btnlog">register</Link>
                  <Link to='/login' className="nav-links nav-btnlog">sign in</Link></>)}
            </div>
          </div>
          <div className="nav-tabs">
            <ul>
              <li className="nav-link-tabs">
                <FontAwesomeIcon icon={faBed} className="nav-icon" />
                <ScrollLink className="nav-links" to="home" smooth={true} duration={500}>
                  lodge
                </ScrollLink>
              </li>
              <li className="nav-link-tabs">
                <FontAwesomeIcon icon={faSkyatlas} className="nav-icon" />
                <Link className="nav-links" onClick={roomControl}>
                  rooms
                </Link>
              </li>
              <li className="nav-link-tabs">
                <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                <ScrollLink className="nav-links" to="about" smooth={true} duration={500}>
                  about
                </ScrollLink>
              </li>
              <li className="nav-link-tabs">
                <FontAwesomeIcon icon={faBellConcierge} className="nav-icon" />
                <ScrollLink className="nav-links" to="service" smooth={true} duration={500}>
                  services
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
