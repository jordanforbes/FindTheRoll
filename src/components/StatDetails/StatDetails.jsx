import { useState, useEffect } from "react";
import SlotButton from "../SkillButtonColumn/SlotButton/SlotButton";
import { DropdownButton } from "react-bootstrap";

const StatDetails = (props) => {
  // if(props.dmgObj[''])
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

  return (
    <div className="container">
      <p>Damaging</p>
      <table className="table statsTable">
        <tbody>
          <tr>
            <th scope="row">Name: </th>
            <td>
              <p>{skill["name"]}</p>
            </td>
          </tr>
          <tr>
            <th scope="row">{rollType} </th>
            <td>
              <p>
                {skill["checksLevel"] ? (
                  <DropdownButton id="slotSelect" title={`${props.charLevel}`}>
                    {console.log("charlev debug")}
                    {/* {console.log(dmgObj.slotRolls.keys())} */}
                    {Object.keys(props.dmgObj.checksLevel).map((n) => (
                      <SlotButton
                        index={n}
                        setSpellSlot={props.setCharLevel}
                        dmgObj={props.dmgObj}
                      />
                    ))}
                  </DropdownButton>
                ) : skill["slotRolls"] ? (
                  <DropdownButton id="slotSelect" title={`${props.spellSlot}`}>
                    {console.log("slotrolls debug")}
                    {/* {console.log(dmgObj.slotRolls.keys())} */}
                    {Object.keys(props.dmgObj.slotRolls).map((n) => (
                      <SlotButton
                        index={n}
                        setSpellSlot={props.setSpellSlot}
                        dmgObj={props.dmgObj}
                      />
                    ))}
                  </DropdownButton>
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
