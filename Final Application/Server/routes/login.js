const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Bcrypt = require("./bcrypt");

router.route("/").post((req, res) => {
  User.findById(req.body.email).then((filteredUser) => {
    if (filteredUser) {
      if (Bcrypt.isequal(req.body.password, filteredUser.password)) {
        res.send("Valid");
      } else {
        res.send("Invalid");
      }
    } else {
      res.send("Account doesn't exists");
    }
  });
});
router.route("/create").post(async (req, res) => {
  User.findById(req.body.email).then((filteredUser) => {
    if (filteredUser) {
      res.send("Already Registered!");
    } else {
      const body = req.body;
      const nuser = new User({
        name: body.name,
        _id: body.email,
        password: Bcrypt.getHash(body.password),
        balance: 1000,
      });
      nuser.save().then(() => {
        res.send("Account Created");
      });
    }
  });
});

module.exports = router;
