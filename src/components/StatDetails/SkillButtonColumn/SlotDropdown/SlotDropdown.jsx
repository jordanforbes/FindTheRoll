import SlotButton from "./SlotButton/SlotButton";
import { DropdownButton } from "react-bootstrap";
import { useState, useEffect } from "react";

const SlotDropdown = (props) => {
  const [selectedSlot, setSelectedSlot] = useState("no Selection");
  const [slotArray, setSlotArray] = useState();
  const [selectedRoll, setSelectedRoll] = useState("");

  useEffect(() => {
    setSlotArray(props.dmgObj.slotRolls);
    // setSelectedSlot(slotArray[0] + " " + slotArray[1]);
    console.log("$$$$$$$$$$$$$$$$$$$$$$ slot array #############");
    console.log(slotArray);
  }, [props.dmgObj]);
  useEffect(() => {
    setSelectedSlot("no Selection");
  }, [props.skillName]);

  return (
    <DropdownButton id="slotSelect" title={selectedSlot}>
      {Object.keys(props.dmgObj.slotRolls).map((n) => (
        <SlotButton
          index={n}
          setSpellSlot={props.setSpellSlot}
          dmgObj={props.dmgObj}
          setSelectedSlot={setSelectedSlot}
          selectedRoll={selectedRoll}
          setSelectedRoll={setSelectedRoll}
        />
      ))}
    </DropdownButton>
  );
};

export default SlotDropdown;
