const express = require('express')
const { findByIdAndUpdate } = require('../models/fruitsModel')
const Fruit = require('../models/fruitsModel')
const Smootheis = require('../models/smoothies')
const router = express.Router()

// ================================================
// Get All Smoothies
// ================================================
router.get('/smoothies' , (req , res ) =>{
    Smootheis.find()
    .populate('fruits')
    .then(smoothies =>{
        res.render('smoothies/smoothies' , {smoothies : smoothies})
    }).catch(err=> console.log(err))
})

// ================================================
// New Smoothie
// ================================================
router.get('/smoothies/new' , (req , res) =>{
    Fruit.find()
    .then(fruits =>{
        res.render('smoothies/new' , {fruits})
    }).catch(err => console.log(err))
})

router.post('/smoothies' , (req,res) =>{
    console.log(req.body)
    let newSmoothie = {
        name : req.body.name , 
        fruits : req.body.smoothieFruitsArray
    }
    Smootheis.create(newSmoothie)
    .then(smoothie =>{
        res.redirect('/smoothies')
    }).catch(err =>console.log(err))
})

// ================================================
// Get Single Smoothie
// ================================================
router.get('/smoothies/:id' , (req , res) =>{
    let id = req.params.id
    Smootheis.findById(id)
    .populate('fruits')
    .then(smoothie =>{
        res.render('smoothies/show' , {smoothie})
    })
    .catch(err => console.log(err))
})

// ================================================
// Update Single Smoothie
// ================================================
router.get('/smoothies/:id/edit' , (req , res) =>{
    let id = req.params.id
    Fruit.find()
    .then(fruits =>{
        Smootheis.findById(id)
        .then(smoothie =>{
            console.log( smoothie)
            res.render('smoothies/edit' , {fruits , smoothie : smoothie})
        })
    }).catch(err => console.log(err))
})

router.put('/smoothies/:id' ,(req , res) =>{
    let id = req.params.id
    console.log(req.body)
    let updateSmoothie = {
        name : req.body.name , 
        fruits : req.body.smoothieFruitsArray
    }
   Smootheis.findByIdAndUpdate(id , updateSmoothie)
   .then(()=>{
    res.redirect('/smoothies')
   }).catch(err =>console.log(err))
})

// ================================================
// Delete Single Smoothie
// ================================================
router.delete('/smoothies/:id' , (req , res) =>{
    let id = req.params.id
    Smootheis.findByIdAndDelete(id)
    .then(()=>{
        res.redirect('/smoothies')
    }).catch(err => console.log(err))
})

module.exports = router