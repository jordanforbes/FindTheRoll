import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [
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
  ],
};
export const spellBookSelectorSlice = createSlice({
  name: "spellBookSelector",
  initialState,
  reducers: {
    writeSpell: (state, action) => {
      console.log("writespell action");
      console.log(action);
      state.book.push({
        uuid: 1111,
        index: action.payload.index,
        name: action.payload.name,
        url: action.payload.url,
      });
    },
    deleteSpell: (state, action) => {
      state.book = state.book.filter((e) => e.index !== action.payload.index);
    },
  },
});

export const { writeSpell, deleteSpell } = spellBookSelectorSlice.actions;

export default spellBookSelectorSlice.reducer;
