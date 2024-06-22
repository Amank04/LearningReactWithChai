import { useState } from 'react'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-center bg-orange-500 py-2 px-5'>Chalo ek baar fir se Ajnabi bn jae hm-dono.</h1>
    </>
  )
}

export default App
