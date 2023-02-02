import "./SlotColumn.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const SlotColumn = (props) => {
  const [openSlots, setOpenSlots] = useState({
    8: "8d44",
    20: "2d39",
    3: "3d4",
    4: "4d4",
  });
  const [keySlots, setKeySlots] = useState([8, 2, 3, 4]);
  // const [valueSlots, setValueSlots] = useState();
  // const skillObj = useSelector((state) => state.skillSelector);

  useEffect(() => {
    console.log(openSlots);
    console.log(Object.keys(openSlots));
    console.log(Object.values(openSlots));
    let tempKey = [];
    for (let i in openSlots) {
      // console.log(i);
      tempKey.push(i);
    }
    setKeySlots(tempKey);
    console.log(keySlots);
  }, []);

  const SingleSlot = (props) => {
    console.log(props);
    return (
      <Button>
        {props.slot}: {props.roll}
      </Button>
    );
  };

  const AllSlots = (props) => {
    return keySlots.map((i) => (
      <>
        <SingleSlot slot={i} roll={props.openSlots[i]} />
      </>
    ));
  };

  return (
    <div className="col-md-3">
      <AllSlots
        openSlots={openSlots}
        keySlots={keySlots}
        // valueSlots={valueSlots}
      />
    </div>
  );
};

export default SlotColumn;
