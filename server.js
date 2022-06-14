const express = require('express');
const cors = require("cors");
// const mongoose = require('mongoose');
// const morgan = require('morgan');
const projects = require('./projects.json');
const about = require("./about.json");

const app = express();

require('dotenv').config();

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
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));