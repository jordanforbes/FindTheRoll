import SlotButton from "./SlotButton/SlotButton";
import { DropdownButton } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SlotDropdown = (props) => {
  const [selectedSlot, setSelectedSlot] = useState("no Selection");
  const [dmgProp, setDmgProp] = useState(false);
  const thisSkillObj = useSelector((state) => state.skillSelector);

  useEffect(() => {
    let dmg = thisSkillObj["damage"];
    console.log("#@@@! finding damage source $!@R#");

    dmg["damage_at_slot_level"]
      ? setDmgProp(dmg["damage_at_slot_level"])
      : dmg["damage_at_character_level"]
      ? setDmgProp(dmg["damage_at_character_level"])
      : setDmgProp(false);
  }, [thisSkillObj]);

  return (
    <DropdownButton id="slotSelect" title={selectedSlot}>
      {dmgProp
        ? Object.keys(dmgProp).map((n) => (
            <SlotButton
              index={n}
              setSpellSlot={props.setSpellSlot}
              setSelectedSlot={setSelectedSlot}
              selectedRoll={props.selectedRoll}
              setSelectedRoll={props.setSelectedRoll}
            />
          ))
        : ""}
    </DropdownButton>
  );
};

export default SlotDropdown;
