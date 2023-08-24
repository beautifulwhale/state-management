import React from 'react'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { MyContext } from '../context'

const HomeChild = () => {
  const { TodoList: { list } } = useContext(MyContext)

  return <>
    <ul>
      {
        list.map((item) => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  </>
}

export default observer(HomeChild)
