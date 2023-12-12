import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import commentReducer from "./slice/commentSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    post: commentReducer,
});
 const store =  configureStore({
    reducer: rootReducer,
 })

 export default store;