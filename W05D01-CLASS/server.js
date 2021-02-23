const express = require("express");
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const methodOverride = require("method-override");
const expressLayouts = require('express-ejs-layouts');

app.set("view engine", "ejs");

app.use(expressLayouts) 
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
let PORT = process.env.PORT

//connect to MongoDb 
mongoose.connect(process.env.mongodb2, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("mongoDb is connect")
})

app.use(require('./controllers/smoothie'))
app.use(require('./controllers/fruits'))

app.listen(PORT, () => console.log(`server is running ${PORT}`));
