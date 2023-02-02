import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeIndex,
  changeDesc,
  changeDamage,
} from "../../../../../features/skillSelector/skillSelectorSlice";
import "./SkillButton.css";
// import useSkill from "../../../../../hooks/useSkill";
const SkillButton = (props) => {
  const [skill, setSkill] = useState({});
  const dispatch = useDispatch();
  const getSkillObj = () => {
    fetch("https://www.dnd5eapi.co" + props.skill["url"])
      .then((res) => res.json())
      .then((data) => props.setSkillObj(data));
  };
  useEffect(() => {
    setSkill(props.skill);
    dispatch(changeName(props.skill.name ? props.skill.name : false));
    dispatch(changeIndex(props.skill.index ? props.skill.index : false));
    dispatch(changeDesc(props.skill.desc ? props.skill.desc : false));
    dispatch(changeDamage(props.skill.damage ? props.skill.damage : false));
  }, [skill]);

  const handleClick = (e) => {
    e.preventDefault();
    getSkillObj();
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
