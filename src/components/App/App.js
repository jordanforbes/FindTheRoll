import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Description from "../Description/Description.jsx";
import SkillColumn from "../SkillColumn/SkillColumn";
import StatDetails from "../StatDetails/StatDetails";
import RollColumn from "../RollColumn/RollColumn";
import SlotColumn from "../SlotColumn/SlotColumn";
import SpellBook from "../SpellBook/SpellBook";
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
  const [charLevel, setCharLevel] = useState(1);
  const [spellSlot, setSpellSlot] = useState(1);
  const [roll, setRoll] = useState("");
  const [search, setSearch] = useState();

  // called when app renders
  // useEffect(() => {
  //   fetch("http://localhost:8081/spellbook/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  const dispatch = useDispatch();
  //queries api for the specific skill object
  const getSkillObj = (spell) => {
    fetch("https://www.dnd5eapi.co" + spell["url"])
      .then((res) => res.json())
      .then((data) => setSkillObj(data));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

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

  const saveToSpellBook = () => {
    dispatch(writeSpell(thisSkillObj));
    console.log(spellBook);
  };

  const matchDB = () => {
    console.log("spellbook route");
    fetch("http://localhost:8081/spellbook/")
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        console.log(data);
        dispatch(matchToDB(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // get initial spells from db
  useEffect(() => {
    matchDB();
  }, []);

  const postTest = () => {
    console.log("post method testing *******");
    fetch("http://localhost:8081/spellbook", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        uuid: 1111,
        index: "polymorph",
        name: "Polymorph",
        url: "/api/spells/polymorph",
      },
    })
      .then((res) => res.json())
      .then(console.log("post ended *****"));
  };

  //acquires list of spells
  //--binds list to AllSpells hook
  //the actual selected spell object is recieved
  //in the 'SkillButton.jsx' component file
  useEffect(() => {
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
  }, [search]);

  //if there is a skill object then it is bound to the SkillSelect hook
  //  otherwise it just resets the value
  useEffect(() => {
    if (skillObj) {
      skillSelect(skillObj);
    } else {
      dispatch(resetSkill());
    }
    setRoll(false);
  }, [skillObj]);

  //  const handleChoiceSubmit = (e) => {
  //    fetch("/pokemon-team", {
  //      method: "POST",
  //      headers: { "Content-Type": "application/json" },
  //      body: e.target.value,
  //    })
  //      .then((response) => response.json())
  //      .then((data) => {
  //        if (data.full) {
  //          alert("Pokemon team is full! Release team to restart");
  //        } else {
  //          setChoices(data.data);
  //        }
  //      });
  //  };

  return (
    <div className="App">
      <div className="container">
        <br />
        <div className="row">
          <div class="input-group">
            <div class="form-outline">
              <Button onClick={postTest}>Post Test</Button>
              <input
                onChange={handleChange}
                type="search"
                id="form1"
                class="form-control"
              />
            </div>
          </div>
          <SkillColumn
            spellList={spellList}
            skillObj={skillObj}
            getSkillObj={getSkillObj}
            setSkillObj={setSkillObj}
            search={search}
            setSearch={setSearch}
          />
          <div className="col-md-6 ">
            <div className="row statsColumn">
              <Button onClick={saveToSpellBook} class="btn">
                Save
              </Button>
              <StatDetails
                skillObj={skillObj}
                getSkillObj={getSkillObj}
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
                  <Description
                    skillObj={skillObj}
                    setSkillObj={setSkillObj}
                    spellSlot={spellSlot}
                    setSpellSlot={setSpellSlot}
                    charLevel={charLevel}
                    setCharLevel={setCharLevel}
                  />
                ) : (
                  ""
                )}
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
        <div className="row">
          <SpellBook
            skillObj={skillObj}
            getSkillObj={getSkillObj}
            setSkillObj={setSkillObj}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
