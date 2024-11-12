const express = require("express");
const app = express();
const  Restaurant = require("../models/index");
const db = require("../db/connection");
app.use(express.json())
app.use(express.urlencoded())

//TODO: Create your GET Request Route Below:

app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

app.post("/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  const restaurant = await Restaurant.findByPk(id);
  res.json(restaurant);
});



app.post("/restaurants",  async (req,res, next) => {
  try {
    await Restaurant.create(req.body)
    res.status(201).json({message: "New Restaraunt Entry added!"})
  }

  catch(err) {
    next (error)
  }


});


app.put("/restaurants/:id", async (req,res) => {

  try{
    await Restaurant.update(req.body, {
      where: {id : req.params.id}
    })
    res.status(200)
    }

  catch (err)
  {
      res.status(404)
  }
})

app.delete("/restaurants/:id", async(req,res) => {
  try{
      await Restaurant.destroy({where: {id: req.params.id}})
      res.status(200).message("User Deleted!")
  }
  catch(err){
      res.send(400)
  }

})

module.exports = app;
