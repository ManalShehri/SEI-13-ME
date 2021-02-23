const mongoose =require("mongoose");

const carSchema = new mongoose.Schema({
    name : String,
    model : String,
    year : String,
    image : String,
} , {timestamps :true})

const Car = mongoose.model('car' , carSchema)
module.exports = Car 

