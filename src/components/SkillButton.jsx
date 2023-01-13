import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const SkillButton = (props) => {
  const [skill, setSkill] = useState({});

  useEffect(() => {
    setSkill(props.skill);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    props.setSkillChoice({
      index: skill["index"],
      name: skill["name"],
      url: skill["url"],
    });
  };

  return (
    <Dropdown.Item
      index={skill["index"]}
      href={skill["url"]}
      onClick={handleClick}
    >
      {`${skill["name"]}`}
    </Dropdown.Item>
  );
};

export default SkillButton;
