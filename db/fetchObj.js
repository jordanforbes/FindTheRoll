import fetch from "node-fetch";

export class fetchObj {
  constructor(url) {
    this.url = url;
    this.allSpells = {};
    this.spell = null;
    // this.fetchSpells();
  }
  async fetchSpells() {
    try {
      const res = await fetch(this.url + "/spells/", {
        method: "GET",
      });
      this.allSpells = res.json();
      return res.json();
    } catch (err) {
      console.error(err);
    }
  }
  async fetchSpellByName(name) {
    try {
      const res = await fetch(this.url + "/spells/" + name, {
        method: "GET",
      });
      this.spell = res.json();
      return res.json();
    } catch (err) {
      console.error(err);
    }
  }
}
