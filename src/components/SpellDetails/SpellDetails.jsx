import { useEffect, useState } from "react";

const SpellDetails = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    console.log("object changed to " + props.skillObj["name"]);
    setName(props.skillObj["name"]);
    setDesc(props.skillObj["desc"]);
    console.log("check desc");
    console.log(desc);
    console.log(desc.length);
  }, [props.skillObj]);

  return (
    <div className="skillDetails">
      <div className="row">
        <h3>Name: {name}</h3>
      </div>
      <div className="row">
        <b>Description:</b>
      </div>
      <div className="row">
        {desc.length > 1 ? desc.map((line) => <p>{line}</p>) : <p>{desc}</p>}
      </div>
    </div>
  );
};

export default SpellDetails;
