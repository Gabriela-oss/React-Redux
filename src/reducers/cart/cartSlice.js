//Slice es un reducer en redux toolkit reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalCount: 0,
	productList: "",
	token: "12345ñplk",
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    }
  },
});

//action creators are generated for each case reducer function -> userSLice devuelve un objeto llamado actions
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
