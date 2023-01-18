import { useState, useEffect } from "react";

//TODO: write a test for this. Check returned objects against the api
const useDamage = (skill) => {
  const [name, setName] = useState(false);
  const [hasDamage, setHasDamage] = useState(false);
  const [healSlots, setHealSlots] = useState(false);
  const [checksLevel, setChecksLevel] = useState(false);
  const [damageType, setDamageType] = useState(false);
  const [slotRolls, setSlotRolls] = useState(false);
  const [isValid, setIsValid] = useState(false);

  //reset state
  useEffect(() => {
    setIsValid(false);
    setName(false);
    setHasDamage(false);
    setSlotRolls(false);
    setChecksLevel(false);
    setHealSlots(false);
    setDamageType(false);
  }, [skill]);

  useEffect(() => {
    let damage;

    //is there a skill?
    if (skill) {
      console.log("skill debug", skill);
      setName(skill["name"]);
      setIsValid(true);
    }

    //if there is a skill...
    if (isValid) {
      //start isValid Check
      //damaging spells
      //does the spell do damage?
      if (skill["damage"]) {
        damage = skill["damage"];
        setDamageType();
        setHasDamage(true);

        //does the spell use spell slots?
        if (damage["damage_at_slot_level"]) {
          setSlotRolls(damage["damage_at_slot_level"]);
          // console.log("damage slot rolls debug");
        }

        //does the spell use the character's level?
        if (damage["damage_at_character_level"]) {
          setChecksLevel(damage["damage_at_character_level"]);
          // console.log("level slot rolls debug");
        }

        //what is the spell's type?
        if (damage["damage_type"]) {
          //let damageTypeObj = damage["damage_type"]
          setDamageType(damage["damage_type"]["name"]);
        }
      } else {
        setHasDamage(false);
      }

      //healing spells
      //is it a healing spell?
      if (skill["heal_at_slot_level"]) {
        setHealSlots(skill["heal_at_slot_level"]);
      }
    } //end isValid Check

    if (hasDamage) {
    }
  }, [skill]);

  return {
    name: name,
    hasDamage: hasDamage,
    healSlots: healSlots,
    checksLevel: checksLevel,
    damageType: damageType,
    slotRolls: slotRolls,
  };
};

export default useDamage;

// if (skill["damage"]) {
//   setHasDamage(true);
//   console.log("has damage");

//   if (skill["damage"]["damage_at_character_level"]) {
//     setChecksLevel(true);
//   } else {
//     setChecksLevel(false);
//   }

//   if (skill["damage"]["damage_at_slot_level"]) {
//     setChecksSpellSlots(true);
//     setSlotRolls(skill["damage"]["damage_at_slot_level"]);
//   } else {
//     setChecksSpellSlots(false);
//     setSlotRolls(false);
//   }

//   if (skill["damage"]["damage_type"]) {
//     setDamageType(skill["damage"]["damage_type"]["name"]);
//   } else {
//     setDamageType(false);
//   }

//   setHasDamage(false);
//   setChecksLevel(false);
//   setSlotRolls(false);
//   setDamageType(false);
// }

// if (skill["heal_at_slot_level"]) {
//   setHasHeal(true);
//   setChecksSpellSlots(true);
// } else {
//   setHasHeal(false);
//   setChecksSpellSlots(false);
// }
