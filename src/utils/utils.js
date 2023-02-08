export const utils = {
  getSkillObj: (spell, setSpell) => {
    fetch("https://www.dnd5eapi.co" + spell["url"])
      .then((res) => res.json())
      .then((data) => setSpell(data));
  },
};
