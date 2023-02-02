import SkillButton from "../StatDetails/SkillButtonColumn/SkillSelect/SkillButton/SkillButton";
import "./SkillColumn.css";

const SkillColumn = (props) => {
  return (
    <div className=" col-md-3">
      <div className="skillColumn">
        <div className="skillSearch"></div>
        {props.allSpells.map((skill, i) => (
          <SkillButton
            className="skillButton"
            key={i}
            skill={skill}
            skillObj={props.skillObj}
            setSkillObj={props.setSkillObj}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillColumn;
