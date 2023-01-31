import { createSlice } from "@reduxjs/toolkit";

const dummyState = {
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
const initialState = {
  name: "",
  index: "",
  desc: "",
  url: "",
  damage: "",
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
