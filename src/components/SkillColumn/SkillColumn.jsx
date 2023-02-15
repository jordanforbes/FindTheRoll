import SkillButton from "./SkillButton/SkillButton";

const SkillColumn = (props) => {
  return (
    <div className=" col-md-3">
      <div className="skillColumn">
        {props.spellList.map((skill, i) => (
          <SkillButton
            className="skillButton"
            key={i}
            skill={skill}
            skillObj={props.skillObj}
            getSkillObj={props.getSkillObj}
            setSkillObj={props.setSkillObj}
            search={props.search}
            setSearch={props.setSearch}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillColumn;
