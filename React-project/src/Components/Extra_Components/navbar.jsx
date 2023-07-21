import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  function handleClickSignup(){
    window.open('/signup','_self');
  }
  function handleClickSignin(){
    window.open('/signin','_self');
  }
  return (
    <div>
      <MDBNavbar expand='lg' light style={{backgroundColor:'#f3df0d'}}>
        <MDBContainer fluid className='nav-container'>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoToggler}>
            <MDBNavbarBrand href='#' className='ecommerce'><img src="cart.png" alt="Cart Logo" height={'35px'} width={'35px'} />E-Commerce Store</MDBNavbarBrand>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 navLinks' >
              <MDBNavbarItem >
                <MDBNavbarLink active aria-current='page' href='#'>
                 <Link to='/' className='link'>Home</Link> 
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                <MDBNavbarLink active aria-current='page' href='#'>       
                  <Link to='/product' className='link'>Products</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                <MDBNavbarLink active aria-current='page' href='#'>
                  <Link to='/cart' className='link'>Cart</Link>     
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                <MDBNavbarLink active aria-current='page' href='#'>
                  <Link to='/contact' className='link'>Contact Us</Link>     
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className='d-flex w-auto mb-0' style={{justifyContent:'center',alignItems:'center'}}>
              <MDBBtn outline onClick={handleClickSignin} className='btn' id='btnlogin'> 
              <Link to='/signin' className='log'>Login</Link>     
              </MDBBtn>
              <MDBBtn outline onClick={handleClickSignup} className='btn'>
              <Link to='/signup' className='log'>Signup</Link>
            </MDBBtn>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}