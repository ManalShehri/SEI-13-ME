/*
    Video: https://www.youtube.com/watch?v=38aE1lSAJZ8
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'overflowteam00@gmail.com', // TODO: your gmail account 
        pass: 'Over123123' // TODO: your gmail password
    }
});

// Step 2
transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: '../views/'
}));


// Step 3
let mailOptions = {
    from: 'overflowteam00@gmail.com', // TODO: email sender
    to: 'manal.shehri.20@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    template: 'index',
    context: {
        name: 'Accime Esterling'
    } // send extra values to template
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs',err);
    }
    return log('Email sent!!!');
});