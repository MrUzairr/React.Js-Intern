import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';


export default function Register() {
  return (
    <div className="formContainer">
    <div className="formContent1 formContent">
    <form>
    <h1>Sign up</h1>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' className='input' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' style={{padding:'2px 4px'}} className='input' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4 input' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4 input' type='password' id='form3Example4' label='Password' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        className='remember checkbox'
        id='form3Example5'
        label='Subscribe to our newsletter'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4 btnSubmit' block>
        Sign up
      </MDBBtn>

      <div className='text-center forReg'>
        <p>or sign up with:</p>

        <div className="iconDiv1">
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f"  className="icons"/>
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" className="icons"/>
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="google" className="icons"/>
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" className="icons"/>
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" className="icons"/>
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="github" className="icons"/>
          </a>
        </div>
      </div>
    </form>
    </div>
    </div>
  );
}