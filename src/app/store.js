import { configureStore } from "@reduxjs/toolkit";

//Reducers
import { useReducer } from "../reducers/user/userSlice";

export default configureStore({
  reducer:{
    user: useReducer
  }
})