import { Button } from "react-bootstrap";

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

export default SingleSlot;
