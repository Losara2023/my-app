import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let a =15;
  let names = ["Ara","Tata","Bach","John","Louce","Nara"]


  return (
   <div>
    <h1>Ara Kazanjian-{a}</h1>
    {names.map((name,index)=>(<div id={index}>{name}</div>))}
   </div>
  )
}

export default App
