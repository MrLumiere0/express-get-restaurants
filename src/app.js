const express = require("express");
const app = express();
const Restaurant = require("../models/index");
const db = require("../db/connection");
const router = express.Router();

//TODO: Create your GET Request Route Below:

app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

app.get("/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  const restaurant = await Restaurant.findByPk(id);
  res.json(restaurant);
});

app.use(express.json());
app.use(express.urlencoded());

router.post("/:name/:location/:cuisine", async () => {
  const restName = req.params.name;
  const restLocation = req.params.location;
  const restCuisine = req.params.cuisine;

  try{

    const newREst = await Restaurant.create({
      name: restName,
      location: restLocation,
      cuisine: restCuisine,
    });
  
  }
  

  req.send(newREst);
});

module.exports = app;
