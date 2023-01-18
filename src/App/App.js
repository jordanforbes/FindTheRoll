import React, { useEffect, useState } from "react";
import "./App.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import SpellDetails from "../components/SpellDetails/SpellDetails.jsx";
import SkillButton from "../components/SkillButton/SkillButton.jsx";
import StatDetails from "../components/StatDetails/StatDetails";
import useDamage from "../hooks/useDamage";

function App() {
  const [allSpells, setAllSpells] = useState([]);
  const [skillObj, setSkillObj] = useState();
  const [skillName, setSkillName] = useState("none");

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
      setSkillName(skillObj["name"]);
    } else {
      setSkillName("none");
    }
  }, [skillObj]);

  useEffect(() => {
    console.log("dmg obj", dmgObj);
  }, [dmgObj]);

  return (
    <div className="App">
      <div className="container">
        <br />
        <div className="col-md-1"></div>
        <div className="col-md-6"></div>
        <div className="row">
          <div className="col-md-2 detailsColumn">
            {skillObj ? (
              <SpellDetails skillObj={skillObj} setSkillObj={setSkillObj} />
            ) : (
              "no"
            )}
          </div>

          <div className="col-md-3 statsColumn">
            <StatDetails dmgObj={dmgObj} skillObj={skillObj} />
          </div>

          <div className="col-md-1 buttonColumn">
            <div className="row">
              <DropdownButton id="dropdown-basic-button" title={`${skillName}`}>
                {allSpells.map((skill, i) => (
                  <SkillButton
                    className="skillButton"
                    key={i}
                    skill={skill}
                    skillObj={skillObj}
                    setSkillObj={setSkillObj}
                  />
                ))}
              </DropdownButton>
            </div>

            <div className="row">
              <DropdownButton id="levelSelect" title="Level">
                {Array(20)
                  .fill(1)
                  .map((n, i) => (
                    <Dropdown.Item index={i + 1}>{i + 1}</Dropdown.Item>
                  ))}
              </DropdownButton>
            </div>

            <div className="row">
              <DropdownButton id="slotSelect" title="Spell Slot">
                {Array(9)
                  .fill(1)
                  .map((n, i) => (
                    <Dropdown.Item index={i + 1}>{i + 1}</Dropdown.Item>
                  ))}
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
