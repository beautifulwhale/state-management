import React from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'

export default function Team() {
  // const match = useMatch('/teams/:teamId')
  // console.log('match is', match);
  // const resolvePath = useResolvedPath()
  // console.log('resolvePath,', resolvePath);

  const location = useLocation()
  const { price, teamName } = location.state

  const [count, setCount] = useOutletContext()

  return <>
    <h1>teamName: {teamName} ---- price: {price}</h1>
    <button onClick={() => setCount(count + 1)}>{count}</button>
  </>
}