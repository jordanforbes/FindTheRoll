// import fetch from "node-fetch";
const url = "https://www.dnd5eapi.co/api/";

export async function fetchSpells() {
  try {
    const res = await fetch(url + "/spells/", {
      method: "GET",
    });
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function fetchSpellByName(name) {
  try {
    const res = await fetch(url + "/spells/" + name, {
      method: "GET",
    });
    return res.json();
  } catch (err) {
    console.error(err);
  }
}
