import SkillButton from "./SkillButton/SkillButton";
import { useState, useEffect } from "react";

const SkillColumn = (props) => {
  console.log("SKILLCOLUMN ");

  useEffect(() => {
    console.log("SKILLCOLUMN SEARCH");
    console.log(props.search);
  }, [props.search]);
  return (
    <div className=" col-md-3">
      <div className="skillColumn">
        {props.spellList.map((skill, i) =>
          skill["name"].includes(props.search) ? (
            <SkillButton
              className="skillButton"
              key={i}
              skill={skill}
              getSkillObj={props.getSkillObj}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default SkillColumn;
