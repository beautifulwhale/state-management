import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Player() {
  const location = useLocation()
  const { playerName, playerValue } = location.state

  return <>
    <h1>playerName: {playerName} ---- playerValue: {playerValue}</h1>
  </>
}