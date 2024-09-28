const express = require('express');
const app = express();
const SERVER_PORT = 3000;

app.get('/hello',(req,res) =>{
    res.send('Hello Express JS.');
});

// http://localhost:3000/user?firstname=Fatima&lastname=Arab
app.get('/user', (req, res) => {
   
    const firstName = req.query.firstname || "Pritesh";
    const lastName = req.query.lastname || "Patel";
    res.status(200).json({
      firstName: firstName,
      lastName: lastName
    });
  });

    // http://localhost:3000/user/John/Doe
  app.post('/user/:firstName/:lastName', (req, res) => {
    const firstName =req.params.firstName;
    const lastName = req.params.lastName;
    res.status(201).json({
      firstName: firstName,
      lastName: lastName
    });

  });

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});