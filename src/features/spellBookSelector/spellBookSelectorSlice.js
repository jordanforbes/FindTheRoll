import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  book: [],
};

export const spellBookSelectorSlice = createSlice({
  name: "spellBookSelector",
  initialState,
  reducers: {
    matchToDB: (state, action) => {
      // let data;
      // axios
      //   .get("http://localhost:8081/spellbook/")
      //   .then((res) => console.log("spelldatadebug", res.data))
      //   .then((res) => (data = res.data));
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
        axios
          .post("http://localhost:8081/spellbook", { params: newSpell })
          .then((res) => res.data)
          .then((res) => console.log(res));
      } else {
        console.log("duplicate spell");
      }
    },
    deleteSpell: (state, action) => {
      state.book = state.book.filter((e) => e.index !== action.payload.index);
      axios.delete("http://localhost:8081/spellbook/", {
        params: action.payload,
      });
    },
  },
});

export const { matchToDB, writeSpell, deleteSpell } =
  spellBookSelectorSlice.actions;

export default spellBookSelectorSlice.reducer;
