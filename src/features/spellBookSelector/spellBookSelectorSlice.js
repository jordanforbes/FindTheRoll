import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [],
};

export const spellBookSelectorSlice = createSlice({
  name: "spellBookSelector",
  initialState,
  reducers: {
    matchToDB: (state, action) => {
      state.book = action.payload;
    },
    writeSpell: (state, action) => {
      let inBook = false;
      console.log("^^^^^^^^^^^^^^^ write book debug");
      state.book.map((book) =>
        book.name === action.payload.name ? (inBook = true) : ""
      );

      let newSpell = {
        uuid: 1111,
        index: action.payload.index,
        name: action.payload.name,
        url: action.payload.url,
      };

      if (inBook === false) {
        state.book.push(newSpell);

        fetch("http://localhost:8081/spellbook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: newSpell,
        }).then((res) => res.json());
      } else {
        console.log("duplicate spell");
      }
    },
    deleteSpell: (state, action) => {
      state.book = state.book.filter((e) => e.index !== action.payload.index);
    },
  },
});

export const { matchToDB, writeSpell, deleteSpell } =
  spellBookSelectorSlice.actions;

export default spellBookSelectorSlice.reducer;
