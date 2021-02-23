const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config()
const mongoose = require('mongoose')

app.set("view engine", "ejs");
app.use(expressLayouts) 

const methodOverride = require("method-override");
const { render } = require("ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

let PORT = 5500;

mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("mongoDb is connect")
})

app.use(require('./controllers/company'))
app.use(require('./controllers/car'))
app.use(require('./controllers/driver'))

app.get('/', (req, res)=> {
    res.render('index.ejs')
})
app.listen(PORT, () => {
    console.log("I am listening..on", PORT);
});