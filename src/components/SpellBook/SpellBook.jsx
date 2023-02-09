import { useSelector } from "react-redux";

import SpellEntry from "./SpellEntry/SpellEntry";

const SpellBook = (props) => {
  const spellBook = useSelector((state) => state.spellBook);

  return (
    <div className="row">
      {spellBook.book.map((spell) => (
        <SpellEntry
          skillObj={props.skillObj}
          getSkillObj={props.getSkillObj}
          setSkillObj={props.setSkillObj}
          spell={spell}
        />
      ))}
    </div>
  );
};

export default SpellBook;
