import { Dropdown, DropdownButton } from "react-bootstrap";

const DDMenu = (props) => {
  // console.log(props.spellIndex);

  const handleClick = () => {};

  return (
    <DropdownButton id="dropdown-basic-button" title="All Spells">
      {props.spellNames.map((spell, i) => (
        <Dropdown.Item href={`#/${props.spellIndex[i]}`}>
          {`${spell}`}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DDMenu;
