import "./SlotColumn.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const SlotColumn = (props) => {
  const thisSkillObj = useSelector((state) => state.skillSelector);

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
        setOpenSlots(thisSkillObj["damage"]["damage_at_slot_level"]);
      }
    } catch (e) {
      console.log(e);
    }
  }, [thisSkillObj]);

  useEffect(() => {
    changeKeys();
  }, [openSlots]);

  const SingleSlot = (props) => {
    console.log(props);
    const handleClick = () => {
      props.setRoll(props.roll);
    };
    return (
      <>
        {props.slot}: <Button onClick={handleClick}>{props.roll}</Button>
      </>
    );
  };

  const AllSlots = (props) => {
    return keySlots.map((i) => (
      <>
        <p>
          <SingleSlot
            setRoll={props.setRoll}
            slot={i}
            roll={props.openSlots[i]}
          />
        </p>
      </>
    ));
  };

  return (
    <div className="col-md-2 slotColumn">
      <h4>Spell Slots</h4>
      <AllSlots
        setRoll={props.setRoll}
        openSlots={openSlots}
        keySlots={keySlots}
      />
    </div>
  );
};

export default SlotColumn;
