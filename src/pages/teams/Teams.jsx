import { useNavigate } from "react-router-dom"
import React from 'react'

export default function Teams() {
  const teamList = [
    { teamName: '皇家马德里', teamId: 1, price: 10000 },
    { teamName: '巴塞罗那', teamId: 2, price: 4000 },
    { teamName: '曼城', teamId: 3, price: 2000 },
  ]

  const navigate = useNavigate()

  const goToDetail = (team) => {
    navigate(`/teams/${team.teamId}`)
  }

  return <>
    <div>
      {
        teamList.map(team => {
          return <li key={team.teamId}>
            <span>俱乐部名称： {team.teamName}</span>
            <span>市值： {team.price}</span>
            <button onClick={() => goToDetail(team)}>详情</button>
          </li>
        })
      }
    </div>
  </>
}
