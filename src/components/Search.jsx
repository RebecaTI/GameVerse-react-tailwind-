import React from 'react'

const Search = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <input type="text" placeholder="Search for games" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Search</button>
      </div>
    </div>
  )
}

export default Search
