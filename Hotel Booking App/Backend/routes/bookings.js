const express = require("express");
const router  = express.Router();
const Room = require("../models/room");
const Booking = require("../models/booking");
const { moment } = require("moment");
const {v4:uuidv4} = require('uuid');
const stripe = require('stripe')('sk_test_51Nbd37IiTi99yyfxIRmDZ5diBkv3iwB58gBqaELdtoqNC40NS7wIQOBJepDZYdJQo4OMPqIFXou7TcfnqzGa6Jor00oPGbjd39')


// router.post("/bookroom", async (req, res) => {
//   const { room, userId, fromDate, toDate,totalAmount ,totalDays, token } = req.body;

//   try {
//     const customer = await stripe.customers.create({
//       email: token.email,
//       source: token.id
//     });

//     // const totalAmountInCents = Math.ceil(room.rentPerDay * totalDays * 100);

//     const payment = await stripe.charges.create(
//       {
//       amount: totalAmount*100,
//       customer: customer.id,
//       currency: 'pkr',
//       receipt_email: token.email
//     },
//     {
//       idempotencyKey:uuidv4()
//     }
    
//     );

//     if (payment) {
//       const newBooking = new Booking({
//         room: room.name,
//         roomId: room._id,
//         userId,
//         fromDate: moment(fromDate, "DD-MM-YYYY").format("DD-MM-YYYY"),
//         toDate: moment(toDate, "DD-MM-YYYY").format("DD-MM-YYYY"),
//         totalAmount: room.rentPerDay * totalDays,
//         totalDays,
//         transectionId: payment.id,
//         status: 'booked'
//       });

//       const booking = await newBooking.save();
//       const roomtemp = await Room.findOne({ _id: room._id });
//       roomtemp.currentBooking.push({
//         bookingId: booking._id,
//         fromDate: moment(fromDate, "DD-MM-YYYY").format("DD-MM-YYYY"),
//         toDate: moment(toDate, "DD-MM-YYYY").format("DD-MM-YYYY"),
//         userId,
//         status: booking.status
//       });
//       await roomtemp.save();
//     }

//     res.status(200).json({ message: "Payment Successful, Your room is booked" });
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
// });

// router.post("/bookroom", async (req, res) => {
//   const { room, userId, fromDate, toDate, totalAmount, totalDays, token } = req.body;

//   try {
//     const customer = await stripe.customers.create({
//       email: token.email,
//       source: token.id
//     });

//     const payment = await stripe.charges.create({
//       amount: totalAmount * 100,
//       customer: customer.id,
//       currency: 'pkr',
//       receipt_email: token.email
//     });

//     if (payment) {
//       const newBooking = new Booking({
//         room: room.name,
//         roomId: room._id,
//         userId,
//         fromDate: moment(fromDate, "DD-MM-YYYY").format("DD-MM-YYYY"),
//         toDate: moment(toDate, "DD-MM-YYYY").format("DD-MM-YYYY"),
//         totalAmount,
//         totalDays,
//         transectionId: payment.id, // Use Stripe payment id as transactionId
//         status: 'booked' // You can set status directly here
//       });

//       const booking = await newBooking.save();
//       const roomtemp = await Room.findOne({ _id: room._id });
//       roomtemp.currentBooking.push({
//         bookingId: booking._id,
//         fromDate: moment(fromDate, "DD-MM-YYYY").format("DD-MM-YYYY"),
//         toDate: moment(toDate, "DD-MM-YYYY").format("DD-MM-YYYY"),
//         userId,
//         status: booking.status
//       });
//       await roomtemp.save();
//     }

//     res.status(200).json({ message: "Payment Successful, Your room is booked" });
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
// });

        // const payment = await stripe.charges.create(
        //     {
        //       amount: totalAmount*100,
        //       customer:customer.id,
        //       currency:'pkr',
        //       receipt_email:token.email
        //     },
        //     {
        //         idempotencyKey: uuidv4()
        //     }
        // )
router.post("/bookroom", async (req, res) => {
  const { room, userId, fromDate, toDate, totalAmount, totalDays, token } = req.body;
  let success = false;
  try {
        const customer = await stripe.customer.create(
            {
                email: token.email,
                source: token.id
            }
        )
        const payment = await stripe.charges.create({
          amount: totalAmount * 100,
          customer: customer.id,
          currency: "pkr",
          receipt_email: token.email,
      }, {
          idempotencyKey: uuidv4(),
      });
        if(payment){
          try {
            success = true;
            const newBooking = new Booking({
              room: room.name,
              roomId: room._id,
              userId,
              fromDate: moment(fromDate).format("DD-MM-YYYY"),
              toDate: moment(toDate).format("DD-MM-YYYY"),
              totalAmount,
              totalDays,
              transectionId: "1234",
            });
            const booking = await newBooking.save();
            const roomtemp = await Room.findOne({ _id: room._id });
            console.log(roomtemp)
            roomtemp.currentBooking.push({
              bookingId: booking._id,
              fromDate: moment(fromDate).format("DD-MM-YYYY"),
              toDate: moment(toDate).format("DD-MM-YYYY"),
              userId:userId,
              status:booking.status
            });
            await roomtemp.save()
          res.send(roomtemp)

          } catch (error) {
        return res.status(400).json({error})
            
          }
         
        }
        if(success == true){
          res.send("Payment Successfull, Your room is booked")
        }
        
    } catch (error) {
      if(success == false){
        return res.status(400).json({error})
      }
    }

});

router.post('/getbookingsbyuserid',async(req,res)=>{
  const userid = req.body.userId;
  try {
    const bookings = await Booking.find({userId:userid})
    res.send(bookings)
  } catch (error) {
    return res.status(400).json({error})
    
  }
});

router.post('/cancelbooking',async(req,res)=>{
  const {bookingid,roomid} = req.body
  try {
    const bookingitem = await Booking.findOne({_id:bookingid});
    bookingitem.status = 'cancelled';
    await bookingitem.save();
    const room = await Room.findOne({_id:roomid});
    const bookings = room.currentBooking;
    const temp = bookings.filter(booking => booking.bookingId.toString()!== bookingid);
    room.currentBooking = temp;
    await room.save()
    res.send(room)
  } catch (error) {
    return res.status(400).json({error})
  }
});

router.get('/getallbookings',async(req,res)=>{
  try {
    const bookings = await Booking.find();
    res.send(bookings)
  } catch (error) {
    return res.status(400).json({error})
  }
})

module.exports = router;
