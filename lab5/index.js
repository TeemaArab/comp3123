const express= require('express');  //setup for the restaurant
const empRouter = require('./emp');  // like a section in the restaurant
const userRouter = require('./users'); // like another section in the restaurant
const app = express();  // the restaurant itself
const errorHandlerMiddleware = require('./errorHandlerMiddleware');
const SERVER_PORT = process.env.PORT ||3000; // the address to the restaurant

// adding middleware

app.use(express.json()); // the staff can read customer's order 
app.use(express.urlencoded({extended:true})); // the staff can understand it the menu is in special format


// everytime a customer gives an order, the waiter write it down and the time of the order
const loggerMiddleware = (req,res,next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
    next();   // this is like sending the order to the kitchen
}
//apply the middleware to all request  -- Routes are like different section in the restaurant
app.use('/user',loggerMiddleware); // this waiter serves the user section


app.use('/user',userRouter); // users are directed to the user menu
app.use('/emp',empRouter);// employees are directed to the employee menu

// error end point
//http://localhost:3000/error   // handling error is like the restaurant manager 
app.get('/error',(req,res)=>{
    throw new Error('This is a forced error'); // thriw is like causing a problem
    res.send('Welcome to Express error handling');
});



//error handling middleware
app.use(errorHandlerMiddleware);  // the manager is called to handle the problem

app.listen(SERVER_PORT, () => { // the resturant's door  is open for business
    console.log(`Server is running on port ${SERVER_PORT}`);
});