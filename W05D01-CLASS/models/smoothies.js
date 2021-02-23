const mongoose = require('mongoose');

const smootheisSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    } ,
    fruits: [{type: mongoose.Schema.Types.ObjectId , ref : 'fruit'  }] // many to many, arrays refers to many
}, {timestamps: true})

const Smoothies = mongoose.model('smoothie', smootheisSchema)

module.exports = Smoothies
