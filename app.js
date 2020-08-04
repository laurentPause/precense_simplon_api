const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const port = process.env.PORT || '3030'
const routes = require('./routes')
// Make Mongoose use the ES6 promise
mongoose.Promise = global.Promise;

// Connect database
mongoose
    .connect(process.env.DB_CLUSTER + process.env.DB_NAME, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log('Error DB :', err);
    });


// Creates an ExpressJS compatible Feathers application
const app = express(feathers());

// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({
    extended: true
}));
// Host static files from the current folder
app.use(express.static(__dirname));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());
// Register a nicer error handler than the default Express one
app.use(express.errorHandler());

// Routes API
routes(app);

// Start the server
app.listen(port).on('listening', () =>
    console.log('Feathers server listening on localhost:' + port)
);