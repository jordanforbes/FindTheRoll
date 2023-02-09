import "./SlotColumn.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AllSlots from "./AllSlots/AllSlots";
import NoSlots from "./NoSlots/NoSlots";

const SlotColumn = (props) => {
  const thisSkillObj = useSelector((state) => state.skillSelector);
  const slotDamage = useSelector(
    (state) => state.skillSelector.damage_at_slot_level
  );
  const levelDamage = useSelector(
    (state) => state.skillSelector.damage_at_character_level
  );
  const [areSlots, setAreSlots] = useState(false);
  const [title, setTitle] = useState("");
  const [openSlots, setOpenSlots] = useState({
    8: "8d44",
    20: "2d39",
    3: "3d4",
    4: "4d4",
  });
  const [keySlots, setKeySlots] = useState([8, 2, 3, 4]);

  const changeKeys = () => {
    let tempKey = [];
    for (let i in openSlots) {
      tempKey.push(i);
    }
    setKeySlots(tempKey);
  };

  useEffect(() => {
    changeKeys();

    slotDamage
      ? setTitle("Spell Slots")
      : levelDamage
      ? setTitle("Character Level")
      : setTitle("No Damage Modifier");
  }, []);

  useEffect(() => {
    // console.log("444444 slotdamage");
    !thisSkillObj.damage
      ? setOpenSlots(false) && setAreSlots(false)
      : // console.log("no damage at all")
      slotDamage
      ? setOpenSlots(slotDamage) && setAreSlots(true)
      : levelDamage
      ? setOpenSlots(levelDamage) && setAreSlots(false)
      : setOpenSlots(false);
    // console.log("open slots checker ");
    // console.log(openSlots);
  }, [thisSkillObj]);

  useEffect(() => {
    changeKeys();
  }, [openSlots]);

  return (
    <div className="slotColumn">
      <h4>{title}</h4>
      {openSlots ? (
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
