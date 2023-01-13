const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/db.json");
const fs = require("fs");

const PORT = 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//routes
app.get("/spell-list/", (req, res) => {
  console.log("spell list triggered");
  res.json(db);
});

//add spells to data store
app.post("/spell-list", (req, res) => {
  const dbCopy = [...db];

  dbCopy.push(req.body);
  fs.writeFileSync(
    "db/db.json",
    JSON.stringify(dbCopy),
    (err) => err && console.error(err)
  );

  res.json({ data: dbCopy, message: null });
});
