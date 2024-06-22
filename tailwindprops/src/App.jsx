import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Card from "./components/Card"

function App() {
  const username1 = "Amank04", details1 = {name:"Aman Kumar", roll:"07", college:"Cluster Innovation Centre"};
  const username2 = "DashingAditya", details2 = {name:"Aditya singh", roll:"05", college:"Cluster Innovation Centre"};

  return (
    <>
     <h1 className='text-4xl bg-red-400 p-4 text-center text-white'>Hind kaa Sitara!</h1>
     <div className="w-full h-fit bg-red-200 ">
    <Card username={username1} details={details1} />
    <Card username={username2} details={details2}/>
    <Card/>
     
</div>
    </>
  )
}

export default App
