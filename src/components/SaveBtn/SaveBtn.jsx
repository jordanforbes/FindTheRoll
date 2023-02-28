import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  writeSpell,
  deleteSpell,
} from "../../features/spellBookSelector/spellBookSelectorSlice";

const SaveBtn = (props) => {
  const [fav, setFav] = useState(false);
  const thisSkillObj = useSelector((state) => state.skillSelector);
  const spellBook = useSelector((state) => state.spellBook);

  const dispatch = useDispatch();

  const checkBook = () => {
    setFav(false);

    spellBook.book.map((spell) =>
      thisSkillObj.name === spell.name ? setFav(true) : ""
    );
  };

  useEffect(() => {
    console.log("590342-0 spellbook debug savebtn 859302[");
    checkBook();
    console.log("fav? ", fav);
  }, [thisSkillObj, fav]);

  const saveToSpellBook = () => {
    setFav(true);
    dispatch(writeSpell(thisSkillObj));
  };

  const eraseFromSpellBook = () => {
    setFav(false);
    dispatch(deleteSpell(thisSkillObj));
  };
  return (
    <div class="saveBtn" onClick={fav ? eraseFromSpellBook : saveToSpellBook}>
      <i
        class={`glyphicon ${fav ? "glyphicon-star" : "glyphicon-star-empty"}`}
      ></i>
    </div>
  );
};

export default SaveBtn;
