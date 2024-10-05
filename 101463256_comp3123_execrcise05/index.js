const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require('fs');

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname,'home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
 fs.readFile('user.json','utf8',(err,data) => {
   if(err) {
    return res.status(500).send('Error in reading file');
   }
   res.json(JSON.parse(data));  
 });
});


app.use(express.json());

router.post('/login', (req,res) => {
  const {username, password} = req.body;

  fs.readFile('user.json','utf8',(err,data) => {
    if(err) {
      return res.status(500).send('Error in reading file');
    }
    const user = JSON.parse(data);
   
    if(user.username !== username) {
      return res.json({status: false, message: "User Name is invalid"});
    
   }
   
    if(user.password !== password) {
      return res.json({status: false, message: "Password is invalid"});
    }
    res.json({status: true, message: "User Is valid"});
   });
});




/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  const username = req.query.username;
  const password = req.query.password; 
  if(username) {
   res.send(`<b>${username} successfully logged out.<b>`);
  }else{
    res.send('Please provide username');
  }
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  res.status(500).send('Server Error');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));