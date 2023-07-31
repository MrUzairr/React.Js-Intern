const express = require('express');
const router = express.Router();
const { transporter } = require('../nodemailer/nodemailer');
const { connection } = require('../database/sql');

router.post('/', (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const mailOption = {
        from: `Muhammad Uzair <publicmail760@gmail.com>`,
        to: email,
        subject: 'You have been Registered',
        html: `<p>Welcome You are Successfully Registered</p>`
    }
    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    }
    connection.query('INSERT into register SET ?', data, (err, result) => {
        if (err) throw err;
        else {
            console.log('data stored');
            transporter.sendMail(mailOption, (error, info) => {
                if (error) throw error;
                else {
                    console.log('email has sent');
                }
            });
            res.redirect('https://mern-blogs-app.netlify.app');
        }
    });
    console.log(firstname, lastname, email, password);
});

module.exports = router;
