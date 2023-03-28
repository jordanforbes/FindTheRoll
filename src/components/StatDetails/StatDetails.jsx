import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SaveBtn from "../SaveBtn/SaveBtn";
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
          <>
            <div className="col-md-4">
              <p>
                <b>Damage Type:</b> {damageType}
              </p>
            </div>
          </>
        </>
      );
    }
  };

  const DamageMod = () => {
    if (modifier) {
      return (
        <>
          <div className="col-md-4">
            <p>
              <b>Modifier:</b> {modifier}
            </p>
          </div>
        </>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <SaveBtn className="col-md-2 statSaveBtn" />
        </div>
        <div className="col-md-10">
          <h2 className="spellName">{thisSkillObj.name}</h2>
        </div>
      </div>
      <div className="row">
        <DamageType />
        <div className="col-md-4"></div>
        <DamageMod />
      </div>
    </div>
  );
};

export default StatDetails;
