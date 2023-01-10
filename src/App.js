import React, { useEffect, useState } from "react";
import "./App.css";
import DDMenu from "./components/DDMenu.jsx";
import SpellDetails from "./components/SpellDetails.jsx";

function App() {
  const [allSpells, setAllSpells] = useState({});
  const [currentSpell, setCurrentSpell] = useState("scorching-ray");
  const [spellObj, setSpellObj] = useState({});
  const url = "https://www.dnd5eapi.co/api/";
  var spellNames = [];
  var spellIndex = [];

  async function fetchSpells() {
    try {
      fetch(url + "/spells/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => setAllSpells(res["results"]));
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchSpellByName(name) {
    try {
      fetch(url + "/spells/" + name, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => setSpellObj(res["results"]));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchSpells();
    fetchSpellByName(currentSpell);
    console.log("debug");
    console.log(spellObj);
    // console.log(allSpells);
  }, []);

  for (var i = 0; i < allSpells.length; i++) {
    spellNames.push(allSpells[i]["name"]);
    spellIndex.push(allSpells[i]["index"]);
  }
  // console.log(spellNames);

  return (
    <div className="App">
      <div className="container">
        <div className="col-md-4">
          <DDMenu
            spellNames={spellNames}
            spellIndex={spellIndex}
            currentSpell={currentSpell}
            setCurrentSpell={setCurrentSpell}
          />
        </div>
        <div className="col-md-4">
          <SpellDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
