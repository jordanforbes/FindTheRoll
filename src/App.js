import React, { useEffect, useState } from "react";
import "./App.css";
import DDMenu from "./components/DDMenu.jsx";
import SpellDetails from "./components/SpellDetails.jsx";

function App() {
  const [allSpells, setAllSpells] = useState([]);
  // const [skillChoice, setSkillChoice] = useState({
  //   index: "",
  //   name: "",
  //   url: "",
  // });
  const [skillObj, setSkillObj] = useState({
    index: "",
    name: "",
    url: "",
    desc: "",
    damage: [],
    heal_at_slot_level: [],
    higher_level: [],
    level: 0,
  });

  useEffect(() => {
    console.log("effect triggered");
    fetch("https://www.dnd5eapi.co/api/spells/")
      .then((res) => res.json())
      .then((data) => {
        setAllSpells(data["results"]);
      });
  }, []);

  useEffect(() => {
    console.log("custom skill object");
    console.log(skillObj);
  }, [skillObj]);

  return (
    <div className="App">
      <div className="container">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <DDMenu
            spellNames={allSpells}
            // skillChoice={skillChoice}
            // setSkillChoice={setSkillChoice}
            skillObj={skillObj}
            setSkillObj={setSkillObj}
          />
        </div>
        <div className="col-md-4">
          <SpellDetails
            // skillChoice={skillChoice}
            // setSkillChoice={setSkillChoice}
            skillObj={skillObj}
            setSkillObj={setSkillObj}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
