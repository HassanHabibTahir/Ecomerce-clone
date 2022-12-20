import { createSlice } from "@reduxjs/toolkit";

const initalState = JSON.parse(localStorage.getItem("cart")) || [];

const Setlocalstorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
};
const UserSlice = createSlice({
  name: "cart",
  initialState: initalState,

  reducers: {
    addtocart: (state, action) => {
      state.push(action.payload);
      Setlocalstorage(state);
    },
    removefromcart: (state, action) => {
      const indexs = state.filter((item, i) => i !== action.payload);
      if (indexs) {
        Setlocalstorage(indexs);

        return indexs;
      }
    },
    increasequantity: (state, action) => {
      const val = state.find((item, i) => item.id === action.payload);
      if (val) {
        val.quantity += 1;
        Setlocalstorage(state);
        return state;
      }
    },
    decreasequantity: (state, action) => {
      const val = state.find((item, i) => item.id === action.payload);

      if (val.quantity > 1) {
        val.quantity -= 1;
        Setlocalstorage(state);
        return state;
      }
    },
  },
});
export const { addtocart, removefromcart, increasequantity, decreasequantity } =
  UserSlice.actions;
export default UserSlice.reducer;
