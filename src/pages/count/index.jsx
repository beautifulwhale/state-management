import { autorun, when } from 'mobx'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../../context'

export default function Count() {
  const [count, setCount] = useState(0)
  const { counts } = useContext(MyContext)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  autorun(() => {
    if (counts.isLow) {
      console.log('低于了50');
    } else {
      console.log('比50高');
    }
  })
  // dispose()

  // 有effect函数
  when(() => counts.isLow, () => {
    console.log('执行一些操作');
  })

  // const result = when(() => counts.isLow)
  // console.log('result', result);

  autorun(() => {
    console.log('counts变化了', counts.count);
  })

  for (let i = 0; i < 10; i++) {
    counts.reduceCount()
  }

  return <>
    <h6>count: {count}</h6>
    <button onClick={handleIncrement}>Jia1</button>
  </>
}