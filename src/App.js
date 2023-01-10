import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
// import { fetchSpells, fetchSpellByName } from "../db/DataFetch";

function App() {
  const [allSpells, setAllSpells] = useState({});
  const [spellObj, setSpellObj] = useState({});
  const url = "https://www.dnd5eapi.co/api/";
  var spellNames = [];

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
      const res = await fetch(url + "/spells/" + name, {
        method: "GET",
      });
      return res.json();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchSpells();
    console.log("debug");
    // console.log(allSpells);
  }, []);

  for (var i = 0; i < allSpells.length; i++) {
    spellNames.push(allSpells[i]["name"]);
  }
  console.log(spellNames);

  return (
    <div className="App">
      {spellNames.map((n) => (
        <p>{n}</p>
      ))}
    </div>
  );
}

export default App;
