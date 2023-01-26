import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const SkillButton = (props) => {
  const [skill, setSkill] = useState({});

  const getSkillObj = () => {
    fetch("https://www.dnd5eapi.co" + props.skill["url"])
      .then((res) => res.json())
      .then((data) => props.setSkillObj(data));
  };
  useEffect(() => {
    setSkill(props.skill);
    // console.log(skill);
  }, [skill]);

  const handleClick = (e) => {
    e.preventDefault();
    getSkillObj();
    console.log(props.skillObj);
  };

  return (
    <Dropdown.Item
      index={skill["index"]}
      href={skill["url"]}
      onClick={handleClick}
    >
      {skill["name"]}
    </Dropdown.Item>
  );
};

export default SkillButton;
