import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: false,
  index: false,
  desc: false,
  url: false,
  damage: false,
  damage_type: false,
  damage_at_slot_level: false,
  damage_at_character_level: false,
  higherLevel: false,
  level: false,
  classes: false,
  inSpellBook: false,
};
export const skillSelectorSlice = createSlice({
  name: "skillSelector",
  initialState,
  reducers: {
    changeSkill: (state, action) => {
      state.name = action.payload.name;
      state.index = action.payload.index;
      state.desc = action.payload.desc;
      state.url = action.payload.url;
      state.level = action.payload.level;
      state.damage = action.payload.damage;
      state.higherLevel = action.payload.higher_Level;
      state.classes = action.payload.classes;

      state.damage = action.payload.damage;
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

    resetSkill: (state) => {
      state = initialState;
    },

    spellBookToggle: (state) => {
      state.inSpellBook = !state.inSpellBook;
    },
  },
});

export const { changeSkill, resetSkill, spellBookToggle } =
  skillSelectorSlice.actions;

export default skillSelectorSlice.reducer;
