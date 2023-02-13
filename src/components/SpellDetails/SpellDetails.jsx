import { useEffect, useState } from "react";

const SpellDetails = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    setName(props.skillObj["name"]);
    setDesc(props.skillObj["desc"]);
  }, [props.skillObj]);

  return (
    <div className="skillDetails">
      <div className="row">
        <b>Description:</b>
      </div>
      <div className="row descRow">
        {desc.length > 1 ? desc.map((line) => <p>{line}</p>) : <p>{desc}</p>}
      </div>
    </div>
  );
};

export default SpellDetails;
