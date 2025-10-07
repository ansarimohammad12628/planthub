import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const userSlice = createSlice({
  name: "plantshop",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.item.push(action.payload);
    },
    removecart: (state, action) => {
      state.item = state.item.filter((val) => val !== action.payload);
    },
  },
});
export const {addtocart,removecart} = userSlice.actions;
export default userSlice.reducer