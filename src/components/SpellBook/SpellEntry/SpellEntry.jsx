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
    <div className="col-md-1 SpellEntry" onClick={handleClick}>
      <div className="row spellNameRow">
        {props.spell.name}
        <CloseButton className="closeBtn" onClick={handleRemove} />
      </div>
      <div className="row spellBtnRow"></div>
    </div>
  );
};

export default SpellEntry;
