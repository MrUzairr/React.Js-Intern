const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.get("/getallrooms",async(req,res)=>{

    try {
        const rooms = await Room.find({})
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({error});
    }
});

router.get('/getroombyid',async(req,res)=>{
    const roomid = req.query.roomid;
    try {
        const rooms = await Room.findOne({_id:roomid})
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({error});
    }
});



router.post('/addroom',async(req,res)=>{  
    try {
        const room = new Room(req.body);
        await room.save();
        res.send(room)
    } catch (error) {
        console.log(error)
        return res.status(400).json({error})
    }
})

module.exports = router;