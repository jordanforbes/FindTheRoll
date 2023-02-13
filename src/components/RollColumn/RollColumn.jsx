////////////////////////////////////////////////
//  Displays results of the dice roll
//////////////////////////////////////////////

import { Button } from "react-bootstrap";
import { useState } from "react";
import droll from "droll";

const RollColumn = (props) => {
  const [rollResult, setRollResult] = useState(false);
  const [dieResults, setDieResults] = useState([]);

  const rollDice = () => {
    let roll = droll.roll(props.roll);
    console.log("ROLLING DBUG", roll);
    setRollResult(roll.total);
    setDieResults(roll.rolls);
  };

  return (
    <>
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
    </>
  );
};

export default RollColumn;
