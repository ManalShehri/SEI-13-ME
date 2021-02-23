const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const postSchema = new mongoose.Schema({
    contant: [],
    // timestamps :boolen,
    user: [{type: mongoose.Schema.Types.ObjectId , ref : 'user' }]
})

const post = mongoose.model('post' , postSchema)
module.exports = post 