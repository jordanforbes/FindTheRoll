// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   changeName,
//   getName,
//   changeIndex,
//   getIndex,
//   changeDesc,
//   getDesc,
//   changeDamage,
//   getDamage,
// } from "../features/skillSelector/skillSelectorSlice";

// const useSkill = (skill) => {
//   const dispatch = useDispatch();

//   const skillObj = {
//     name: dispatch(getName),
//     index: dispatch(getIndex),
//     desc: dispatch(getDesc),
//     damage: dispatch(getDamage),
//   };

//   useEffect(() => {
//     // console.log("$$$$$$$$USESKILLDEBUGSTART$$$$$$$$");
//     // if (skill) {
//     //   console.log("SKILL FOUND", skill);
//     //   dispatch(changeName(skill.name));
//     //   dispatch(changeIndex(skill.index));
//     //   dispatch(changeDesc(skill.desc));
//     //   dispatch(changeDamage(skill.damage));
//     //   console.log("############useSkill#############");
//     //   // console.log(thisName, thisIndex, thisDesc, thisDamage);
//     // }
//   }, []);
// };

// export default useSkill;
