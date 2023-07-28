require("dotenv").config();

const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

var multer = require("multer");

const jwt = require("jsonwebtoken");

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1/amanDB");
  console.log("Connected");
  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    shows: {
      type: Array,
    },
    img: {
      type: String,
    },
  });

  const User = new mongoose.model("User", userSchema);

  const people = [];

  app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({
      email: email,
    })
      .then((founduser) => {
        if (founduser) {
          if (password === founduser.password) {
            const user = { name: email };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            //console.log(accessToken)
            res.send({
              message: "Welcome",
              User: founduser,
              auth: accessToken,
            });
          } else {
            res.send({ message: "invalid credential" });
          }
        } else {
          res.send({ message: "user not registered" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/register", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          const newUser = new User({
            email,
            password,
          });
          newUser
            .save()
            .then(() => {})
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/values", (req, res) => {
    console.log(User.find());
    console.log(people);
    res.send(people);
  });

  app.listen(5000, function () {
    console.log("Server started on port 5000");
  });
}
