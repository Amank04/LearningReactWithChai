import React from 'react'

const Card = ({username="The Coldest Sunset", details={name: "Vishwajeet Nand Yaduraj", roll:"49", college:"Cluster Innovatoin"}}) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto pt-4">
  <img className="w-full" src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Two birds loving each other." />
  <div className="px-6 py-4 bg-blue-300">
    <div className="font-bold text-xl mb-2">{username}</div>
    <p className="text-gray-700 text-base">
      {details.name} {details.roll} {details.college}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2 bg-blue-300">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
     </div>
  )
}

export default Card