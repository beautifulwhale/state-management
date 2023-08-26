import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function FooDetail() {
  const data = useLoaderData()

  return <>
    <span>name: {data.name}</span>
    <span>age: {data.age}</span>
    <span>id: {data.id}</span>
  </>
}
