import React from "react";
import './index.css'
export default function About() {
  return (
    <div>
      <div className="row about-container"  id='about' style={{margin:'150px'}}>
        <div className="col-md-6 mt-4">
          <h1 className="mt-3">Crowny Hotel</h1>
          <p className="mt-4" style={{textAlign:'justify'}}>
            Welcome to Crowny Hotel, where luxury meets comfort. Nestled in the
            heart of the city, our elegant rooms offer stunning views and modern
            amenities. Indulge in exquisite dining at our fine restaurants,
            serving a fusion of global cuisines. Unwind at our spa for ultimate
            relaxation or host your events in our versatile venues. Our
            dedicated staff ensures impeccable service, making your stay truly
            memorable. Whether for business or leisure, Crowny Hotel is your
            haven of sophistication and tranquility, promising an unforgettable
            experience from the moment you arrive.
          </p>
          <input type="submit" className="mt-2" style={{backgroundColor:'#0A52AC',color:'#fff',border:'none',padding:'10px 30px',borderRadius:'3px'}} value={'About Us'} />
        </div>
        <div className="col-md-6 about-div2">
          <img src="474949518.jpg" height={'400px'} style={{borderRadius:'5px'}}alt="" />
        </div>
      </div>
    </div>
  );
}
