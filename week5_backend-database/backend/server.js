// Import the express function.
const express = require('express');
// This will make 'server' an object with methods 
// for server operations
const server = express();

// Import the Model
const UserModel = require('./models/UserModel.js');

// Import mongoose to connect to MongoDB Atlas
const mongoose = require('mongoose');

const connectionString = "mongodb+srv://admin01:db12345@cluster0.oikl7.mongodb.net/astro_jul2021?retryWrites=true&w=majority";

const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose
.connect(connectionString, connectionConfig)
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
                console.log(error)
            }
        )

    }
)


// The .listen() will connect the server
// to an available Port
// server.listen(portNumber, callbackFunction)
server.listen(
    3001,
    () => {
        console.log('Server is running on http://localhost:3001/')
    }
)