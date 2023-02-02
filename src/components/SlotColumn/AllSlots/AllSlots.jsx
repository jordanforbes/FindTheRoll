import SingleSlot from "./SingleSlot/SingleSlot";
const AllSlots = (props) => {
  return props.keySlots.map((i) => (
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

export default AllSlots;
