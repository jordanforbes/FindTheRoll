import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  index: "",
  desc: "",
  url: "",
  damage: "",
  damage_type: "",
  damage_at_slot_level: "",
  higherLevel: "",
  level: "",
  classes: "",
};
export const skillSelectorSlice = createSlice({
  name: "skillSelector",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },

    changeIndex: (state, action) => {
      state.index = action.payload;
    },

    changeDesc: (state, action) => {
      state.desc = action.payload;
    },

    changeUrl: (state, action) => {
      state.url = action.payload;
    },

    changeDamage: (state, action) => {
      state.damage = action.payload;
      // console.log("damage redux debug");
      // console.log(state.damage.damage_type);
    },

    changeLevel: (state, action) => {
      state.level = action.payload;
    },

    changeHigherLevel: (state, action) => {
      state.higherLevel = action.payload;
    },

    changeClasses: (state, action) => {
      state.classes = action.payload;
    },

    resetSkill: (state) => {
      state.name = "";
      state.index = "";
      state.desc = "";
      state.url = "";
      state.damage = "";
      state.higherLevel = "";
      state.level = "";
      state.classes = "";
    },
  },
});

export const {
  changeName,
  changeIndex,
  changeDesc,
  changeDamage,
  changeLevel,
  changeHigherLevel,
  changeClasses,
  changeUrl,
  resetSkill,
} = skillSelectorSlice.actions;

export default skillSelectorSlice.reducer;
