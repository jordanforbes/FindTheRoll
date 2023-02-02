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
  const [skillName, setSkillName] = useState("");
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

  useEffect(() => {
    skill.name ? setSkillName(skill.name) : setSkillName("No Skill");
  }, [skill]);
  return (
    <div className="container">
      <table className="table statsTable">
        <tbody>
          <tr>
            <th scope="row">Name: </th>
            <td>
              <h3>{skillName}</h3>
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
