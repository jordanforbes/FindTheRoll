import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    uuid: 1111,
    index: "acid-arrow",
    name: "Acid Arrow",
    url: "/api/spells/acid-arrow",
  },
  {
    uuid: 1111,
    index: "scorching-ray",
    name: "Scorching Ray",
    url: "/api/spells/scorching-ray",
  },
  {
    uuid: 1112,
    index: "aid",
    name: "Aid",
    url: "/api/spells/aid",
  },
];
export const spellBookSelectorSlice = createSlice({
  name: "spellBookSelector",
  initialState,
  reducers: {
    writeSpell: (state, action) => {
      console.log("writespell action");
      console.log(action);
      state.push({
        uuid: 1111,
        index: action.payload.index,
        name: action.payload.name,
        url: action.payload.url,
      });
    },
    deleteSpell: (state, action) => {
      console.log(state.shift());
    },
  },
});

export const { writeSpell, deleteSpell } = spellBookSelectorSlice.actions;

export default spellBookSelectorSlice.reducer;
