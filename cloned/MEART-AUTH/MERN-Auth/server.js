const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose');
mongoose.connect(
    process.env.mongodb,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(`Connected to MongoDB`)
);


// Routes
app.use('/api/user',require('./routes/user'));


app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));




/*
app.get('/test', (req, res) => {
    res.json({ msg: "test message" })
});

app.post('/test', (req, res) => {
    console.log(req.body)
    res.json({ msg: `Post is working with body ${req.body.name}` })
});

app.put('/test', (req, res) => {
    console.log(req.body)
    res.json({ msg: `Put is working with body ${req.body.name}` })
});
 */