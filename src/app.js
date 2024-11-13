const express = require("express");
const app = express();
const  Restaurant = require("../models/index");
const db = require("../db/connection");
const restaurant = require('../db/routes/restaraunt')

app.use(express.json())
app.use(express.urlencoded())


//TODO: Create your GET Request Route Below:

app.get("/restaurants", restaurant);

app.post("/restaurants/:id", restaurant);



app.post("/restaurants", restaurant);


app.put("/restaurants/:id", restaurant)

app.delete("/restaurants/:id", restaurant)

module.exports = app;
