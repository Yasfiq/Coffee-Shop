import { combineReducers } from "redux";
import productReducer from "./product";
import userReducer from "./user";
import orderReducer from "./order";

export default combineReducers({
    productReducer,
    userReducer,
    orderReducer
})