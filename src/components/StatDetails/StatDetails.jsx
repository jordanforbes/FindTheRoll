import { useState, useEffect } from "react";
import SlotDropdown from "./SkillButtonColumn/SlotDropdown/SlotDropdown";
import { Button } from "react-bootstrap";
import SkillSelect from "./SkillButtonColumn/SkillSelect/SkillSelect";
import { useDispatch, useSelector } from "react-redux";
// import {
//   changeName,
//   changeIndex,
//   changeDesc,
//   changeDamage,
// } from "../../features/skillSelector/skillSelectorSlice";
const defaultDmg = {
  name: "test default",
  hasDamage: true,
  healSlots: false,
  // checksLevel: { 1: "1d6", 5: "2d6", 11: "3d6", 17: "4d6" },
  checksLevel: false,
  damageType: "Acid",
  slotRolls: { 1: "1d6", 5: "2d6", 11: "3d6", 17: "4d6" },
};
const StatDetails = (props) => {
  const [slotTitle, setSlotTitle] = useState("");
  const [skill, setSkill] = useState(defaultDmg);
  const [selectedRoll, setSelectedRoll] = useState("");
  const [rollType, setRollType] = useState("none");
  const [rollResult, setRollResult] = useState("");

  const dispatch = useDispatch();

  const thisSkillObj = useSelector((state) => state.skillSelector);

  const droll = require("droll");

  useEffect(() => {
    props.dmgObj ? setSkill(props.dmgObj) : setSkill(defaultDmg);
  }, [props.dmgObj]);

  useEffect(() => {
    skill["checksLevel"]
      ? setRollType("Character Level: ")
      : skill["slotRolls"]
      ? setRollType("Spell Slot: ")
      : setRollType("No Additional Check");
  }, [skill]);

  useEffect(() => {
    setRollResult("Roll");
  }, [selectedRoll]);

  //droll test

  const rollButton = () => {
    let result = droll.roll(selectedRoll);
    setRollResult(result.total);
  };

  useEffect(() => {}, [skill]);
  return (
    <div className="container">
      <p>Damaging</p>
      <table className="table statsTable">
        <tbody>
          <tr>
            <th scope="row">Name: </th>
            <td>
              <SkillSelect
                allSpells={props.allSpells}
                skillObj={props.skillObj}
                skill={skill}
                setSkillObj={props.setSkillObj}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{rollType} </th>
            <td>
              {skill["checksLevel"] || skill["slotRolls"] ? (
                <SlotDropdown
                  dmgObj={props.dmgObj}
                  spellSlot={
                    skill["checksLevel"] ? props.charLevel : props.spellSlot
                  }
                  setSpellSlot={
                    skill["checksLevel"]
                      ? props.setCharLevel
                      : props.setSpellSlot
                  }
                  thisSkillObj={props.thisSkillObj}
                  selectedRoll={selectedRoll}
                  setSelectedRoll={setSelectedRoll}
                  skillName={props.skillName}
                />
              ) : (
                "none"
              )}
              {selectedRoll ? (
                <Button label="Roll" onClick={rollButton}>
                  {rollResult}
                </Button>
              ) : (
                ""
              )}
            </td>
          </tr>
          <tr>
            <th scope="row">Damage Type: </th>
            <td>
              <p>{skill["damageType"]}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatDetails;
