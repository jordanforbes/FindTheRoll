// import fetch from "node-fetch";
const url = "https://www.dnd5eapi.co/api/";

export async function fetchSpells() {
  try {
    fetch(url + "/spells/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => res["results"]);
  } catch (err) {
    console.error(err);
  }
}

export async function fetchSpellByName(name) {
  try {
    fetch(url + "/spells/" + name, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => res["results"]);
  } catch (err) {
    console.error(err);
  }
}
