import React, { useEffect, useState } from "react";
import "./App.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import SpellDetails from "../SpellDetails/SpellDetails.jsx";
import SkillButton from "../SkillButtonColumn/SkillButton/SkillButton.jsx";
import StatDetails from "../StatDetails/StatDetails";
import useDamage from "../../hooks/useDamage";
import SlotButton from "../SkillButtonColumn/SlotButton/SlotButton";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  revertName,
} from "../../features/skillSelector/skillSelectorSlice";
// const areScales = useSelector((state) => state.groupSelector.areScales);

function App() {
  const [allSpells, setAllSpells] = useState([]);
  const [skillObj, setSkillObj] = useState();
  const [skillName, setSkillName] = useState("none");
  const [charLevel, setCharLevel] = useState(1);
  const [spellSlot, setSpellSlot] = useState(1);
  const [dmgRoll, setDmgRoll] = useState("none");

  const testSkillName = useSelector((state) => state.skillSelector.name);
  const dmgObj = useDamage(skillObj);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells/")
      .then((res) => res.json())
      .then((data) => {
        setAllSpells(data["results"]);
      });
  }, []);

  useEffect(() => {
    // dispatch(revertName());
    console.log("$$$$$$$$$$$test skill name: " + testSkillName);
    console.log("effect triggered");
  }, [testSkillName]);

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

  return (
    <div className="App">
      <div className="container">
        <br />
        <div className="col-md-1"></div>
        <div className="col-md-6"></div>
        <div className="row">
          <div className="col-md-2 detailsColumn">
            {skillObj ? (
              <SpellDetails
                skillObj={skillObj}
                setSkillObj={setSkillObj}
                spellSlot={spellSlot}
                setSpellSlot={setSpellSlot}
                dmgObj={dmgObj}
                charLevel={charLevel}
                setCharLevel={setCharLevel}
              />
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
              // levels
              <div className="row">
                Character Level:
                <DropdownButton id="levelSelect" title={`Level: ${charLevel}`}>
                  {Array(20)
                    .fill(1)
                    .map((n, i) => (
                      <SlotButton index={i + 1} setSpellSlot={setCharLevel} />
                    ))}
                </DropdownButton>
              </div>
            ) : dmgRoll === "slots" ? (
              // slots
              <div className="row">
                Spell Slot:
                <DropdownButton id="slotSelect" title={`${spellSlot}`}>
                  {console.log("slotrolls debug")}
                  {/* {console.log(dmgObj.slotRolls.keys())} */}
                  {Object.keys(dmgObj.slotRolls).map((n) => (
                    <SlotButton
                      index={n}
                      setSpellSlot={setSpellSlot}
                      dmgObj={dmgObj}
                    />
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
