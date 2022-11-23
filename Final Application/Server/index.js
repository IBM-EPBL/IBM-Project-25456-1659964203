const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".config" });
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

// Connection to the database
mongoose.connect("mongodb://127.0.0.1:27017/srs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routing
app.use("/login", require("./routes/login"));
app.use("/user", require("./routes/user"));
app.use("/train", require("./routes/train"));
