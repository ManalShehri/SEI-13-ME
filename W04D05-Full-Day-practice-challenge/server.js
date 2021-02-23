const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();
const mongoSessisonStore = require("connect-mongo")(session);
const validator = require('express-validator')

mongoose.connect(
    process.env.MONGO_CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(`MongoDb connected to ${process.env.MONGO_CONNECTION_URL}`)
  );
  

app.set('view engine' , 'ejs');


// use css an js on ejs file
app.use(express.static("public"));
app.use(expressLayouts);

app.get('/' , (req ,res ) => {

    if (req.user) {
        res.redirect('/singUp')
    }else {
        res.redirect('/home')
    }
   
})

// routes
app.use(require('./routes/user'))
app.use(require('./routes/twitt'))




let Port = process.env.Port || 5000

app.listen(5000 , () => console.log(`server twitter work now ${Port} `))