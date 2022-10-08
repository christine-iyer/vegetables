const mongoose = require('mongoose')

const vegetableSchema = new mongoose.Schema({
     name: { type: String, required: true },
     color: { type: String, required: true },
     readyToEat: Boolean
})

//Fruit model from schema so we can use CRUD in the app

const Vegetable = mongoose.model('Vegetable', vegetableSchema)

module.exports = Vegetable