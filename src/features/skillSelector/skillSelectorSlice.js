import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Acid Arrow",
  index: "acid-arrow",
  desc: [
    "A shimmering green arrow streaks toward a target w…damage and no damage at the end of its next turn.",
  ],
  url: "/api/spells/acid-arrow",
  higher_level: [
    "When you cast this spell using a spell slot of 3rd…) increases by 1d4 for each slot level above 2nd.",
  ],
  damage: {
    damage_type: {
      index: "acid",
      name: "Acid",
      url: "/api/damage-types/acid",
    },
    damage_at_slot_level: {
      2: "4d4",
      3: "5d4",
      4: "6d4",
      5: "7d4",
      6: "8d4",
      7: "9d4",
      8: "10d4",
      9: "11d4",
    },
  },
  level: 2,
  // attack_type: "ranged",
  // casting_time: "1 action",
  // classes: {
  //   index: "wizard",
  //   name: "Wizard",
  //   url: "/api/classes/wizard"
  // },
  // components: ['V', 'S', 'M'],
  // concentration: false,
  // duration: "Instantaneous",
  // material: "Powdered rhubarb leaf and an adder's stomach.",
  // range: "90 feet",
  // ritual: false,
  // school: {index: 'evocation', name: 'Evocation', url: '/api/magic-schools/evocation'},
  // subclasses: (2) [{…}, {…}]
};

export const skillSelectorSlice = createSlice({
  name: "skillSelector",
  initialState,
  reducers: {
    changeName: (state) => {
      state.name = "changed skillSelector state";
    },
    revertName: (state) => {
      state.name = "Acid Arrow";
    },
  },
});

export const { changeName, revertName } = skillSelectorSlice.actions;

export default skillSelectorSlice.reducer;
