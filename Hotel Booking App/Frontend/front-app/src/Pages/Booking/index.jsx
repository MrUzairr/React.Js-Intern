import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import moment from "moment";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import swal from 'sweetalert2'

export default function Booking() {
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const {roomid} = useParams();
  const {fromdate} = useParams();
  const {todate} = useParams();


  const fromDate = moment(fromdate, "DD-MM-YYYY", true);
  const toDate = moment(todate, "DD-MM-YYYY", true);
  const totalDays = moment.duration(toDate.diff(fromDate)).asDays() + 1;
  const [totalAmount, setTotalAmount] = useState();
useEffect(()=>{
  if (!JSON.parse(localStorage.getItem('currentUser')).isAdmin=="true") {
    window.location.href = '/login'
  }
  async function getData() {
    try {
      setLoading(true);
      // console.log(roomid)
      const response=await fetch(`http://localhost:5000/api/rooms/getroombyid?roomid=${roomid}`);
      const data=await response.json();
      setRoom(data);
      setTotalAmount(data.rentPerDay * totalDays)
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
  getData();
},[])

  // console.log(room)
  async function onToken(token) {
    const bookingDetails = {
      room,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      token
    };
      setLoading(true);
      await fetch("http://localhost:5000/api/bookings/bookroom", {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      }) .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed.");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false)
        swal.fire('Congratulations', 'Your Room Booked Successfully', 'success').then(result => (
          window.location.href = '/room'
        ));
      })
      .catch((error) => {
        setLoading(false)
        swal.fire('Oops', 'Something went wrong', 'error');
      });
  }
  return (
    <div className="m-5">
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              {room.imageUrl && room.imageUrl.length > 0 ? (
                <img
                  className="img-detail"
                  src={room.imageUrl[0]}
                  style={{ borderRadius: "5px" }}
                  width={"100%"}
                  alt=""
                />
              ) : (
                <p>No images available</p>
              )}
            </div>
            {/* <div className="col-md-5">
              <h1>{room.name}</h1>
              <img
                src={room.imageUrl[0]}
                style={{ borderRadius: "5px" }}
                width={"500px"}
                height={"350px"}
                alt=""
              />
            </div> */}
            <div className="col-md-5">
              <h1 style={{ textAlign: "right" }}>Booking Details</h1>
              <hr />
              <div style={{ textAlign: "right" }}>
                <b>
                  <p>
                    Name :{" "}
                    {JSON.parse(localStorage.getItem("currentUser")).name}
                  </p>
                  <p>From Date : {fromdate}</p>
                  <p>To Date : {todate}</p>
                  <p>Max Count : {room.maxCount}</p>
                </b>
              </div>
              <div style={{ textAlign: "right" }}>
                <h1>Amount</h1>
                <hr />
                <b>
                  <p>Total days : {totalDays}</p>
                  <p>Rent per day : {room.rentPerDay}</p>
                  <p>Total Amount : {totalAmount}</p>
                </b>
              </div>
              <div style={{ float: "right" }}>
                <StripeCheckout
                  token={onToken}
                  currency="PKR"
                  amount={totalAmount * 100}
                  stripeKey="pk_test_51Nbd37IiTi99yyfxa90z92axcYDrFTcDwrQtK28XIAbqS6cPXwNcrOG57LQjPzTYN2WDsLFqwnBieCW4af7ERJRK00tt0sVSjg"
                >
                  <button className="btn btn-primary" >
                    Pay Now
                  </button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error message={"Something went wrong, please try again later!"} />
      )}
    </div>
  );
}
