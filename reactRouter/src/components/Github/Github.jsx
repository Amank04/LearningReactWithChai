import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
     const data = useLoaderData();
    // const [data, setData] = useState(0)

    // useEffect(() => {
      
    //   fetch("https://api.github.com/users/Amank04")
    //   .then((response) => response.json())
    //   .then((data) => setData(data))

    // }, [])
    
  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-600 to-blue-400 w-full'>
        <h1 className='text-center'>Github followers: {data.followers}</h1>
        <div className='w-full flex justify-center'>

        <img width={300} height={400} src={data.avatar_url} alt='GitHub profile'/>
        </div>
    </div>
  )
}

export default Github

export const getGithubInfo = async () => {
    const data = await fetch("https://api.github.com/users/Amank04")
    return data.json();
}