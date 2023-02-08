import "./SlotColumn.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AllSlots from "./AllSlots/AllSlots";
import NoSlots from "./NoSlots/NoSlots";

const SlotColumn = (props) => {
  const thisSkillObj = useSelector((state) => state.skillSelector);
  const slotDamage = useSelector((state) => state.damage_at_slot_level);
  const levelDamage = useSelector((state) => state.damage_at_character_level);
  const [areSlots, setAreSlots] = useState(false);
  const [title, setTitle] = useState("");
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

    slotDamage
      ? setTitle("Spell Slots")
      : levelDamage
      ? setTitle("Character Level")
      : setTitle("No Damage Modifier");
  }, []);

  useEffect(() => {
    try {
      // if (slotDamage) {
      //   setAreSlots(true);
      //   setOpenSlots(slotDamage);
      // } else {
      //   setAreSlots(false);
      // }

      slotDamage
        ? setOpenSlots(slotDamage) && setAreSlots(true)
        : levelDamage
        ? setOpenSlots(levelDamage) && setAreSlots(false)
        : setOpenSlots(false);
    } catch (e) {
      console.log(e);
    }
  }, [thisSkillObj]);

  useEffect(() => {
    changeKeys();
  }, [openSlots]);

  return (
    <div className="col-md-2 slotColumn">
      <h4>{title}</h4>
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
