const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.json({ msg: users })
        }).catch(err => res.json({ msg: err }))
})
router.post('/register', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    }
    User.findOne({ email: newUser.email })
        .then(user => {
            // if the email in the database
            if (user) {
                res.json({ msg: "This email is already registered" })
            }
            // if the email is not inside the database 
            else {
                var salt = bcrypt.genSaltSync(10);
                newUser.password = bcrypt.hashSync(req.body.password, salt);
                User.create(newUser)
                    .then(user => {
                        res.json({ msg: "User has been created.", user: user })
                    })
            }
        }).catch(err => res.json({ msg: err }))
})

router.post('/login', async (req, res) => {
    let {email, password} = req.body
    // the same as let email = req.body.email ... etc

    const user = await User.findOne({email:email})

    if (!user.email) {
        res.json({msg : "email is not found"})        
    }
    else {
        if (bcrypt.compareSync(password, user.password))
        {

        }
        else 
        {
            res.json({msg: "password is not corrcet"})
        }
    }

})


module.exports = router
