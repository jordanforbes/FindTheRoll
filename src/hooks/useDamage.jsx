import { useState, useEffect } from "react";

const useDamage = (skill) => {
  const [hasDamage, setHasDamage] = useEffect(false);
  const [hasHeal, setHasHeal] = useEffect(false);
  const [checksSpellSlots, setChecksSpellSlots] = useEffect(false);
  const [checksLevel, setChecksLevel] = useEffect(false);
};

export default useDamage;
