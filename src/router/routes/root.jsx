import React from 'react'
import { Outlet, json, useLoaderData, useLocation } from 'react-router-dom';

export default function Root() {
  const data = useLoaderData()
  const location = useLocation()
  if (location.pathname !== '/') {
    return <Outlet />
  }
  return <>
    <h3>I am Root</h3>
    <span>name: {data.name} ---- age: {data.age}</span>
  </>
}

export async function rootLoader() {
  return json({ name: 'like', age: 18 })
}