import React, { useEffect, useState } from "react";
import "./App.css";
import { DropdownButton } from "react-bootstrap";
import SpellDetails from "./components/SpellDetails.jsx";
import SkillButton from "./components/SkillButton.jsx";

function App() {
  const [allSpells, setAllSpells] = useState([]);
  const [skillObj, setSkillObj] = useState();
  const [hasDmg, setHasDmg] = useState(false);

  useEffect(() => {
    console.log("effect triggered");
    fetch("https://www.dnd5eapi.co/api/spells/")
      .then((res) => res.json())
      .then((data) => {
        setAllSpells(data["results"]);
      });
  }, []);

  useEffect(() => {
    console.log("og skill object", skillObj);
    if (skillObj) {
      spellSlots();
    }
  }, [skillObj]);

  const spellSlots = () => {
    let dmgObj;
    if (skillObj["damage"]) {
      dmgObj = skillObj["damage"];
      console.log("does damage");
      console.log(dmgObj);
      setHasDmg(true);
      if (dmgObj["damage_at_character_level"]) {
        console.log("level modifier");
        console.log(dmgObj["damage_at_character_level"]);
      } else {
        console.log("not controlled by level");
      }
      if (dmgObj["damage_at_slot_level"]) {
        console.log("slot modifier");
        console.log(dmgObj["damage_at_slot_level"]);
      } else {
        console.log("not controlled by slot");
      }
    } else {
      console.log("no damage");
      setHasDmg(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <DropdownButton id="dropdown-basic-button" title="All Spells">
            {allSpells.map((skill, i) => (
              <SkillButton
                skill={skill}
                skillObj={skillObj}
                setSkillObj={setSkillObj}
              />
            ))}
          </DropdownButton>
        </div>
        <div className="col-md-4">
          {skillObj ? (
            <SpellDetails skillObj={skillObj} setSkillObj={setSkillObj} />
          ) : (
            "no"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
