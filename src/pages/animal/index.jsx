import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { append, decrement } from '../../redux-store/reducer/animal'

export default function Animal() {
  const animals = useSelector((state) => state.animal)
  const dispatch = useDispatch()

  const appendTian = () => {
    dispatch(append({ name: '甜甜', age: 3, sex: 'girl' }))
  }

  const deleteZhu = () => {
    dispatch(decrement({ id: 2 }))
  }

  return <>
    <ul>
      {
        animals.map(animal => <li key={animal.id}>{animal.name} -- {animal.age}</li>)
      }
    </ul>
    <br />
    <button onClick={appendTian}>添加甜甜</button>
    <button onClick={deleteZhu}>删除猪猪</button>
  </>

}