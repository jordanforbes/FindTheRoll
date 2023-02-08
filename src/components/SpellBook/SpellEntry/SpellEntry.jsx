import { Button, CloseButton } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeIndex,
  changeDesc,
  changeDamage,
  changeLevel,
  changeHigherLevel,
  changeClasses,
  changeUrl,
  resetSkill,
} from "../../../features/skillSelector/skillSelectorSlice";
import {
  writeSpell,
  deleteSpell,
} from "../../../features/spellBookSelector/spellBookSelectorSlice";
import "./SpellEntry.css";

const SpellEntry = (props) => {
  const spellBook = useSelector((state) => state.spellBook);
  const [selected, setSelected] = useState(false);
  const [skill, setSkill] = useState({});
  const dispatch = useDispatch();

  //queries api for the specific skill object
  //which contains useful data such as slots and rolls
  const getSkillObj = () => {
    fetch("https://www.dnd5eapi.co" + props.spell["url"])
      .then((res) => res.json())
      .then((data) => props.setSkillObj(data));
  };

  // useEffect(() => {
  //   setSkill(props.skill);
  //   dispatch(changeName(props.skill.name ? props.skill.name : false));
  //   dispatch(changeIndex(props.skill.index ? props.skill.index : false));
  //   dispatch(changeDesc(props.skill.desc ? props.skill.desc : false));
  //   dispatch(changeDamage(props.skill.damage ? props.skill.damage : false));
  // }, [skill]);

  const handleClick = () => {
    getSkillObj();
    console.log("**************** spell entry skill object");
    console.log(props.skillObj);
    console.log("$$$$$ end of skill object");
  };

  const handleRemove = () => {
    console.log("###### handle remove ######");
    console.log(props.spell);
    console.log(spellBook);
    dispatch(deleteSpell(props.spell));
  };

  return (
    <div className="col-md-1 SpellEntry">
      {props.spell.name}
      <Button className="btn-primary" onClick={handleClick}>
        show
      </Button>
      <CloseButton onClick={handleRemove} />
    </div>
  );
};

export default SpellEntry;
