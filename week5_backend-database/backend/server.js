// Import the express function.
const express = require('express');
// Import body-parser to parse the BODY of an HTTP request
const bodyParser = require('body-parser');
// This will make 'server' an object with methods 
// for server operations
const server = express();


// Parse urlencoded bodies and where the Content-Type header matches the type option
server.use( bodyParser.urlencoded({ extended: false }) );
// Tell express to parse JSON data
server.use( bodyParser.json() );

// Import mongoose to connect to MongoDB Atlas
const mongoose = require('mongoose');

// Import the Model
const UserModel = require('./models/UserModel.js');
const ProductModel = require('./models/ProductModel.js');


// NOTE: Make sure to enter your connection string.
const connectionString = "";

const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose
.connect(connectionString, connectionConfig)  // returns Promise
.then(
    () => {
        console.log('DB is connected');
    }
)
.catch(
    (dbError) => {
        console.log('error occurred', dbError);
    }
);


// A method to process a GET HTTP request.
// server.get(path, callbackFunction)
server.get(
    '/',                        // http://localhost:3001/
    (req, res) => { 
        res.send("<html><head><title>Home</title></head><body><h1>Welcome to Dany's Website</h1></body></html>")
    }
);

// Get all of the users
// http://localhost:3001/users
server.get('/users', 
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
server.post(
    '/users/create',
    (req, res) => {

        // Use the UserModel to create a new document
        UserModel
        .create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
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

// Post a new product
// http://localhost:3001/products/create
server.post(
    '/products/create',
    (req, res) => {

        // Use the UserModel to create a new document
        ProductModel
        .create(
            {
                brand: "Panasonic",
                model: "Vacuum Vvvvv",
                origin: "Japan",
                description: "vvvvvvvvvvv",
                color: "Red",
                price: 750
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

// The .listen() will connect the server
// to an available Port
// server.listen(portNumber, callbackFunction)
server.listen(
    3001,
    () => {
        console.log('Server is running on http://localhost:3001/');
    }
)