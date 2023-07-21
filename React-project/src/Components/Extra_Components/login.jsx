import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Login() {
  return (
    <div className="formContainer">
      <div className="formContent">
        <form>
        <h1>Sign in</h1>

          <MDBInput
            className="mb-4 input"
            type="email"
            id="form2Example1"
            label="Email address"
          />
          <MDBInput
            className="mb-5 input"
            type="password"
            id="form2Example2"
            label="Password"
          />

          <MDBRow className="mb-4 remember">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" className="mb-4 btnSubmit" block>
            Sign in
          </MDBBtn>

          <div className="text-center forReg">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>

                    <div className="iconDiv">
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
