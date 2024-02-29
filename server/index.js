const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.arguments(express.json());
app.arguments(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

app.listen(3001, ()=>{
    console.log("Server is running")
})