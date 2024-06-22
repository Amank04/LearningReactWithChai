import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bear from "./Bear.jsx"

function App() {
  const name = "Aman Kumar";

  return (
    <>
    <Bear/>
      <div >Hello, i am {name}.</div>
      <div>I am VCIS intern this year, 2024.</div>
    </>
  )
}

export default App
