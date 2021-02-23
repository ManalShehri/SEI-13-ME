const mongoose =require("mongoose");

const companySchema = new mongoose.Schema({
    name : String,
    logo : String,
    address : String,
    city : String,
    telephone: String,
    // driver: [{
    //     name: String,
    //     age: Number,
    //     image: String
    // }],
    // car: [{
    //     name: String,
    //     model: String,
    //     year: Number,
    //     image: String
    // }]
})

const Companay = mongoose.model('company' , companySchema)
module.exports = Companay 