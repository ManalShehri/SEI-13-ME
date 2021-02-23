const express = require('express');
const router = express.Router()
const mongoose = require("mongoose");
const validator = require('express-validator')
const session = require("express-session");
const mongoSessisonStore = require("connect-mongo")(session);
const User = require('../models/user')
const post = require('../models/post')
// for getting data from html
router.use(express.urlencoded({ extended: true }));


//create a post 
router.get('/createTwitt', (req, res) => {
    let id = req.params.id
    user.findById()
    .then(user =>{
        res.render('createTwitt' , {user})

    }).catch(err => console.log(err))
})

router


//post tweet

router.use(
    session({
        store: new mongoSessisonStore({ mongooseConnection: mongoose.connection }),
        saveUninitialized: true,
        resave: true,
        secret: "Marco's super secret secret",
        cookie: { maxAge: 30 * 60 * 1000 },
    })
);

function checkSignIn(req, res, next) {
    // if the user is logged in, just go onto the router with the netxt() keyword
    if (req.session.userId) {
        next();
    } else {
        const err = new Error("You are not logged in!");
        next(err);
    }
}

router.get('/singUp', (req, res) => {

    res.render('signUp')
})

router.get('/login', (req, res) => {

    res.render('logIn')

})
// the view of home page 
router.get('/home', (req, res) => {

    res.render('home')

})
// profile view
router.get('/profile', checkSignIn, (req, res) => {
    User.findOne({ _id: req.session.userId })
        .then((loggedInUser) => {
            res.render('profile', { user: loggedInUser });
        })
        .catch((err) => console.log("Error: User not found ", err));
})

router.get('/search', (req, res) => {
    User.find()
        .then((users) => {
            res.render('search', { users });
        })
        .catch((err) => console.log("Error: User not found ", err));
})

router.get('/followers', (req, res) => {

    res.render('followers')

})
router.get('/follwing', (req, res) => {

    res.render('follwing')

})

// Manal
// follow 
router.post('/follow', (req, res) => {
    console.log('you hit the button')
    var toFollow = req.body.toFollow
    // console.log('tofollw is ', toFollow.name)
    User.findOne({ _id: req.session.userId })
    User.follow(toFollow);
    // User.findById(toFollow)
    // .then((toFollowUser) => {
    //     res.render('profile', { user: toFollowUser });
    // })
    // .catch((err) => console.log("Error: User not found ", err));
    // req.session.userId
    // use the seesion to follow the other user

})

// route 
// add the user id to following of retrived user

//Rahmah
router.post('/login', (req, res) => {

    username = req.body.username
    password = req.body.password

    User.authenticate(username, password, (err, foundUser) => {
        if (err) {
            console.log("Authentication error: ", err);
            res.status(500).send(err);
        } else {
            req.session.userId = foundUser._id;
            res.redirect("/profile");
        }
    })
})

router.post('/search', (req, res) => {
    console.log('req.body.searchValue', req.body.searchValue)
    let findUser = req.body.searchValue

    // User.find({ $text: { $search: findUser } })
    User.find({ name: findUser })
        .then((allUsers) => {

            res.redirect('/search', { user: allUsers });
        })
        .catch((err) => console.log(err));
})






router.post('/singUp',
    // validator.body("email").isEmail(),
    // validator.body("password").isLength({ min: 5 }),

    (req, res) => {
        //   console.log('you ')
        //   console.log('req.body.username', req.body.username)

        // const validationErrors = validator.validationResult(req);

        // if (!validationErrors.isEmpty())
        //   return res.status(500).send("Validation errors");


        User.createSecure(req.body.username, req.body.password, req.body.bio, req.body.email, req.body.name, req.body.image, (err, newUser) => {
            console.log("newUser: ", newUser);
            req.session.userId = newUser._id;
            // res.render('profile')
            res.redirect("/profile");
        })
    });


//  get the update view
router.get('/user/:id/edit', (req, res) => {
    let id = req.session.userId
    res.render('edit')
    // res.render('follwing')
    User.findById(id)
        .then(user => {
    //         console.log(user)
            res.render('edit.ejs', { user })
        }).catch(err => console.log(err))

})




// update action 
router.put("/user/:id/edit", (req, res) => {
    const id = req.params.id;
    let updateUser = {
        username: req.body.username,
        password: req.body.password,
        bio: req.body.bio,
        email: req.body.email,
        name: req.body.name,
        image: req.body.image,
    };
    User.findByIdAndUpdate(id, updateUser)
        .then(user => {
            res.redirect(`/profile/${user._id}`);
        }).catch(err => console.log(err))
});

router.get("/logout", (req, res) => {
    req.session.userId = null;
    res.redirect("/");
});




module.exports = router