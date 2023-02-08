import { configureStore } from "@reduxjs/toolkit";
import skillSelectorReducer from "../features/skillSelector/skillSelectorSlice";
import spellBookSelectorReducer from "../features/spellBookSelector/spellBookSelectorSlice";

export default configureStore({
  reducer: {
    skillSelector: skillSelectorReducer,
    spellBook: spellBookSelectorReducer,
  },
});
