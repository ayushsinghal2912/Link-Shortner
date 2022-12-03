//jshint esversion:6

const express = require("express");
const { createConnection } = require("mongoose");
const connectDB = require("./config/db")

const app = express();

// Connect to database
connectDB();

app.use(express.json({extended: false}));
const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

