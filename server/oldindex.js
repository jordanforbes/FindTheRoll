import { fileURLToPath } from "url";
import path from "path";
const app = require("express");
const dirname = require("path");

const port = 8080;
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = dirname(__filename);
console.log(__dirname);

// const acidarrow = await fetchSpellByName("acid-arrow");
//get damage at slot
// console.log(acidarrow.damage.damage_at_slot_level["4"]);
// console.log(allSpells["results"][0].index);
const allSpells = await fetchSpells();

const spellId = allSpells["results"][1].index;
const thisSpell = await fetchSpellByName(spellId);
console.log("Spell Name: " + thisSpell.name);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Spell Name: " + thisSpell.name);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
