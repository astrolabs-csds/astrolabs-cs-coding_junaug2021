// Import the express function.
const express = require('express');
// Import CORS (Cross-Origin Resource Sharing) to allow external 
// HTTP requests to Express
const cors = require('cors');
// This will make 'server' an object with methods 
// for server operations
const server = express();


// Parse urlencoded bodies and where the Content-Type header matches the type option
server.use( express.urlencoded({ extended: false }) );
// Tell express to parse JSON data
server.use( express.json() );
// Tell express to allow external HTTP requests
server.use(cors());

// Import mongoose to connect to MongoDB Atlas
const mongoose = require('mongoose');

// Import the Model
const userRoutes = require('./routes/user-routes.js');
const productRoutes = require('./routes/product-routes.js');


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


server.use(
    '/users', userRoutes
);

server.use(
    '/products', productRoutes
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