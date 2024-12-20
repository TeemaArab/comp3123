const User = require ('../dbModels/userModel');

exports.signup = (req, res) => {
    const {username, email, password} = req.body;

// create a new user 
const newUser = new User({username, email, password});

// we have to save the user in the database
newUser.save()
. then(() => {
    res.status(201).json({message: 'User created successfully'});
})
.catch(error =>{
    res.status(500).json({message: 'Server error while creating user', error});
});

};  // this is to sign up a user


exports.login = (req, res) => {
    const {email, password} = req.body;

// find the user by email
User.findOne({email})
.then(User => {
    if(!User || User.password !== password){
        return res.status(400).json({message: 'Invalid email or password'});
    }
    // if everything is correct, send a success message
    res.status(200).json({message: 'Login successful', User_id: User._id});
   
})
.catch(error => {
    // HANDLING SERVER ERRORS
    res.status(500).json({message: 'Server error while logging in', error});
});

}; // this is to login a user

// to get all users
exports.getAllUsers = (req, res) => {
    const { username, email, password } = req.query;

    // Build query object based on available query parameters
    let query = {};
    if (username) query.username = username;
    if (email) query.email = email;
    if (password) query.password = password;

    // Use the query object to find users that match
    User.find(query)  
    .then(users => {
        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found matching the criteria' });
        }
        res.status(200).json(users); // return matching users if found
    })
    .catch(error => {
        res.status(500).json({ message: 'Error fetching users', error }); // handle errors
    });
};