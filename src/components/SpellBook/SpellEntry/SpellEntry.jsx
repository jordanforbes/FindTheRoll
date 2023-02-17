import { Button, CloseButton } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { deleteSpell } from "../../../features/spellBookSelector/spellBookSelectorSlice";

const SpellEntry = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    props.getSkillObj(props.spell);
  };

  const handleRemove = () => {
    dispatch(deleteSpell(props.spell));
  };

  return (
    <div className="col-md-1 SpellEntry">
      {props.spell.name}
      <Button className="btn-primary" onClick={handleClick}>
        show
      </Button>
      <CloseButton onClick={handleRemove} />
    </div>
  );
};

export default SpellEntry;
