import { useState, useEffect } from "react";
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
            <th scope="row">Roll Check: </th>
            <td>
              <p>
                {skill["checksLevel"]
                  ? "level"
                  : skill["slotRolls"]
                  ? "slots"
                  : "none"}
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
