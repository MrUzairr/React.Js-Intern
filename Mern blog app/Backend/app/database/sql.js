 const mysql = require('mysql');
 const connection = mysql.createConnection({
    host:'bzisclzdp7pfsifbdj5c-mysql.services.clever-cloud.com',
    user:'uufpbkuy2bg3eopq',
    password:'XIW2h4E7uGo1wzJlnj3p',
    database:'bzisclzdp7pfsifbdj5c',
    port:'3306'
 });

 connection.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected');
 });

 module.exports = {connection};