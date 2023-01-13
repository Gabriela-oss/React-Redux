//Slice es un reducer en redux toolkit reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalCount: 0,
	productsList: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addProductToCart: (state, action) => {
			state.productsList = [...state.productsList, action.payload];
			state.totalCount += 1;
		},
	},
});

//action creators are generated for each case reducer function -> cartSLice devuelve un objeto llamado actions
export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
