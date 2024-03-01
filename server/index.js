const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions));

app.use(cookieParser());
const secretKey = "AB8#94X345#KLU912IO@";   // fetch from .env file
mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("User already exists");
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          UserModel.create({ name, email, password: hash })
            .then((users) => res.json(users))
            .catch((err) => res.json(err));
        })
        .catch((err) => console.log(err.message));
    }
  });
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token not available");
  } else {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.json("Wrong token");
      }
      next();
    });
  }
};

app.get("/home", verifyUser, (req, res) => {
  return res.json("Success");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;


  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            const token = jwt.sign({ email: user.email }, secretKey, {
              expiresIn: "1h",
            });
            res.cookie("token", token);
            res.json("Success");
          } else {
            return res.json("Incorrect Email or password");
          }
        });
      } else {
        res.json("Invalid Login credentials");
      }
    })

    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running");
});
