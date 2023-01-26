import { DropdownButton } from "react-bootstrap";
import SkillButton from "./SkillButton/SkillButton";

const SkillSelect = (props) => {
  return (
    <DropdownButton id="dropdown-basic-button" title={props.skill["name"]}>
      {props.allSpells.map((skill, i) => (
        <SkillButton
          className="skillButton"
          key={i}
          skill={skill}
          skillObj={props.skillObj}
          setSkillObj={props.setSkillObj}
        />
      ))}
    </DropdownButton>
  );
};

export default SkillSelect;
