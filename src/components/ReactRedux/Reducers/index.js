import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
  name: "incdec",
  initialState: 1,
  reducers: {
    Inc: (state, action) => {
      const number = parseInt(action.payload);
      return (state += number);
    },
    Dec: (state, action) => {
      const number = parseInt(action.payload);
      return (state -= number);
    },
  },
});

export const { Inc, Dec } = incdecSlice.actions;
export default incdecSlice.reducer;
