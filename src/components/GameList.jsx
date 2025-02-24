import React, { useState, useEffect } from 'react'

const mockGenres = ['All', 'MMORPG', 'Shooter', 'ARPG', 'Strategy', 'Battle Royale', 'MOBA', 'Card Game', 'Sports', 'Fighting'];

const API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
  method: 'GET',
  // mode: 'no-cors',
  headers: {
    'x-rapidapi-key': 'bce6372954mshdeeffb9f4babe5dp19189bjsn09561069db5f',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

const GameList = () => {
  const [APIData, setAPIData] = useState([]);
  const [text, setText] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm);

  // const filteredGames = selectedGenre === "All" ? APIData : APIData.filter(game => game.genre === selectedGenre);

  const filteredGames = APIData
    .filter(game => selectedGenre === 'All' || game.genre === selectedGenre)
    .filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const fetchGames = async () => {
    try {
      const response = await fetch(API_URL, options);
      // console.log(response);
      const json = await response.json();
      setAPIData(json)
    } catch (error) {
      setErrorMessage('Error fetching games. Please try again later');
      console.error(`Error fetching games: error ${error}`);
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <section>

      <div>
        <div className="flex items-center gap-4 mb-4">

          <input
            type="text"
            placeholder="Search for games"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Search</button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {mockGenres.map((genre) => (
            <button key={genre} onClick={() => setSelectedGenre(genre)} className={`px-3 py-1 rounded ${selectedGenre === genre ?
              "bg-indigo-700 " :
              "bg-indigo-500 "
              }  hover:bg-indigo-400 cursor-pointer text-white`}>{genre}</button>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center my-4 ">
        <h2 className="text-2xl font-semibold" onClick={() => {
          setText(text + 1)
          console.log(text)
        }}>All Games - {filteredGames.length} </h2>

      </div>
      {/* {setAPIData.map((game) => {
        <div>

        </div>
      })} */}


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover object-center" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{game.title}</h3>
              <p className="text-gray-500 text-sm">{game.genre} - {game.platform}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GameList
