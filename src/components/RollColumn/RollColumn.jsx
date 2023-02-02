////////////////////////////////////////////////
//  Displays results of the dice roll
//////////////////////////////////////////////

import { useState, useEffect } from "react";
import droll from "droll";

const RollColumn = (props) => {
  const [rollResult, setRollResult] = useState(-1);

  //when a roll is selected, the calculation is done here.
  useEffect(() => {
    let temp = droll.roll(props.roll);
    setRollResult(temp);
    // console.log(rollResult);
  }, [props.roll]);

  return (
    <div className="col-md-1 rollColumn">
      <h4>Roll</h4>
      <h2>{rollResult.total}</h2>
    </div>
  );
};

export default RollColumn;
