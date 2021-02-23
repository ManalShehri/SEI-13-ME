const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv').config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(
    process.env.mongodb,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(`Connected to MongoDB`)
);

app.use('/api/user',require('./routes/user'));

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
