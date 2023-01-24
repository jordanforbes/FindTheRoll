import { configureStore } from "@reduxjs/toolkit";
import skillSelectorReducer from "../features/skillSelector/skillSelectorSlice";
export default configureStore({
  reducer: {
    skillSelector: skillSelectorReducer,
  },
});
