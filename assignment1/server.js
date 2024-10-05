// this file is the start for the server
// I am going to connect tothe database from here
//it listens for requests

const express = require('express');   // this is to handle requests, it is like an office 
const mongoose = require('mongoose');// thisi is to cnnect to the database
const bodyParser = require('body-parser');
const SERVER_PORT = process.env.PORT || 5000; // this is to set the port number


const userRoutes =require('./apiRoutes/userEndpoints'); // this is the file where users sign up/login
const employeeRoutes = require('./apiRoutes/employeeEndpoints'); // this is the file where employees are created

const app = express(); // this is  creating express app like creating the office
app.use(express.json()); // this is to understand data in json format


// --------Middleware---------------------------
app.use(bodyParser.json()); // this is to parse json data

//------------------connecting to the database-------------------
mongoose.connect('mongodb://admin:password@localhost:27017/comp3123_assignment1?authSource=admin')
.then(() => console.log('Connected to database'))
.catch(err => console.log('Dataabase connection error',err));

//------------------listening for requests-------------------

app.use('/api/v1/users', userRoutes); // this is to use the userRoutes file 
app.use('/api/v1/employees', employeeRoutes); // this is to use the employeeRoutes file


app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`)); // this is to listen for requests on the port number