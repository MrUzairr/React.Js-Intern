import React,{useState,useEffect} from 'react'
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { Tabs } from 'antd';
import swal from 'sweetalert2'
import './index.css'


const {TabPane} = Tabs; 

function Admin() {
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('currentUser')).isAdmin==false){
            // alert('You are not an admin')
            // window.location.href = '/'
            swal.fire('Oops','You don\'t have admin permission ','error').then(result=>{
                window.location.href = '/'
            })
        }
    },[])
  return (
    <div className='mt-3 m-3 bs'>
        <h2 style={{fontSize:'30px',fontWeight:'700'}} className='text-center'>Admin Panel</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab='Bookings' key={'1'}>
            <Bookings/>
        </TabPane>
        <TabPane tab='Rooms' key={'2'}>
            <Rooms/>
        </TabPane>
        <TabPane tab='Add Rooms' key={'3'}>
            <AddRoom/>
        </TabPane>
        <TabPane tab='Users' key={'4'}>
            <Users/>
        </TabPane>
        </Tabs>
    </div>
  )
}

export default Admin

// Booking List Component
export function Bookings(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [bookings,setBookings] = useState([]);
    useEffect(async()=>{
        try {
            setLoading(true)
            const response =await fetch('http://localhost:5000/api/bookings/getallbookings');
            const data = await response.json()
            setBookings(data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    },[])
    return (
        <div className='container'>
            <div className="col-md-12 table-div">
                <h1>Bookings</h1>
                {loading && (<Loader/>)}
                <table className='table table-bordered'>
                    <thead className='bs' style={{backgroundColor:'#1677FF'}}>
                        <tr>
                            <th>Booking Id</th>
                            <th>User Id</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th> 
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length && (bookings.map((booking)=>{
                            return <tr>
                                <td>{booking._id}</td>
                                <td>{booking.userId}</td>
                                <td>{booking.room}</td>
                                <td>{booking.fromDate}</td>
                                <td>{booking.toDate}</td>
                                <td>{booking.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// Room List Component

export function Rooms(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [rooms,setRooms] = useState([]);
    useEffect(async()=>{
        try {
            setLoading(true)
            const response =await fetch('http://localhost:5000/api/rooms/getallrooms');
            const data = await response.json();
            console.log(data)
            setRooms(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    },[])
    return (
        <div className='container'>
            <div className="col-md-12 table-div">
                <h1>Rooms</h1>
                {loading && (<Loader/>)}
                <table className='table table-bordered'>
                    <thead className='bs' style={{backgroundColor:'#1677FF'}}>
                        <tr>
                            <th>Room Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rent per day</th>
                            <th>Max Count</th> 
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.length && (rooms.map((room)=>{
                            return <tr>
                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.category}</td>
                                <td>{room.rentPerDay}</td>
                                <td>{room.maxCount}</td>
                                <td>{room.phoneNo}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// User List Component

export function Users(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [users,setUsers] = useState([]);
    useEffect(async()=>{
        try {
            setLoading(true)
            const response =await fetch('http://localhost:5000/api/users/getallusers');
            const data = await response.json();
            setUsers(data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    },[])

    return (
        <div className='container'>
            <div className="col-md-12 table-div">
                <h1>Users</h1>
                {loading && (<Loader/>)}
                <table className='table table-bordered'>
                    <thead className='bs' style={{backgroundColor:'#1677FF'}}>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>IsAdmin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length && (users.map((user)=>{
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// Add Room Component



export function AddRoom() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const [name,setName] = useState();
    const [rentPerDay,setRentPerDay] = useState();
    const [maxCount,setMaxCount] = useState();
    const [description,setDescription] = useState();
    const [phoneNo,setPhoneNo] = useState();
    const [category,setCategory] = useState();
    const [image1,setImage1] = useState();
    const [image2,setImage2] = useState();
    const [image3,setImage3] = useState();

   

    async function addRoom(){
       
        const newRoom = {
            name,
            rentPerDay,
            maxCount,
            description,
            phoneNo,
            category,
            imageUrl:[image1,image2,image3]
        }
        try {
            setLoading(true)
            const response = await fetch('http://localhost:5000/api/rooms/addroom',{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newRoom),
            
            });
            const result = await response.json()
            setLoading(false)
            swal.fire('Congrats','New Room Added Successfully','success').then(result=>{
                window.location.href = '/'
            })
        } catch (error) {
            setLoading(false)
            setError(true)
            swal.fire('Oops','Something Went Wrong','error')
            
        }
    }
  return (
    <div className='container'>
      <div className="col-md-6">
        {loading && (<Loader/>)}
        <input type="text" className='form-control auth' value={name} onChange={(e)=>setName(e.target.value)} placeholder='room name' required />
        <input type="number" className='form-control auth' value={rentPerDay} onChange={(e)=>setRentPerDay(e.target.value)} placeholder='rent per day' required />
        <input type="number" className='form-control auth'value={maxCount} onChange={(e)=>setMaxCount(e.target.value)} placeholder='max count' required />
        <input type="text" className='form-control auth' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='description' required />
        <input type="number" className='form-control auth' value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} placeholder='phone number' required />
      </div>
      <div className="col-md-6">
      <select name="" id="" className='form-control auth' value={category} onChange={(e)=>setCategory(e.target.value)}  required>
            <option value="" disabled selected>type</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-Delux</option>
          </select>
        <input type="text" className='form-control auth' name='image1' value={image1} onChange={(e)=>setImage1(e.target.value)} placeholder='enter first image url' id="" required/>
        <input type="text" className='form-control auth' name='image2' value={image2} onChange={(e)=>setImage2(e.target.value)} placeholder='enter second image url' id="" required/>
        <input type="text" className='form-control auth' name='image3' value={image3} onChange={(e)=>setImage3(e.target.value)} placeholder='enter third image url' id="" required/>
        <div className="text-right">
            <button className='btn btn-primary' onClick={addRoom} style={{marginTop:'12px'}}>Add Room</button>
        </div>
    </div>
    </div>
  )
}

