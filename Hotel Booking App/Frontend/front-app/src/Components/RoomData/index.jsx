import React,{useState} from 'react'
import {Modal,Button,Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function RoomData({room,fromdate,todate}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='row bs'>
      <div className='col-md-4'>
        <img src={room.imageUrl[0]} alt="" className='smalling' />
      </div>
      <div className='col-md-7'>
            <h1 className='roomName'>{room.name}</h1>
            <b>
                {" "}
                <p>Max Count : {room.maxCount}</p>
                <p>Phone Number : {room.phoneNo}</p>
                <p style={{textTransform:'capitalize'}}>Type : {room.category}</p>
            </b>
            <div style={{float:'right'}}>
              {(fromdate && todate) && (
              <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
              <button className='btn btn-primary m-2'>Book Now</button>
            </Link>
              )} 
                <button className='btn btn-primary m-2' onClick={handleShow}>View Details</button>
            </div>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
          {room.imageUrl.map(url=>{
            return <Carousel.Item>
              <img className='d-block w-100 bigimg' src={url} alt="" />
            </Carousel.Item>
          })}
    </Carousel>
    <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
