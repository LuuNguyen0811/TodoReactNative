import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const allReducer = combineReducers({
    todoReducer: todoReducer
})
export default allReducer