const express = require("express");
const User = require('../models/user')
const mongoose = require("mongoose");

// The controller should have routes...
const router = express.Router()
const validator = require('express-validator')

const session = require("express-session");
const mongoSessisonStore = require("connect-mongo")(session);

// set the session 
router.use(session({
    store: new mongoSessisonStore({mongooseConnection: mongoose.connection}),
    saveUninitialized: true,
    resave: true,
    secret: "ManalShehriKey",
    // one month
    cookie: { maxAge: 30 * 60 * 1000 },
  }))

//======================================
// to get to users/new
//======================================
router.get('/users/new', (req, res)=> {
    res.render('users/new.ejs');
})

//======================================
// create a new user
//======================================
router.post(
    "/users",
    validator.body('password').isLength({min: 5}),
  (req, res) => {
  
    const validationErrors = validator.validationResult(req);
    if(!validationErrors.isEmpty()) return res.status(500).send('validation error')
  
    User.createSecure(req.body.username, req.body.password, (err, newUser)=> {
      console.log('newUser',newUser);
      // adding the session of user
      req.session.userId = newUser._id;
      console.log(req.session.userId)
      res.redirect('/')
    })
  });


// export routes
module.exports = router