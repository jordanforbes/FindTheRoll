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
  changeDamage,
  changeLevel,
  changeHigherLevel,
  changeClasses,
  changeUrl,
  resetSkill,
} from "../../features/skillSelector/skillSelectorSlice";
// const areScales = useSelector((state) => state.groupSelector.areScales);

function App() {
  const [allSpells, setAllSpells] = useState([]);
  const [skillObj, setSkillObj] = useState();
  const [charLevel, setCharLevel] = useState(1);
  const [spellSlot, setSpellSlot] = useState(1);

  const dispatch = useDispatch();
  const thisSkillObj = useSelector((state) => state.skillSelector);

  useEffect(() => {
    console.log("%%%%%%%%% STORED SKILL OBJ $$$$$$$$$$");
    console.log(thisSkillObj);
  }, [skillObj]);
  const dmgObj = useDamage(skillObj);

  //saves skill gained from api call to the redux store
  const skillSelect = (skill) => {
    dispatch(changeName(skill.name));
    dispatch(changeIndex(skill.index));
    dispatch(changeDesc(skill.desc));
    dispatch(changeDamage(skill.damage));
    dispatch(changeLevel(skill.level));
    dispatch(changeUrl(skill.url));
    dispatch(changeClasses(skill.classes));
    dispatch(changeHigherLevel(skill.higher_level));
  };

  //acquires list of spells
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells/")
      .then((res) => res.json())
      .then((data) => {
        setAllSpells(data["results"]);
      });
  }, []);

  useEffect(() => {
    if (skillObj) {
      skillSelect(skillObj);
    } else {
      dispatch(resetSkill());
    }
  }, [skillObj]);

  return (
    <div className="App">
      <div className="container">
        <br />
        <div className="col-md-1"></div>
        <div className="col-md-10"></div>
        <div className="col-md-4 ">
          <div className="row statsColumn">
            <StatDetails
              dmgObj={dmgObj}
              skillObj={skillObj}
              setSkillObj={setSkillObj}
              spellSlot={spellSlot}
              setSpellSlot={setSpellSlot}
              charLevel={charLevel}
              setCharLevel={setCharLevel}
              allSpells={allSpells}
              thisSkillObj={thisSkillObj}
            />
          </div>
          <div className="row">
            <div className=" detailsColumn">
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
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
