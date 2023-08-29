import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByLoad } from '../../redux-store/reducer/count'

export default function ReduxCount() {
  const counter = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const handleAppend = () => {
    dispatch(increment())
  }

  const handleReduce = () => {
    dispatch(decrement())
  }

  const handleAppendTen = () => {
    dispatch(incrementByLoad(10))
  }

  return <>
    <h3>{counter}</h3>
    <button onClick={handleAppend}>加1</button>
    <button onClick={handleReduce}>减1</button>
    <button onClick={handleAppendTen}>加10</button>
  </>

}