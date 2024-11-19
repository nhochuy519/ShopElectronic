import { createSlice } from '@reduxjs/toolkit';

const couterSlice = createSlice({
  name: 'search',
  initialState: {
    value: 'all',
    findBy: 'category',
  },
  reducers: {
    setValue: (state, action) => {
      return action.payload;
    },
    // changeValue: (state, action) => {
    //   return {
    //     past: [...state.past, state.present],
    //     present: action.payload,
    //     future: [],
    //   };
    // },
    // undo: (state) => {
    //   const previous = state.past[state.past.length - 1];
    //   const newPast = state.past.slice(0, state.past.length - 1);
    //   return {
    //     past: newPast,
    //     present: previous,
    //     future: [state.present, ...state.future],
    //   };
    // },
    // redo: (state) => {
    //   const next = state.future[0];
    //   const newFuture = state.future.slice(1);
    //   return {
    //     past: [...state.past, state.present],
    //     present: next,
    //     future: newFuture,
    //   };
    // },
  },
});

export const { setValue } = couterSlice.actions;

export default couterSlice.reducer;
