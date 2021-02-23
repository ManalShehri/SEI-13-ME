const express = require("express");
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')

const Companys = require('./models/company')

app.set("view engine", "ejs");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

let PORT = 4000;

mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("mongoDb is connect")
})


//======================================
// Show all companies
app.get('/companys', (req, res)=> {
    Companys.find()
    .then((companies)=>{
        console.log(companies)
        res.render('company/index.ejs', {company : companies, type: undefined})
    })
    .catch(err => console.log(err))
})

//======================================
// create company
app.get('/companys/new', (req, res)=> {
    res.render('company/New.ejs')
})


app.post('/companys/', (req, res)=> {
    // .find()
    let newCompany = {
        name: req.body.name,
        city: req.body.city,
        logo: req.body.logo,
        address: req.body.address,
        telephone: req.body.telephone
    };
    // console.log(newCompany)
    Companys.create(newCompany)
    .then(company => {
        console.log('company created', company)
        res.redirect("/companys");
    })
    .catch(err => console.log(err))
})

//=========================================

// get company by ID

app.get("/company/:id" , (req, res) =>{
    // var id = req.params.id;

    // Companys.find()
    // .then((company)=>{
    //     console.log(company[id])
    // }).catch( err => console.log(err))
    Companys.findById(req.params.id)
    .then((companies)=>{
        console.log(req.params.id)
        console.log(companies.name)
        console.log(companies.city)
        console.log(companies.logo)


        res.render('company/Show.ejs', {company : companies})
    })
    .catch(err => console.log(err))
})

//=========================================

// Edit company 

app.get('/company/edit/:id', (req, res) =>{
    Companys.findById(req.params.id)
    .then( (companies) => {
        res.render('company/Edit', {company : companies, type: undefined})
    })
    .catch(err => console.log(err)) 
})

app.put('/company/update/:id', (req, res) =>{
    
    let id = req.params.id;
    let updateInfoCompany = {
        name: req.body.name,
        city: req.body.city,
        address: req.body.address,
        telephone: req.body.telephone,
    }
    
    Companys.findByIdAndUpdate(id, updateInfoCompany)
    .then( (companies) =>{
        res.redirect("/company/" + companies.id)
    })
    .catch(err => console.log(err));
})

//=========================================

// Delete company 

app.delete("/company/:id", (req, res) => {
    
    let id = req.params.id;
    Companys.findByIdAndDelete(id)
        .then((companies) => {
            console.log('deleted')
            res.redirect("/companys");
        })
        .catch(err => console.log(err))

});

app.listen(PORT, () => {
    console.log("I am listening..");
});