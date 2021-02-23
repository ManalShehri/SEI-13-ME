const express = require("express");
const Companies = require('../models/company')
const Cars = require('../models/car')
const router = express.Router()


//======================================
// Show all companies
//======================================
router.get('/Companies', (req, res)=> {
    Companies.find()
    .populate('cars')
    .then((companies)=>{
        console.log(companies)
        res.render('company/index.ejs', {company : companies, type: undefined})
    })
    .catch(err => console.log(err))
})

//======================================
// create company
//======================================
router.get('/Companies/new', (req, res)=> {
    Cars.find()
    .then((cars) =>{
        console.log(cars)
        res.render('company/New.ejs' , {cars:cars})
    }).catch(err => console.log(err))
})

router.post('/Companies/', (req, res)=> {
    let newCompany = {
        name: req.body.name,
        city: req.body.city,
        logo: req.body.logo,
        address: req.body.address,
        telephone: req.body.telephone,
        cars : req.body.cars
    };
    console.log(newCompany)
    Companies.create(newCompany)
    .then(company => {
        res.redirect("/Companies");
    })
    .catch(err => console.log(err))
})

//=========================================
// get company by ID
//======================================
router.get("/company/:id" , (req, res) =>{
    Companies.findById(req.params.id)
    .populate('cars')
    .then((companies)=>{
        res.render('company/Show.ejs', {company : companies})
    })
    .catch(err => console.log(err))
})

//=========================================
// Edit company 
//======================================
router.get('/company/edit/:id', (req, res) =>{
    Cars.find()
    .then(cars => {
        Companies.findById(req.params.id).populate('cars')
        .then( (companies) => {
            console.log(companies)
            console.log('...........................')
            console.log(cars)
            res.render('company/Edit.ejs', {cars, company: companies})
        })
    })
    .catch(err => console.log(err)) 
})

router.put('/company/update/:id', (req, res) =>{
    let updateCompany = {
        name: req.body.name,
        city: req.body.city,
        address: req.body.address,
        telephone: req.body.telephone,
        cars : req.body.cars
    }
    Companies.findByIdAndUpdate(req.params.id, updateCompany)
    .then( (company) =>{
        res.redirect("/company/" + company.id)
    })
    .catch(err => console.log(err));
})

//=========================================
// Delete company 
//======================================
router.delete("/company/:id", (req, res) => {
    Companies.findByIdAndDelete(req.params.id)
        .then((companies) => {
            res.redirect("/Companies");
        })
        .catch(err => console.log(err))
});

module.exports = router
