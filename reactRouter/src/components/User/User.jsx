import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams();
  return (
    <div className='text-center bg-gradient-to-l from-purple-400 via-red-500 to-pink-400 text-white'>User: {userId}</div>
  )
}

export default User