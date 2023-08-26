import React from 'react'
import { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  return <>
    <h6>count: {count}</h6>
    <button onClick={handleIncrement}>Jia1</button>
  </>
}