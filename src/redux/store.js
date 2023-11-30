import {createStore,combineReducers} from "redux";
import counterReducer from "./reducers/counterReducer.js";

const rootReducers = combineReducers({
    counter:counterReducer
})
const store=createStore(rootReducers)

export default store