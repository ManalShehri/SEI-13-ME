const mongoose =require("mongoose");

const companySchema = new mongoose.Schema({
    name : String,
    logo : String,
    address : String,
    city : String,
    telephone: String,
    cars :[{type : mongoose.Schema.Types.ObjectId , ref : 'car'  }],
    // drivers : [{type: mongoose.Schema.Types.ObjectId, ref: 'driver'}]
} , {timestamps :true})

const Companay = mongoose.model('company' , companySchema)
module.exports = Companay 