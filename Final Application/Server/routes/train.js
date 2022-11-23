const router = require("express").Router();
let Train = require("../models/train");
var ObjectId = require("mongodb").ObjectID;

router.route("/").post((req, res) => {
  console.log(req.body);
  var ntrain = new Train(req.body);
  Train.update({ _id: req.body._id }, ntrain, { upsert: true }).then((e) => {
    console.log(e);
    res.send("Success");
  });
});
router.route("/status").post((req, res) => {
  console.log(req.body);
  if (req.body._id == null) {
    res.send(null);
    return;
  }
  Train.findById(req.body._id).then((e) => {
    console.log(e);
    res.send(e);
  });
});

module.exports = router;
