import React from 'react'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { TodoContext } from '../context'

const HomeChild = () => {
  const { TodoList: { list } } = useContext(TodoContext)

  return <>
    <ul>
      {
        list.map((item) => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  </>
}

export default observer(HomeChild)
