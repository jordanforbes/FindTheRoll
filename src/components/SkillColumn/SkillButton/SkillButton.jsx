import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeSkill } from "../../../features/skillSelector/skillSelectorSlice";

const SkillButton = (props) => {
  const [skill, setSkill] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setSkill(props.skill);
    dispatch(changeSkill(props.skill ? props.skill : false));
  }, [skill]);

  const handleClick = (e) => {
    e.preventDefault();
    props.getSkillObj(props.skill);
  };

  return (
    <Dropdown.Item
      index={skill["index"]}
      href={skill["url"]}
      onClick={handleClick}
      className="skillButton"
    >
      {skill["name"]}
    </Dropdown.Item>
  );
};

export default SkillButton;
