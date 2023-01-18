import { combineReducers } from "redux";
import iceCreamReducer from "./Reducer/actions";

const rootReducer = combineReducers({ ICE_CREAM : iceCreamReducer });

export default rootReducer;