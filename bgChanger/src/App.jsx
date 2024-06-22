import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
     <div className='w-full h-screen' style={{backgroundColor:color}}>

          
{/* <div className='fixed flex flex-wrap bottom-10 bg-green-200 justify-center w-fit mx-auto inset-x-0'> */}

              <div className='fixed bottom-10 inset-x-0 w-fit mx-auto flex flex-wrap gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
<button onClick={() => setColor("red")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "red"}}>Red</button>
<button onClick={() => setColor("blue")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "blue"}}>Blue</button>
<button onClick={() => setColor("green")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "green"}}>Green</button>
<button onClick={() => setColor("pink")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "pink"}}>Pink</button>
<button onClick={() => setColor("purple")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "purple"}}>Purple</button>
<button onClick={() => setColor("white")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "white"}}>White</button>
<button onClick={() => setColor("violet")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "violet"}}>Violet</button>
<button onClick={() => setColor("yellow")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "yellow"}}>Yellow</button>
<button onClick={() => setColor("orange")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "orange"}}>Orange</button>
<button onClick={() => setColor("grey")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "grey"}}>Grey</button>
<button onClick={() => setColor("powderblue")} className='rounded-3xl px-4 py-1' style={{backgroundColor: "powderblue"}}>Powder Blue</button>
              </div>
</div>
          {/* </div> */}
     
    </>
  )
}

export default App
