import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeIndex,
  changeDesc,
  changeDamage,
} from "../features/skillSelector/skillSelectorSlice";

const useSkill = (skill) => {
  // const [name, setName] = useState("");
  // const [index, setIndex] = useState("");
  // const [desc, setDesc] = useState("");
  // const [damage, setDamage] = useState("");
  const thisName = useSelector((state) => state.skillSelector.name);
  const thisIndex = useSelector((state) => state.skillSelector.index);
  const thisDesc = useSelector((state) => state.skillSelector.desc);
  const thisDamage = useSelector((state) => state.skillSelector.damage);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("$$$$$$$$USESKILLDEBUGSTART$$$$$$$$");
    if (skill) {
      console.log("SKILL FOUND", skill);
      dispatch(changeName(skill.name));
      dispatch(changeIndex(skill.index));
      dispatch(changeDesc(skill.desc));
      dispatch(changeDamage(skill.damage));
      console.log("############useSkill#############");
      console.log(thisName, thisIndex, thisDesc, thisDamage);
    }
  }, [thisName]);
};

export default useSkill;
