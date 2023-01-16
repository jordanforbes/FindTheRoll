import React, { useEffect, useState } from "react";
import "./App.css";
import { DropdownButton } from "react-bootstrap";
import SpellDetails from "./components/SpellDetails.jsx";
import SkillButton from "./components/SkillButton.jsx";
import useDamage from "./hooks/useDamage";

function App() {
  const [allSpells, setAllSpells] = useState([]);
  const [skillObj, setSkillObj] = useState();
  const dmgObj = useDamage(skillObj);

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
      console.log(dmgObj);
    }
    console.log("damage object", dmgObj);
  }, [skillObj]);

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
