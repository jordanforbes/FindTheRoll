import React, { useEffect, useState } from "react";
import "./App.css";
import DDMenu from "./components/DDMenu.jsx";
import SpellDetails from "./components/SpellDetails.jsx";

function App() {
  // const [loading, setLoading] = useState(true);
  const [allSpells, setAllSpells] = useState([]);
  // const [error, setError] = useState(false);
  const [skillChoice, setSkillChoice] = useState({
    index: "acid-arrow",
    name: "Acid Arrow",
    url: "/api/spells/acid-arrow",
  });

  useEffect(() => {
    console.log("effect triggered");
    fetch("https://www.dnd5eapi.co/api/spells/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllSpells(data["results"]);
      });
    // console.log(allSpells);
  }, []);

  // useEffect(() => {
  //   fetch("/spells/", { method: "GET" }).then((res) => console.log(res.string));
  // }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="col-md-4">
          <DDMenu spellNames={allSpells} spellIndex={["spellIndex"]} />
        </div>
        <div className="col-md-4">
          <SpellDetails
            skillChoice={skillChoice}
            setSkillChoice={setSkillChoice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
