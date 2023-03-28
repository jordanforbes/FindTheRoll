import { useSelector } from "react-redux";

import SpellEntry from "./SpellEntry/SpellEntry";

const SpellBook = (props) => {
  const spellBook = useSelector((state) => state.spellBook);

  return (
    <div className="row spellBookRow">
      {spellBook.book.map((spell) => (
        <SpellEntry getSkillObj={props.getSkillObj} spell={spell} />
      ))}
    </div>
  );
};

export default SpellBook;
