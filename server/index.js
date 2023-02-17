const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/db.json");
const cors = require("cors");
const fs = require("fs");

const PORT = 8081;

const app = express();
app.use(express.json());
// We are using our packages here
// app.use(bodyParser.json()); // to support JSON-encoded bodies

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// app.use(
//   bodyParser.urlencoded({
//     // to support URL-encoded bodies
//     extended: true,
//   })
// );
app.use(cors());

// app.all("/", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.json(db);
//   next();
// });

// Routes
app.get("/test-route/", (req, res) => {
  console.log("in server");
  console.log(db);
  res.json(db);
});

app.post("/test-route/", (req, res) => {
  // console.log("in server");
  // console.log(db);
  // res.json(db);
});

app.delete("/test-route/", (req, res) => {
  // console.log("in server");
  // console.log(db);
  // res.json(db);
});
