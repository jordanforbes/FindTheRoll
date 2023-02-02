import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import SpellDetails from "../SpellDetails/SpellDetails.jsx";
import SkillColumn from "../SkillColumn/SkillColumn";
import StatDetails from "../StatDetails/StatDetails";
import RollColumn from "../RollColumn/RollColumn";
import SlotColumn from "../SlotColumn/SlotColumn";
import useDamage from "../../hooks/useDamage";
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

function App() {
  const [allSpells, setAllSpells] = useState([]);
  const [skillObj, setSkillObj] = useState();
  const [charLevel, setCharLevel] = useState(1);
  const [spellSlot, setSpellSlot] = useState(1);
  const [roll, setRoll] = useState("1d20");

  const dispatch = useDispatch();
  const thisSkillObj = useSelector((state) => state.skillSelector);

  useEffect(() => {
    console.log("%%%%%%%%% STORED SKILL OBJ $$$$$$$$$$");
    console.log(thisSkillObj);
  }, [skillObj]);

  //TODO: remove the damage object from the app as a whole
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
  //--binds list to AllSpells hook
  //the actual selected spell object is recieved
  //in the 'SkillButton.jsx' component file
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells/")
      .then((res) => res.json())
      .then((data) => {
        setAllSpells(data["results"]);
      });
  }, []);

  // TODO: make this query the back end database
  // //recieves local database and logs data. Does not work
  // useEffect(() => {
  //   console.log("!@($ LOCAL DATABASE QUERY $282345");
  //   fetch("../../db/db.json")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // });

  //if there is a skill object then it is bound to the SkillSelect hook
  //  otherwise it just resets the value
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
        <div className="row">
          <SkillColumn
            allSpells={allSpells}
            skillObj={skillObj}
            setSkillObj={setSkillObj}
          />
          <div className="col-md-6 ">
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
          <SlotColumn setRoll={setRoll} />
          <RollColumn roll={roll} />
        </div>
      </div>
    </div>
  );
}

export default App;
