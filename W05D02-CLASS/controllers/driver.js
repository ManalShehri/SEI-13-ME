const express = require("express");
const Drivers = require('../models/driver')
const router = express.Router()

//======================================
// Show all drivers
//======================================
router.get('/Drivers', (req, res)=> {
    Drivers.find()
    .then((drivers)=>{
        // console.log(drivers)
        res.render('driver/index.ejs', {driver : drivers, type: undefined})
    })
    .catch(err => console.log(err))
})

//======================================
// create driver
//======================================
router.get('/driver/new', (req, res)=> {
    res.render('driver/New.ejs')
})

router.post('/drivers/', (req, res)=> {
    let newDriver = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
    };
    Drivers.create(newDriver)
    .then(driver => {
        console.log('driver added', driver)
        res.redirect("/drivers");
    })
    .catch(err => console.log(err))
})

//=========================================
// get driver by ID
//======================================
router.get("/driver/:id" , (req, res) =>{
    Drivers.findById(req.params.id)
    .then((drivers)=>{
        res.render('driver/Show.ejs', {driver : drivers})
    })
    .catch(err => console.log(err))
})

//=========================================
// Edit driver 
//======================================
router.get('/driver/edit/:id', (req, res) =>{
    Drivers.findById(req.params.id)
    .then( (drivers) => {
        res.render('driver/Edit', {driver : drivers, type: undefined})
    })
    .catch(err => console.log(err)) 
})

router.put('/driver/update/:id', (req, res) =>{
    let updateDriver = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
    }
    Drivers.findByIdAndUpdate(req.params.id, updateDriver)
    .then( (driver) =>{
        res.redirect("/driver/" + driver.id)
    })
    .catch(err => console.log(err));
})

//=========================================
// Delete driver 
//======================================
router.delete("/driver/:id", (req, res) => {
    Drivers.findByIdAndDelete(req.params.id)
        .then((driver) => {
            res.redirect("/drivers");
        })
        .catch(err => console.log(err))
});

module.exports = router