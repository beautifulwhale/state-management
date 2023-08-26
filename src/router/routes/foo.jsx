import React from 'react'
import { json } from 'react-router-dom';

export default function Foo() {
  return <h3>I am Foo</h3>
}

export async function fooLoader() {
  return json({ name: 'mark', age: 20 })
}