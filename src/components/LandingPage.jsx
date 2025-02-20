import React from 'react'
import Featured from './Featured'
import Search from './Search'
import GameList from './GameList'

const LandingPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <Featured />
      <Search />
      <GameList />

    </main>

  )
}

export default LandingPage
