import { useEffect, useState } from "react";

const SpellDetails = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    console.log("object changed to " + props.skillObj["name"]);
    setName(props.skillObj["name"]);
    setDesc(props.skillObj["desc"]);
    console.log(name, desc);
  }, [props.skillObj]);

  return (
    <div className="skillDetails">
      <div className="row">
        <h3>Name: {name}</h3>
      </div>
      <div className="row">
        <b>Description:</b>
      </div>
      <div className="row">{" " + desc}</div>
      <div className="row">
        <b>damage:</b>
      </div>
      {/* <div className="row">{" " + props.skillObj["dmg"]}</div> */}
    </div>
  );
};

export default SpellDetails;
