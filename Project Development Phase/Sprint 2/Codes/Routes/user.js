const router = require("express").Router();
let User = require("../models/User");
var ObjectId = require("mongodb").ObjectID;
let Ticket = require("../models/ticket");

router.route("/getFullDetails").post((req, res) => {
  console.log(req.body);
  User.findById(req.body._id).then((e) => {
    if (e == null) {
      res.send(null);
      return;
    }
    user_data = {
      email: e._id,
      name: e.name,
      balance: e.balance,
    };
    res.send(user_data);
  });
  // res.send("1");
});

router.route("/recent").post((req, res) => {
  console.log(req.body);
  Ticket.find({ uid: req.body.uid }).then((e) => {
    console.log(e);
    res.json(e);
  });
});
router.route("/book").post((req, res) => {
  console.log(req.body);
  User.findById(req.body.uid)
    .then((e) => {
      if (e.balance < req.body.amt) {
        res.send("low balance");
        return null;
      }
      e.balance -= req.body.amt;
      console.log("E ", e);
      User.findOneAndDelete(req.body.uid).then((err) => {
        User.insertMany(e).then((a, b) => {
          console.log(a, b);
          // uid: { type: String, required: true },
          // from: { type: String, required: true },
          // to: { type: String, required: true },
          // trainNo: { type: Number, required: true },
          // passangersDetail: { type: Array, required: true },
          // validTill: { type: Date },
          const data = {
            uid: req.body.uid,
            from: req.body.fromStationId,
            to: req.body.toStationId,
            trainNo: req.body.currentTrain.trainno,
            // passangers: req.body.passangers,
            passangersDetail: req.body.passangers,
            validTill: req.body.currentTrain.departureTime,
          };
          console.log(data);
          const ntk = new Ticket(data);
          ntk
            .save()
            .then((e) => {
              res.send("debited");
            })
            .catch((e) => {
              console.log(e);
              res.send("cannot upd tk");
            });
        });
      });
    })
    .catch((e) => {
      console.log(e);
      res.send("Error");
    });
  // res.send("1");
});

module.exports = router;
