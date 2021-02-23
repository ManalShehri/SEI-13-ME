const express = require("express");
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const methodOverride = require("method-override");
const expressLayouts = require('express-ejs-layouts');
var User = require("./models/user");


app.set("view engine", "ejs");

app.use(expressLayouts) 
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
let PORT = process.env.PORT

//connect to MongoDb 
mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("mongoDb is connect")
})

// show the login form
app.get("/login", function (req, res) {
  res.render("smoothies/login");
});

// show the signup form
app.get("/signup", function (req, res) {
  res.render("smoothies/signup");
});

app.post('/sessions', (req, res) => {
  console.log('email and pass:', req.body.email, req.body.password);
  // Auth
  User.Auth(req.body.email, req.body.password, (err, foundUser)=>{
    if(err){
      console.log('Auth error: ', err)
      res.status(500).send(err)
    }else{
      res.redirect('/fruits')
    }
  })

})

app.post("/users", (req, res) => {
  User.createSecure(req.body.email, req.body.password, (err, newUser)=> {
    console.log('newUser',newUser);
    res.redirect('/login')
  })
});

app.use(require('./controllers/smoothei'))
app.use(require('./controllers/fruit'))

app.listen(PORT, () => console.log(`server is running ${PORT}`));
