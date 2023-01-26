import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeIndex,
  changeDesc,
} from "../features/skillSelector/skillSelectorSlice";

const useSkill = (skill) => {
  const [name, setName] = useState("");
  const [index, setIndex] = useState("");
  const [desc, setDesc] = useState("");
  const thisName = useSelector((state) => state.skillSelector.name);
  const thisIndex = useSelector((state) => state.skillSelector.index);
  const thisDesc = useSelector((state) => state.skillSelector.desc);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("$$$$$$$$USESKILLDEBUGSTART$$$$$$$$");
    if (skill) {
      console.log("SKILL FOUND", skill);
      dispatch(changeName(skill.name));
      dispatch(changeIndex(skill.index));
      dispatch(changeDesc(skill.desc));
      console.log("############useSkill#############");
      console.log(thisName, thisIndex, thisDesc);
    }
  }, [thisName]);
};

export default useSkill;
