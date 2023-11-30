import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/counterActions'

const Counter = () => {

    const count=useSelector(state=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter
