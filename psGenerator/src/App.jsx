import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,2)
    navigator.clipboard.writeText(password)
  },[password])

  const psGenerator = useCallback(() => {
       let pass = "";
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       if(numAllowed) str+="012345678965489810214";
       if(charAllowed) str += `${'!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'}`;

       for(let i=1;i<=length;i++) {
           const digitIndex = Math.floor((Math.random() * str.length) + 1);
           pass+=str.charAt(digitIndex);
       }

       setpassword(pass);
  }, [length, numAllowed, charAllowed]);

  //every time values of length or numAllowed or charAllowed are changed, function is called.
  useEffect(() => {
    psGenerator();
  
  }, [length, numAllowed, charAllowed])
  


  return (
    <>
    <div className=' py-10 px-8 bg-gray-600 rounded-md w-full max-w-2xl mx-auto  shadow-sm mt-20'>

      <h1 className='text-center text-3xl my-2 text-white'>Password Generator </h1>

      <div className='flex overflow-hidden rounded-sm w-full'>
      <input 
      className=' outline-none w-full rounded-l-2xl py-2 px-3 border-blue-700 border-2' 
      type="text" 
      ref={passwordRef}
      value={password} 
      readOnly />
      <button 
      className='bg-blue-700 rounded-r-2xl px-2 py-1 hover:border-2 text-white'
      onClick={copyToClipBoard}
      >Copy</button>
      </div>

      <div className='flex px-3 py-1 text-lg justify-around'>

<div className='flex'>

<input type="range"
 className='cursor-pointer accent-blue-400 hover:accent-blue-700 focus:accent-blue-700 bg-red-400' 
 min={6} 
 max={20} 
 value={length}
 onChange={(e) => setLength(e.target.value)} />
<label className='text-orange-400'>Length: {length} </label>
 </div>

<div className='flex'>

<input type="checkbox" 
className='mr-1'
defaultChecked={numAllowed}
onChange={()=> setNumAllowed(!numAllowed)} />
<label className='text-orange-400'>Numbers</label>
</div>

<div className='flex'>

<input type="checkbox" 
className='mr-1'
defaultChecked={charAllowed}
onClick={()=> setCharAllowed(!charAllowed)} />
<label className='text-orange-400'>Characters</label>
</div>

      </div>

    </div>
    </>
  )
}

export default App
