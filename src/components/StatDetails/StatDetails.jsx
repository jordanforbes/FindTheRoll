import { useState, useEffect } from "react";
import SlotDropdown from "./SkillButtonColumn/SlotDropdown/SlotDropdown";
import SkillSelect from "./SkillButtonColumn/SkillSelect/SkillSelect";
const StatDetails = (props) => {
  // if(props.dmgObj[''])
  const [slotTitle, setSlotTitle] = useState("");
  const [skill, setSkill] = useState({
    name: "acrid Splash",
    hasDamage: true,
    healSlots: false,
    // checksLevel: { 1: "1d6", 5: "2d6", 11: "3d6", 17: "4d6" },
    checksLevel: false,
    damageType: "Acid",
    slotRolls: { 1: "1d6", 5: "2d6", 11: "3d6", 17: "4d6" },
  });

  const [rollType, setRollType] = useState("none");

  const defaultDmg = {
    name: "acrid Splash",
    hasDamage: true,
    healSlots: false,
    // checksLevel: { 1: "1d6", 5: "2d6", 11: "3d6", 17: "4d6" },
    checksLevel: false,
    damageType: "Acid",
    slotRolls: { 1: "1d6", 5: "2d6", 11: "3d6", 17: "4d6" },
  };

  // useEffect(() => {
  //   setSkill(defaultDmg);
  // }, []);

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
                skillName={props.skillName}
                setSkillName={props.setSkillName}
                skillObj={props.skillObj}
                skill={skill}
                setSkillObj={props.setSkillObj}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{rollType} </th>
            <td>
              <p>
                {skill["checksLevel"] ? (
                  <SlotDropdown
                    dmgObj={props.dmgObj}
                    spellSlot={props.charLevel}
                    setSpellSlot={props.setCharLevel}
                    skillName={props.skillName}
                  />
                ) : skill["slotRolls"] ? (
                  <SlotDropdown
                    dmgObj={props.dmgObj}
                    spellSlot={props.spellSlot}
                    setSpellSlot={props.setSpellSlot}
                    skillName={props.skillName}
                  />
                ) : (
                  "none"
                )}
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">Damage Type: </th>
            <td>
              <p>
                {console.log("damagetype debug", skill["damageType"])}
                {skill["damageType"]}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatDetails;
