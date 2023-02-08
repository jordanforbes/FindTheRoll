import { Button } from "react-bootstrap";
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
} from "../../features/skillSelector/skillSelectorSlice";
import SpellEntry from "./SpellEntry/SpellEntry";

const SpellBook = (props) => {
  const spellBook = useSelector((state) => state.spellBook);
  // const spellEntry = useSelector((state) => state.spellEntry);
  return (
    <div>
      <div className="row">spellBook</div>
      {spellBook.map((spell) => (
        <SpellEntry
          skillObj={props.skillObj}
          setSkillObj={props.setSkillObj}
          spell={spell}
        />
      ))}
      <div className="row"></div>
    </div>
  );
};

export default SpellBook;
