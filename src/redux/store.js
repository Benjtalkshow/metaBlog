import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import postReducer from "./slice/postSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
});
 const store =  configureStore({
    reducer: rootReducer,
 })

 export default store;