const express = require('express');
const cors = require("cors");
const projects = require('./projects.json');
const about = require("./about.json");

const app = express();

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