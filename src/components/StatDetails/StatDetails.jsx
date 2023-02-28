import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const StatDetails = (props) => {
  const [damageType, setDamageType] = useState(false);
  const [modifier, setModifier] = useState(false);

  const thisSkillObj = useSelector((state) => state.skillSelector);

  // assigns damage type and modifier strings
  useEffect(() => {
    if (thisSkillObj["damage"]) {
      setDamageType(thisSkillObj["damage"]["damage_type"]["name"]);
      if (thisSkillObj["damage"]["damage_at_slot_level"]) {
        setModifier("Spell Slots");
      } else if (thisSkillObj["damage"]["damage_at_character_level"]) {
        setModifier("Character Level");
      } else {
        setModifier("");
      }
    } else {
      setDamageType(false);
      setModifier(false);
    }
  }, [thisSkillObj]);

  const DamageType = () => {
    if (damageType) {
      return (
        <>
          <tr>
            <th scope="row">Damage Type: </th>
            <td>
              <p>{damageType}</p>
            </td>
          </tr>
        </>
      );
    }
  };

  const DamageMod = () => {
    if (modifier) {
      return (
        <tr>
          <th scope="row">Modifier: </th>
          <td>
            <p>{modifier}</p>
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="container">
      <table className="table statsTable">
        <tbody>
          <tr>
            <th scope="row">Name: </th>
            <td>
              <h3>{thisSkillObj.name}</h3>
            </td>
          </tr>
          <DamageType />
          <DamageMod />
        </tbody>
      </table>
    </div>
  );
};

export default StatDetails;
