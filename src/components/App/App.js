import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Glyphicon } from "react-bootstrap";

import Description from "../Description/Description.jsx";
import SkillColumn from "../SkillColumn/SkillColumn";
import StatDetails from "../StatDetails/StatDetails";
import RollColumn from "../RollColumn/RollColumn";
import SlotColumn from "../SlotColumn/SlotColumn";
import SpellBook from "../SpellBook/SpellBook";
import {
  changeSkill,
  resetSkill,
} from "../../features/skillSelector/skillSelectorSlice";
import {
  writeSpell,
  matchToDB,
} from "../../features/spellBookSelector/spellBookSelectorSlice";

function App() {
  const thisSkillObj = useSelector((state) => state.skillSelector);
  const spellBook = useSelector((state) => state.spellBook);
  const [allSpells, setAllSpells] = useState([]);
  const [spellList, setSpellList] = useState([]);
  const [skillObj, setSkillObj] = useState();
  const [roll, setRoll] = useState("");
  const [search, setSearch] = useState();

  const dispatch = useDispatch();
  //queries api for the specific skill object
  const getSkillObj = (spell) => {
    fetch("https://www.dnd5eapi.co" + spell["url"])
      .then((res) => res.json())
      .then((data) => setSkillObj(data));
  };

  //search function
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  //adds spell to book
  const saveToSpellBook = () => {
    dispatch(writeSpell(thisSkillObj));
    console.log(spellBook);
  };

  //sets redux spellbook state to saved database
  const matchDB = () => {
    console.log("spellbook route");
    axios
      .get("http://localhost:8081/spellbook/")
      .then((res) => dispatch(matchToDB(res.data)))
      .catch((err) => {
        console.log(err);
      });
  };
  // get initial spells from db
  //acquires list of spells
  //--binds list to AllSpells hook
  //the actual selected spell object is recieved
  //in the 'SkillButton.jsx' component file
  useEffect(() => {
    matchDB();
    console.log("$$$$$$$$$$$$$$$$ spell book");
    console.log(spellBook);
    fetch("https://www.dnd5eapi.co/api/spells/")
      .then((res) => res.json())
      .then((data) => {
        setAllSpells(data["results"]);
      });
  }, []);

  useEffect(() => {
    setSpellList(allSpells);
  }, [allSpells]);

  useEffect(() => {
    console.log("search triggered");
    console.log(search);
    var PATTERN = /^Ba/;
    console.log("Pattern: " + PATTERN);
    let filtered = spellList.filter(function (str) {
      return PATTERN.test(str.name);
    });
    console.log(filtered);
    // setSpellList([]);
  }, [search]);

  //if there is a skill object then it is bound to the SkillSelect hook
  //  otherwise it just resets the value
  useEffect(() => {
    if (skillObj) {
      //saves skill gained from api call to the redux store
      dispatch(changeSkill(skillObj));
    } else {
      dispatch(resetSkill());
    }
    setRoll(false);
  }, [skillObj]);

  return (
    <div className="App">
      <div className="container">
        <br />
        <div className="row">
          <div class="input-group">
            <div class="form-outline">
              <input
                onChange={handleChange}
                type="search"
                id="form1"
                class="form-control"
              />
            </div>
          </div>
          <SkillColumn spellList={spellList} getSkillObj={getSkillObj} />
          <div className="col-md-6 ">
            <div className="row statsColumn">
              <i
                onClick={saveToSpellBook}
                class="glyphicon glyphicon-star-empty saveBtn"
              ></i>
              <StatDetails />
            </div>
            <div className="row">
              <div className=" detailsColumn">
                {skillObj ? <Description skillObj={skillObj} /> : ""}
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">{roll ? <RollColumn roll={roll} /> : ""}</div>
            <div className="row">
              <SlotColumn setRoll={setRoll} />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <SpellBook skillObj={skillObj} getSkillObj={getSkillObj} />
        </div>
      </div>
    </div>
  );
}

export default App;
