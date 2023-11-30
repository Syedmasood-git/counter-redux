import { INCREMENT,DECREMENT,RESET } from "./actionTypes"

export const increment=(value=1)=>{
    return({
        type:INCREMENT,
        value:value
    })
}
export const decrement=(value=1)=>{
    return({
        type:DECREMENT,
        value:value
    })
}
export const reset=(value)=>{
    return({
        type:RESET,
        value:value
    })
}