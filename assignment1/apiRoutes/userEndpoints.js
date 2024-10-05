const express = require('express');
const signup = require('../controllers/userController').signup;
const login = require('../controllers/userController').login;
const getAllUsers = require('../controllers/userController').getAllUsers;

const router = express.Router(); // creating a router

//deifining the routes

router.post('/signup', signup); // this is to sign up
router.post('/login', login); // this is to login
router.get('/', getAllUsers); // this is to get all users

module.exports = router; // this is to export the router so that it can be used elsewhere