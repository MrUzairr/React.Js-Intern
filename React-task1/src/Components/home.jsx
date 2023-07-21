import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const input = {
    padding: "5px 10px",
  };

  const [color, setColor] = useState("");

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('formContainer').style.backgroundColor = color;
    document.getElementById('heading').style.color = color;
  }

  return (
    <div className="homepage">
        <h1 id="heading">Color Picker</h1>
    <div>
      <div>
        <Link to="/">Home </Link>
        <Link to="/service">Service </Link>
        <Link to="/about">About </Link>
      </div>
    <form className="formData" id="formContainer">
      <h3>Billing details</h3>
      <hr />
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput style={input} id="form6Example1" label="First name" />
        </MDBCol>
        <MDBCol>
          <MDBInput style={input} id="form6Example2" label="Last name" />
        </MDBCol>
      </MDBRow>

      <MDBInput
        style={input}
        wrapperClass="mb-4"
        id="form6Example3"
        label="Company name"
      />
      <MDBInput
        style={input}
        wrapperClass="mb-4"
        id="form6Example4"
        label="Address"
      />
      <MDBInput
        style={input}
        wrapperClass="mb-4"
        type="email"
        id="form6Example5"
        label="Email"
      />
      <MDBInput
        style={input}
        wrapperClass="mb-4"
        type="tel"
        id="form6Example6"
        label="Phone"
      />
      <MDBInput type="color" value={color} onChange={handleColor} />
      <MDBBtn
        className="mb-4"
        style={{ marginTop: "20px",padding:'10px' ,fontSize: "20px" }}
        onClick={handleSubmit}
        type="submit"
        block
      >
        Change Color
      </MDBBtn>
    </form>
    </div>
    </div>


  );
}
