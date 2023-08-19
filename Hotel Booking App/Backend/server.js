const express = require('express');
const cors = require('cors');
const app = express();
const dbConfig = require('./db');

const roomsRouter = require('./routes/rooms');
const usersRouter = require('./routes/users');
const bookingsRouter = require('./routes/bookings');
const port = process.env.PORT || 4000;

app.listen(port, () => console.log('Node Server Started using nodemon'));

// Fix: Add parentheses to invoke express.json() middleware
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend URL
    credentials: true, // Allow cookies and authorization headers
  }));
  
app.options('*', cors()); 
app.use('/api/rooms', roomsRouter);
app.use('/api/users', usersRouter);
app.use('/api/bookings', bookingsRouter);
