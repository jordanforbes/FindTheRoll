import { Button } from "react-bootstrap";
import droll from "droll";

const SingleSlot = (props) => {
  console.log(props);
  const handleClick = () => {
    droll.roll(props.roll);
    props.setRoll(props.roll);
  };

  return (
    <>
      <div className="row">
        <Button className="slotSelect btn-warning" onClick={handleClick}>
          {props.slot}: {props.roll}
        </Button>
      </div>
    </>
  );
};

export default SingleSlot;
