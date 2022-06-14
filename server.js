const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const morgan = require('morgan');
const projects = require('./projects.json');
const about = require("./about.json");

const app = express();

require('dotenv').config();

const {PORT = 4000, MONGODB_URL} = process.env;

mongoose.connect(MONGODB_URL);

// Mongo Status Listeners
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log('Error with MongoDB: ' + err.message))

//Middleware----------------------------------
app.use(cors());

//HOME----------------------------------------
app.get("/", (req, res) => {
    res.send("Hey there")
});

//ROUTES--------------------------------------
app.get("/projects", (req, res) => {
    res.json(projects)
});

app.get('/about', (req, res) =>{
    res.json(about)
});

app.listen(PORT, () => {
    console.log(`We are a go!: ${PORT}`);
})