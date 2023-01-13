import { useEffect, useState } from "react";

const SpellDetails = (props) => {
  const [details, setDetails] = useState({ desc: "" });

  const getDetails = () => {
    fetch("https://www.dnd5eapi.co" + props.skillChoice["url"])
      .then((res) => res.json())
      .then((data) => {
        setDetails({ desc: data["desc"] });
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <h3>Name: {props.skillChoice["name"]}</h3>
      <h3>Description:</h3>
      <p>{details["desc"]}</p>
    </>
  );
};

export default SpellDetails;
