import { INCREMENT,DECREMENT,RESET } from "../actions/actionTypes";

let initialState=0;

function counterReducer(state=initialState,actions){
    switch(actions.type){
        case INCREMENT:return state + actions.value
        case DECREMENT:return state - actions.value
        case RESET:return initialState
        default:return state
    }
}
export default counterReducer;