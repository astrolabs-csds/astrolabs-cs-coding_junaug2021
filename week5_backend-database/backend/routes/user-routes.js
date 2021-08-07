const express = require('express');
// We only need the routing methods from Express
const router = express.Router();
const UserModel = require('../models/UserModel.js');

// Get all of the users
// http://localhost:3001/users/
router.get('/', 
    (req, res) => {

        UserModel
        .find()
        .then(
            (dbDocument)=>{
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    }
);

// Post a new user
// http://localhost:3001/users/create
router.post('/create',
    (req, res) => {

        // Use the UserModel to create a new document
        UserModel
        .create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber
            }
        )
        .then(
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }
);

// Export the routes for 'users'
module.exports = router;