const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/db.json");
const cors = require("cors");
const fs = require("fs");

const PORT = 8080;

const app = express();
app.use(express.json());
// We are using our packages here
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//routes
app.get("/spell-list/", (req, res) => {
  console.log("/spell-list/");
});
