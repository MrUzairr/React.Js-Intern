const express = require('express');
const router = express.Router();
const multer = require('multer');
const { connection } = require('../database/sql');


var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images/");
    },
    filename:function(req,file,cb) {
        cb(null,Date.now()+file.originalname);
    }
});

var upload = multer({storage});


router.post('/',upload.single("image"),(req,res,next)=>{   
    const text = req.query.text;
    const file = req.file.filename;
    const author = req.query.author;
    const data = {
        content: text,
        image: file,
        author: author,
    }
    connection.query('INSERT into blogData SET ?', data, (err, result) => {
        if (err) throw err;
        else {
            console.log('data stored');
            res.redirect('https://mern-blogs-app.netlify.app');
        }
    });
    console.log(text,file,author);

});

module.exports = router;