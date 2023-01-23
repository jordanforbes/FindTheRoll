import { Dropdown, DropdownButton } from "react-bootstrap";
import { useEffect, useState } from "react";

const SlotButton = (props) => {
  const [roll, setRoll] = useState("");
  const dmgObj = { 2: "1d4", 3: "2d10" };

  useEffect(() => {
    console.log("slotbutton debug");
    if (props.dmgObj.slotRolls[props.index]) {
      console.log(props.index + " " + props.dmgObj.slotRolls[props.index]);
      setRoll(props.dmgObj.slotRolls[props.index]);
    }
  }, [dmgObj]);

  const handleClick = () => {
    props.setSpellSlot(props.index);
  };
  return (
    <Dropdown.Item index={props.index} onClick={handleClick}>
      {props.index}: {roll}
    </Dropdown.Item>
  );
};

export default SlotButton;
