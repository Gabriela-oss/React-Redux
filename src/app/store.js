import { configureStore } from "@reduxjs/toolkit";
//solo 1 cambio para seguir haciendo el tutorial
//Reducers
import { useReducer } from "../reducers/user/userSlice";

export default configureStore({
  reducer:{
    user: useReducer
  }
})