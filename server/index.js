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

app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// Routes
app.get("/spellbook/", (req, res) => {
  console.log("in server");
  console.log(db);
  res.json(db);
});

app.post("/spellbook", (req, res) => {
  let dbCopy = [...db];
  console.log("post method **********************");
  console.log(req);
  dbCopy.push({
    uuid: req.query.uuid,
    index: req.query.index,
    name: req.query.name,
    url: req.query.url,
  });

  fs.writeFileSync(
    "db/db.json",
    JSON.stringify(dbCopy),
    (err) => err && console.log(err)
  );
  res.json({ data: dbCopy, message: null });
});

app.delete("/spellbook/", (req, res) => {
  let dbCopy = [];
  let deletedIndex = req.query.index;
  console.log("######### delete method");
  db.map((spell) => (deletedIndex !== spell.index ? dbCopy.push(spell) : ``));
  console.log(req.query.index);

  fs.writeFileSync(
    "db/db.json",
    JSON.stringify(dbCopy),
    (err) => err && console.log(err)
  );

  res.json({ data: db, message: null });
});
