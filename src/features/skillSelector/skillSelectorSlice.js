import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  index: "",
  desc: "",
  url: "",
  damage: "",
  damage_type: "",
  damage_at_slot_level: "",
  damage_at_character_level: "",
  higherLevel: "",
  level: "",
  classes: "",
  inSpellBook: false,
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
      // console.log("damage debug");
      if (state.damage) {
        if (state.damage.damage_at_slot_level) {
          // console.log("slots");
          // console.log(state.damage.damage_at_slot_level);
          state.damage_at_slot_level = state.damage.damage_at_slot_level;
          state.damage_at_character_level = false;
        } else if (state.damage.damage_at_character_level) {
          // console.log("levels");
          // console.log(state.damage.damage_at_character_level);
          state.damage_at_character_level =
            state.damage.damage_at_character_level;
          state.damage_at_slot_level = false;
        } else {
          // console.log("no damage mods");
          state.damage_at_character_level = false;
          state.damage_at_slot_level = false;
        }
      } else {
        state.damage = false;
        state.damage_at_character_level = false;
        state.damage_at_slot_level = false;
        // console.log("no damage");
      }
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
      state = initialState;
    },
    addToSpellBook: (state) => {
      return {
        uuid: 1111,
        index: state.index,
        name: state.name,
        url: state.url,
      };
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
  addToSpellBook,
} = skillSelectorSlice.actions;

export default skillSelectorSlice.reducer;
