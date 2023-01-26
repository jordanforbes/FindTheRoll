import React, { useEffect, useState } from "react";
import "./App.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import SpellDetails from "../SpellDetails/SpellDetails.jsx";
import SkillButton from "../StatDetails/SkillButtonColumn/SkillSelect/SkillButton/SkillButton.jsx";
import StatDetails from "../StatDetails/StatDetails";
import SlotDropdown from "../StatDetails/SkillButtonColumn/SlotDropdown/SlotDropdown";
import useDamage from "../../hooks/useDamage";
import useSkill from "../../hooks/useSkill";
import SlotButton from "../StatDetails/SkillButtonColumn/SlotDropdown/SlotButton/SlotButton";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeIndex,
  changeDesc,
} from "../../features/skillSelector/skillSelectorSlice";
// const areScales = useSelector((state) => state.groupSelector.areScales);

function App() {
  const [allSpells, setAllSpells] = useState([]);
  const [skillObj, setSkillObj] = useState();
  const [skillName, setSkillName] = useState("none");
  const [charLevel, setCharLevel] = useState(1);
  const [spellSlot, setSpellSlot] = useState(1);
  const [dmgRoll, setDmgRoll] = useState("none");

  const thisSkillName = useSelector((state) => state.skillSelector.name);
  const thisSkillIndex = useSelector((state) => state.skillSelector.index);
  const thisSkillDesc = useSelector((state) => state.skillSelector.desc);
  const dmgObj = useDamage(skillObj);
  const dispatch = useDispatch();
  // useSkill({
  //   name: "ahaha",
  //   index: "changed-index",
  //   desc: "changed description test blah blah blah foo bar baaz",
  // });
  const skillSelect = (skill) => {
    dispatch(changeName(skill.name));
    dispatch(changeIndex(skill.index));
    dispatch(changeDesc(skill.desc));
  };
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells/")
      .then((res) => res.json())
      .then((data) => {
        setAllSpells(data["results"]);
      });
  }, []);

  useEffect(() => {
    // dispatch(revertName());
    console.log("&&&&&&&&&&app.js&&&&&&&&&&&&");
    console.log(thisSkillName, thisSkillIndex, thisSkillDesc);
  }, [thisSkillName]);

  useEffect(() => {
    console.log("og skill object", skillObj);
    if (skillObj) {
      skillSelect(skillObj);
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
          <div className="col-md-5 statsColumn">
            <StatDetails
              dmgObj={dmgObj}
              skillObj={skillObj}
              setSkillObj={setSkillObj}
              spellSlot={spellSlot}
              setSpellSlot={setSpellSlot}
              charLevel={charLevel}
              setCharLevel={setCharLevel}
              allSpells={allSpells}
              skillName={skillName}
              setSkillName={setSkillName}
            />
          </div>
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
                skillName={skillName}
              />
            ) : (
              "no"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
