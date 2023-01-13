import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import SkillButton from "./SkillButton";

const DDMenu = (props) => {
  return (
    <DropdownButton id="dropdown-basic-button" title="All Spells">
      {props.spellNames.map((skill, i) => (
        <SkillButton
          skill={skill}
          skillChoice={props.skillChoice}
          setSkillChoice={props.setSkillChoice}
        />
      ))}
    </DropdownButton>
  );
};

export default DDMenu;
