import { useState, useEffect } from "react";

const useDamage = (skill) => {
  const [name, setName] = useState("null");
  const [hasDamage, setHasDamage] = useState(false);
  const [hasHeal, setHasHeal] = useState(false);
  const [checksSpellSlots, setChecksSpellSlots] = useState(false);
  const [checksLevel, setChecksLevel] = useState(false);
  const [damageType, setDamageType] = useState("null");

  useEffect(() => {
    if (skill) {
      setName(skill["name"]);
      if (skill["damage"]) {
        setHasDamage(true);
        if (skill["damage"]["damage_at_character_level"]) {
          setChecksLevel(true);
        }
        if (skill["damage"]["damage_at_slot_level"]) {
          setChecksSpellSlots(true);
        }
        if (skill["damage"]["damage_type"]) {
          setDamageType(skill["damage"]["damage_type"]["name"]);
        }
      }
      if (skill["heal_at_slot_level"]) {
        setHasHeal(true);
        setChecksSpellSlots(true);
      }
    }
  }, [skill]);

  return {
    name: name,
    hasDamage: hasDamage,
    hasHeal: hasHeal,
    checksLevel: checksLevel,
    checksSpellSlots: checksSpellSlots,
    damageType: damageType,
  };
};

export default useDamage;
