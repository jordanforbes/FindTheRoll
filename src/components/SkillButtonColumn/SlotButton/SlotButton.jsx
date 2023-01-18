import { Dropdown, DropdownButton } from "react-bootstrap";

const SlotButton = (props) => {
  const handleClick = () => {
    props.setSpellSlot(props.index);
  };
  return (
    <Dropdown.Item index={props.index} onClick={handleClick}>
      {props.index}
    </Dropdown.Item>
  );
};

export default SlotButton;
