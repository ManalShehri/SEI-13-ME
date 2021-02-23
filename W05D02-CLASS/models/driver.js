const mongoose =require("mongoose");

const driverSchema = new mongoose.Schema({
    name : String,
    age : String,
    address : String,
    cars :[{type : mongoose.Schema.Types.ObjectId , ref : 'car'  }]
} , {timestamps :true})

const Driver = mongoose.model('driver' , driverSchema)
module.exports = Driver 