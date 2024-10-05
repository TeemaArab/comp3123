const express = require('express');
const router = express.Router();

router.get('/employees', (req, res) => {
    res.send('Get all employees');
});

router.get('/employees/:id', (req, res) => {
    res.send(`Get employee by id : ${req.params.id}`);
});

//get body data

router.post('/employees', (req, res) => {
    const emp = req.body;
    res.send(emp);
});

router.put('/employees/:id', (req, res) => {
    res.send(`Update employee by id : ${req.params.id}`);
});

router.delete('/employees/:id', (req, res) => {
    res.send(`Delete employee by id : ${req.params.id}`);
});

module.exports = router;