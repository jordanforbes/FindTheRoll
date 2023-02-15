import { createSlice } from "@reduxjs/toolkit";

//TODO: prevent duplicate spells from being added

const initialState = {
  book: [],
};

export const spellBookSelectorSlice = createSlice({
  name: "spellBookSelector",
  initialState,
  reducers: {
    writeSpell: (state, action) => {
      let inBook = false;
      // console.log("book debug");
      state.book.map((book) =>
        book.name === action.payload.name ? (inBook = true) : ""
      );

      if (inBook === false) {
        state.book.push({
          uuid: 1111,
          index: action.payload.index,
          name: action.payload.name,
          url: action.payload.url,
        });
      }
    },
    deleteSpell: (state, action) => {
      state.book = state.book.filter((e) => e.index !== action.payload.index);
    },
  },
});

export const { writeSpell, deleteSpell } = spellBookSelectorSlice.actions;

export default spellBookSelectorSlice.reducer;
