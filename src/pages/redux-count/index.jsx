import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByLoad, fetchTodoList } from '../../redux-store/reducer/count'

export default function ReduxCount() {
  const counter = useSelector((state) => state.counter.count)
  const doList = useSelector((state) => state.counter.dolist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoList(1))
    console.log('222');
  }, [dispatch])

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
    <br />

    <ul>
      {
        doList?.map(item => <li key={item.id}>{item.title} --- {item.completed}</li>)
      }
    </ul>
  </>

}