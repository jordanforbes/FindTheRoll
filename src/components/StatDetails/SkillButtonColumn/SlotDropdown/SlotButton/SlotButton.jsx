import { Dropdown, DropdownButton } from "react-bootstrap";
import { useEffect, useState } from "react";

const SlotButton = (props) => {
  const [roll, setRoll] = useState("");

  useEffect(() => {
    console.log("slotbutton debug");
    if (props.dmgObj.slotRolls[props.index]) {
      console.log(props.index + " " + props.dmgObj.slotRolls[props.index]);
      setRoll(props.dmgObj.slotRolls[props.index]);
    }
  }, [props.dmgObj]);

  const handleClick = () => {
    props.setSpellSlot(props.index);
    props.setSelectedSlot(`${props.index}: ${roll}`);
    props.setSelectedRoll(roll);
  };
  return (
    <Dropdown.Item index={props.index} onClick={handleClick}>
      {props.index}: {roll}
    </Dropdown.Item>
  );
};

export default SlotButton;
