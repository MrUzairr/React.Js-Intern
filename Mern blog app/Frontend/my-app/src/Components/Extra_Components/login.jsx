import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

class UserLogin{
  constructor(firstname,lastname)
  {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
export default function Login() {
  const [data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://working-separate-gateway.glitch.me/getUserData");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  const handleClick = () => {
    let emailData = document.getElementById("form2Example1").value;
    let passwordData = document.getElementById("form2Example2").value;

    const matchedUser = data.find(
      (item) => item.email === emailData && item.password === passwordData
    );
    data.map((item) => {
      console.log(item.email, item.password);
    });

    if (matchedUser) {
      data.map((element)=>{
        if(element.email === emailData && element.password === passwordData)
        {
          let obj = new UserLogin(element.firstname,element.lastname);
          localStorage.setItem('userLogin',JSON.stringify(obj));
          console.log('Data stored in localStorage:', obj);
        }
      });
      alert("Successful login");
      localStorage.setItem("check", true);
      setLoggedIn(true); // Update login status
      window.open("/", "_self");
    } else {
      alert("Your credentials are wrong");
    }
  };

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
            {/* ... rest of the code ... */}
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

          <MDBBtn
            type="button"
            onClick={handleClick}
            className="mb-4 btnSubmit"
            block
          >
            Sign in
          </MDBBtn>

          {loggedIn ? ( // Conditionally render the create page link
            <Link
              className="createBtn createPage"
              to="/create"
              style={{ textDecoration: "none" }}
            >
              Create Blog
            </Link>
          ) : null}

          <div className="text-center forReg">
            {/* ... rest of the code ... */}
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <div className="iconDiv">
              <a href="#" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" className="icons" />
              </a>
              <a href="#" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" className="icons" />
              </a>
              <a href="#" className="me-4 text-reset">
                <MDBIcon fab icon="google" className="icons" />
              </a>
              <a href="#" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" className="icons" />
              </a>
              <a href="#" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" className="icons" />
              </a>
              <a href="#" className="me-4 text-reset">
                <MDBIcon fab icon="github" className="icons" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
