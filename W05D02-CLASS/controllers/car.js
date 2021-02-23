const express = require("express");
const Cars = require('../models/car')
const router = express.Router()

//======================================
// Show all cars
//======================================
router.get('/Cars', (req, res)=> {
    Cars.find()
    .then((cars)=>{
        console.log(cars)
        res.render('car/index.ejs', {car : cars, type: undefined})
    })
    .catch(err => console.log(err))
})

//======================================
// create car
//======================================
router.get('/Cars/new', (req, res)=> {
    res.render('car/New.ejs')
})

router.post('/Cars/', (req, res)=> {
    let newCar = {
        name: req.body.name,
        model: req.body.model,
        year: req.body.year,
        image: req.body.image,
    };
    Cars.create(newCar)
    .then(car => {
        // console.log('car added', car)
        res.redirect("/Cars");
    })
    .catch(err => console.log(err))
})

//=========================================
// get car by ID
//======================================
router.get("/car/:id" , (req, res) =>{
    Cars.findById(req.params.id)
    .then((car)=>{
        res.render('car/Show.ejs', {car : car})
    })
    .catch(err => console.log(err))
})

//=========================================
// Edit car 
//======================================
router.get('/car/edit/:id', (req, res) =>{
    Cars.findById(req.params.id)
    .then( (cars) => {
        res.render('car/Edit', {car : cars, type: undefined})
    })
    .catch(err => console.log(err)) 
})

router.put('/car/update/:id', (req, res) =>{
    
    let id = req.params.id;
    let updateCar = {
        name: req.body.name,
        model: req.body.model,
        year: req.body.year,
        image: req.body.image,
    }
    console.log(updateCar)
    
    Cars.findByIdAndUpdate(id, updateCar)
    .then( (car) =>{
        res.redirect("/car/" + car.id)
    })
    .catch(err => console.log(err));
})

//=========================================
// Delete car 
//======================================
router.delete("/car/:id", (req, res) => {
    Cars.findByIdAndDelete(req.params.id)
        .then((cars) => {
            // console.log('deleted')
            res.redirect("/Cars");
        })
        .catch(err => console.log(err))

});
module.exports = router