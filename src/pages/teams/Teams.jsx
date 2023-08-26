import { useLocation, useNavigate, Outlet } from "react-router-dom"
import React, { useState } from 'react'

export default function Teams() {
  const teamList = [
    { teamName: '皇家马德里', teamId: '1', price: 10000 },
    { teamName: '巴塞罗那', teamId: '2', price: 4000 },
    { teamName: '曼城', teamId: '3', price: 2000 },
  ]
  const [count, setCount] = useState(0)

  const location = useLocation()
  const navigate = useNavigate()
  // const outlet = useOutlet()

  const goToDetail = (team) => {
    navigate(`/teams/${team.teamId}`, {
      state: team
    })
  }

  function render() {
    return <>
      {
        teamList.map(team => {
          return <li key={team.teamId}>
            <span>俱乐部名称： {team.teamName}</span>
            <span>市值： {team.price}</span>
            <button onClick={() => goToDetail(team)}>详情</button>
          </li>
        })
      }
    </>
  }

  return <>
    <div>
      {
        location.pathname !== '/teams' ? <Outlet context={[count, setCount]} /> : render()
      }
    </div>
  </>
}
