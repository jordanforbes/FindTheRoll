import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const SkillButton = (props) => {
  const [skill, setSkill] = useState({});

  const getSkillObj = () => {
    fetch("https://www.dnd5eapi.co" + props.skill["url"])
      .then((res) => res.json())
      .then((data) =>
        props.setSkillObj({
          index: data["index"],
          name: data["name"],
          url: data["url"],
          desc: data["desc"],
          damage: data["damage"],
          heal_at_slot_level: data["heal_at_slot_level"],
          higher_level: data["higher_level"],
          level: data["level"],
        })
      );
  };

  useEffect(() => {
    setSkill(props.skill);
    // console.log(skill);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    getSkillObj();
    console.log("api object");
    fetch("https://www.dnd5eapi.co" + props.skill["url"])
      .then((res) => res.json())
      .then((data) => console.log(data));
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
