import SkillButton from "./SkillButton/SkillButton";
import SkillSearch from "./SkillSearch/SkillSearch";
import { useState } from "react";

const SkillColumn = (props) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className=" col-md-3">
      <SkillSearch />
      <div className="skillColumn">
        {props.allSpells.map((skill, i) => (
          <SkillButton
            className="skillButton"
            key={i}
            skill={skill}
            skillObj={props.skillObj}
            getSkillObj={props.getSkillObj}
            setSkillObj={props.setSkillObj}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillColumn;
