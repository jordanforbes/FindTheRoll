import { useEffect, useState } from "react";

const SpellDetails = (props) => {
  const getDetails = () => {
    fetch("https://www.dnd5eapi.co" + props.skillChoice["url"])
      .then((res) => res.json())
      .then((data) => {
        props.setDetails({ desc: data["desc"] });
      });
  };

  useEffect(() => {
    getDetails();
  }, [props.details]);

  return (
    <>
      <h3>Name: {props.skillChoice["name"]}</h3>
      <h3>Description:</h3>
      <p>{props.details["desc"]}</p>
    </>
  );
};

export default SpellDetails;
