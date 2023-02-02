import "./SlotColumn.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AllSlots from "./AllSlots/AllSlots";
import NoSlots from "./NoSlots/NoSlots";

const SlotColumn = (props) => {
  const thisSkillObj = useSelector((state) => state.skillSelector);
  const [areSlots, setAreSlots] = useState(false);
  const [openSlots, setOpenSlots] = useState({
    8: "8d44",
    20: "2d39",
    3: "3d4",
    4: "4d4",
  });
  const [keySlots, setKeySlots] = useState([8, 2, 3, 4]);
  // const [valueSlots, setValueSlots] = useState();
  // const skillObj = useSelector((state) => state.skillSelector);

  const changeKeys = () => {
    let tempKey = [];
    for (let i in openSlots) {
      // console.log(i);
      tempKey.push(i);
    }
    setKeySlots(tempKey);
  };

  useEffect(() => {
    console.log(thisSkillObj);
    console.log(openSlots);
    console.log(Object.keys(openSlots));
    console.log(Object.values(openSlots));
    changeKeys();
    console.log(keySlots);
  }, []);

  useEffect(() => {
    try {
      if (thisSkillObj["damage"]["damage_at_slot_level"]) {
        setAreSlots(true);
        setOpenSlots(thisSkillObj["damage"]["damage_at_slot_level"]);
      } else {
        setAreSlots(false);
      }
    } catch (e) {
      console.log(e);
    }
  }, [thisSkillObj]);

  useEffect(() => {
    changeKeys();
  }, [openSlots]);

  return (
    <div className="col-md-2 slotColumn">
      <h4>Spell Slots</h4>
      {areSlots ? (
        <AllSlots
          setRoll={props.setRoll}
          openSlots={openSlots}
          keySlots={keySlots}
        />
      ) : (
        <NoSlots />
      )}
    </div>
  );
};

export default SlotColumn;
