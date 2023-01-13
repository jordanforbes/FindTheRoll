import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const SkillButton = (props) => {
  const [skill, setSkill] = useState({});

  useEffect(() => {
    setSkill(props.skill);
  }, []);

  return (
    <Dropdown.Item index={skill["index"]} href={skill["url"]}>
      {`${skill["name"]}`}
    </Dropdown.Item>
  );
};

export default SkillButton;
