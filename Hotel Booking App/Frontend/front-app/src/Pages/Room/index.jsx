import React, { useState,useEffect } from 'react'
import RoomData from '../../Components/RoomData';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';
import moment, * as moments from 'moment';
import { DatePicker, Space } from 'antd';
const {RangePicker} = DatePicker;
export default function Room() {
  const [rooms,setRooms] = useState([])
  const [loading,setLoading] = useState()
  const [error,setError] = useState()
  const [duplicateRoom,setDuplicateRoom] = useState([]);

  const [fromdate,setFromdate] = useState();
  const [todate,setTodate] = useState();

  const [searchKey,setSearchKey] = useState('');
  const [type,setType] = useState('all')
  useEffect(()=>{
    async function getData(){
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5000/api/rooms/getallrooms')
        const data = await response.json()
        setRooms(data)
        setDuplicateRoom(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        console.log(error)
        setLoading(false)
  
      }}
      getData();
  },[])

  function filterByDate(dates) {
    if (dates && dates.length === 2) {
      const [fromDateValue, toDateValue] = dates.map(date => date.format('DD-MM-YYYY'));
      setFromdate(fromDateValue);
      setTodate(toDateValue);
  
      var tempRooms = [];
      var availability = false;
  
      for (const room of duplicateRoom) {
        if (room.currentBooking.length > 0) {
          for (const booking of room.currentBooking) {
            if (
              !moment(fromDateValue, 'DD-MM-YYYY').isBetween(booking.fromDate, booking.toDate) &&
              !moment(toDateValue, 'DD-MM-YYYY').isBetween(booking.fromDate, booking.toDate)
            ) {
              if (
                fromDateValue !== booking.fromDate &&
                fromDateValue !== booking.toDate &&
                toDateValue !== booking.fromDate &&
                toDateValue !== booking.toDate
              ) {
                availability = true;
              }
            }
          }
        }
  
        if (availability === true || room.currentBooking.length === 0) {
          tempRooms.push(room);
        }
        setRooms(tempRooms);
      }
  
    }
  }
  
  // function filterByDate(dates){
  //   setFromdate(moment(dates[0]).format('DD-MM-YYYY'));
  //   setTodate(moment(dates[1]).format('DD-MM-YYYY'));
  //   var tempRooms = []
  //   var availability = false;
  //   for(const room of duplicateRoom)
  //   {
  //     if(room.currentBooking.length>0){
  //       for(const booking of room.currentBooking)
  //       {
  //         if(!moment(moment(dates[0]).format('DD-MM-YYYY').isBetween(booking.fromDate,booking.toDate))
  //         && !moment(moment(dates[1]).format('DD-MM-YYYY').isBetween(booking.fromDate,booking.toDate))
  //         )
  //         {
  //           if(moment(dates[0]).format('DD-MM-YYYY') !== booking.fromDate
  //           && moment(dates[0]).format('DD-MM-YYYY') !== booking.toDate
  //           && moment(dates[1]).format('DD-MM-YYYY') !== booking.fromDate
  //           && moment(dates[1]).format('DD-MM-YYYY') !== booking.toDate
  //           )
  //           {
  //             availability = true
  //           }
  //         }
  //       }
  //     }
  //     if(availability == true || room.currentBooking.length == 0)
  //     {
  //       tempRooms.push(room)
  //     }
  //     setRooms(tempRooms);
  //   }
  // }


  // function filterByDate(dates) {
  //   if (dates && dates.length === 2) {
  //     const [fromDateValue, toDateValue] = dates.map(date => date.format('DD-MM-YYYY'));
  //     console.log(fromDateValue)
  //     setFromdate(fromDateValue);
  //     setTodate(toDateValue);
  
  //     // Rest of your filtering logic...
  //   }
  // }

  function filterBySearch() {
    console.log("Search Key:", searchKey);
    console.log("Duplicate Rooms:", duplicateRoom);
  
    const temprooms = duplicateRoom.filter(room => room.name.toLowerCase().includes(searchKey.toLowerCase()));
    console.log("Filtered Rooms:", temprooms);
  
    setRooms(temprooms);
  }

  function filterByType(e){
    setType(e);
    if(e!=='all'){
      const temprooms = duplicateRoom.filter(room=>room.category.toLowerCase()==e.toLowerCase())
      setRooms(temprooms);
    }
    else{
      setRooms(duplicateRoom);
    }
  }
  return (
    <div className='container'>
      <div className='row mt-5 bs'>
        <div className="col-md-4">
          <RangePicker format={'DD-MM-YYYY'} className='selectTag' onChange={filterByDate}/>
        </div>
        <div className="col-md-4">
          <input type="text" placeholder='Search Room' value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}} onKeyUp={filterBySearch} className='selectTag form-control' name="" id="" />
        </div>
        <div className="col-md-4">
          <select name="" id="" className='selectTag form-control' value={type} onChange={(e)=>{filterByType(e.target.value)}}>
            <option value="all">All</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-Delux</option>
          </select>
        </div>
      </div>
      <div className='container justify-content-center ml-5 mt-5'>

      {
        loading? (<Loader/>) : (          
          rooms.map(room=>{
              return <div className='col-md-12 mt-3'>
                <RoomData room={room} fromdate = {fromdate} todate = {todate}/>
              </div>
            }) )
            
          }
        </div>
    </div>
  )
}
