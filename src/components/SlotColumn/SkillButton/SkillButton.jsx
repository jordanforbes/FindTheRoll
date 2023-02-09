import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  changeName,
  changeIndex,
  changeDesc,
  changeDamage,
} from "../../../features/skillSelector/skillSelectorSlice";
import "./SkillButton.css";

const SkillButton = (props) => {
  const [skill, setSkill] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setSkill(props.skill);
    dispatch(changeName(props.skill.name ? props.skill.name : false));
    dispatch(changeIndex(props.skill.index ? props.skill.index : false));
    dispatch(changeDesc(props.skill.desc ? props.skill.desc : false));
    dispatch(changeDamage(props.skill.damage ? props.skill.damage : false));
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
