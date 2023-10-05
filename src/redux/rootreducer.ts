import { combineReducers } from "redux";
import  loaderReducer from "./Loder/loader.reducer";
const rootReducer = combineReducers({loaderReducer})
export type rootReducerType = ReturnType<typeof rootReducer>;
export type LoaderReducerType = ReturnType<typeof loaderReducer>;
export default rootReducer;