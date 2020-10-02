import React from 'react'
import Food from './Food'

//kimchi를 쓰고싶으면
export default function App() {
  return (
    <div>
      <Food fav="kimchi" color="red" isSpecial/>
      <Food fav="ramen" color="blue"/>
      <Food fav="samgupsal" color="yellow"/>
      <Food color="pink"/>
    </div>
  )
}
