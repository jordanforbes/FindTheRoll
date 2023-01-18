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
  const [charLevel, setCharLevel] = useState(1);
  const [spellSlot, setSpellSlot] = useState(1);
  const [dmgRoll, setDmgRoll] = useState("none");

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
    if (dmgObj["slotRolls"] !== false || dmgObj["healSlots"] !== false) {
      setDmgRoll("slots");
    } else if (dmgObj["checksLevel"] !== false) {
      setDmgRoll("level");
    } else {
      setDmgRoll("none");
    }
  }, [dmgObj]);

  const handleSlotSelect = (slot) => {
    setSpellSlot(slot);
  };
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

          {/* skill button column */}
          <div className="col-md-1 buttonColumn">
            {/* select skill */}
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

            {dmgRoll === "level" ? (
              <div className="row">
                <DropdownButton id="levelSelect" title="Level">
                  {Array(20)
                    .fill(1)
                    .map((n, i) => (
                      <Dropdown.Item index={i + 1}>{i + 1}</Dropdown.Item>
                    ))}
                </DropdownButton>
              </div>
            ) : dmgRoll === "slots" ? (
              <div className="row">
                <DropdownButton
                  id="slotSelect"
                  title={`Spell Slot ${spellSlot}`}
                >
                  {Array(9)
                    .fill(1)
                    .map((n, i) => (
                      <Dropdown.Item index={i + 1}>{i + 1}</Dropdown.Item>
                    ))}
                </DropdownButton>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
