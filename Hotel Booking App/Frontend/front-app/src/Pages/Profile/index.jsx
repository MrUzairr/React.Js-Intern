import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import Swal from "sweetalert2";
import './index.css'
import { Tag, Divider } from "antd";
const { TabPane } = Tabs;

function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
    if (user.isAdmin == true) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);
  const adminPanel = () =>{
    window.location.href = '/admin'
}
  return (
    <div className="m-3 mt-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key={"1"}>
          <div>
            <h1>My Profile</h1>
            <hr />
            <div style={{ float: "left" }} className="bs row profile-content">
              <div>
                <h1 className="profile-txt" style={{ fontSize: "25px", textTransform: "capitalize" }}>
                  Name : {user.name}
                </h1>
                <h1 className="profile-txt" style={{ fontSize: "25px" }}>
                  Email : <i>{user.email}</i>
                </h1>
                <h1 className="profile-txt" style={{ fontSize: "25px" }}>
                  isAdmin :{" "}
                  <Tag color="blue">{user.isAdmin ? "Yes" : "No"}</Tag>
                </h1>
                {admin && (
                  <button
                   
                    className="btn btn-secondary profile-txt"
                    onClick={adminPanel}
                    style={{ float: "right" }}
                  >
                    Admin Panel
                  </button>
                )}
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Bookings" key={"2"}>
          <MyBooking />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;

export function MyBooking() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/bookings/getbookingsbyuserid?userId=${user._id}`
        );
        const rooms = await response.json();
        setBookings(rooms);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    getData();
  }, []);

  async function cancelBooking(bookingid, roomid) {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/bookings/cancelbooking?bookingid=${bookingid}&roomid=${roomid}`
      );
      const result = await response.json();

      setLoading(false);
      Swal.fire("Congrats", "Your Booking has been Cancelled", "success");
    } catch (error) {
      setLoading(false);
      setError(true);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {loading && <Loader />}
          {bookings &&
            bookings.map((booking) => {
              return (
                <div className="bs">
                  <h1>{booking.room}</h1>
                  <p className="bookingtags">
                    <b>Booking ID</b> : {booking._id}
                  </p>
                  <p className="bookingtags">
                    <b>Check In</b> : {booking.fromDate}
                  </p>
                  <p className="bookingtags">
                    <b>Check Out</b> : {booking.toDate}
                  </p>
                  <p className="bookingtags">
                    <b>Amount</b> : {booking.totalAmount}
                  </p>
                  <p className="bookingtags">
                    <b>Status</b> :{" "}
                    {booking.status !== "cancelled" ? (
                      <Tag color="red">CANCELLED</Tag>
                    ) : (
                      <Tag color="green">CONFIRMED</Tag>
                    )}
                  </p>

                  {booking.status !== "cancelled" && (
                    <div className="text-right">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          cancelBooking(booking._id, booking.roomId);
                        }}
                      >
                        CANCEL BOOKING
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
