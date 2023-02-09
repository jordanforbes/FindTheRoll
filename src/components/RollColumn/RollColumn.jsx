////////////////////////////////////////////////
//  Displays results of the dice roll
//////////////////////////////////////////////

import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import droll from "droll";
import "./RollColumn.css";

const RollColumn = (props) => {
  const [rollResult, setRollResult] = useState(-1);
  const [dieResults, setDieResults] = useState([]);
  //when a roll is selected, the calculation is done here.
  // useEffect(() => {
  //   let temp = droll.roll(props.roll);
  //   setRollResult(props.roll);
  //   // console.log(rollResult);
  // }, [props.roll]);

  const rollDice = () => {
    let roll = droll.roll(props.roll);
    console.log("ROLLING DBUG", roll);
    setRollResult(roll.total);
    setDieResults(roll.rolls);
  };
  return (
    <div className=" rollColumn">
      <div className="row">
        <Button className="btn-primary" onClick={rollDice}>
          Roll {props.roll}
        </Button>
      </div>
      <div className="row">
        <h2>{rollResult}</h2>
      </div>
      <div className="row allDice">
        {dieResults.map((r) => (
          <>{r} </>
        ))}
      </div>
    </div>
  );
};

export default RollColumn;
