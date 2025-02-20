import React, { useState } from 'react'
const mockGames = [
  { id: 1, title: 'Grand Theft Auto V', image: 'https://cdn2.steamgriddb.com/hero/838aac83e00e8c5ca0f839c96d6cb3be.png', genre: 'Action', platform: 'PC, PS, Xbox' },
  { id: 2, title: 'Minecraft', image: 'https://cdn2.steamgriddb.com/hero/47f4b6321e9fd8e8f7326a6adc1a7c1e.png', genre: 'Sandbox', platform: 'PC, Console, Mobile' },
  { id: 3, title: 'The Legend of Zelda: Breath of the Wild', image: 'https://cdn2.steamgriddb.com/hero/5860c8577fdd64d1720bc7358ca917b2.png', genre: 'Adventure', platform: 'Nintendo Switch' },
  { id: 4, title: 'Red Dead Redemption 2', image: 'https://cdn2.steamgriddb.com/hero/4b23f8dc9eb4ed500a662e396908d39b.png', genre: 'Action', platform: 'PC, PS, Xbox' },
  { id: 5, title: 'Dark Souls III', image: 'https://cdn2.steamgriddb.com/hero/2181d94fba9a1d2de2b5f6fb75f8ab08.png', genre: 'RPG', platform: 'PC, PS, Xbox' },
  { id: 6, title: 'The Witcher 3', image: 'https://cdn2.steamgriddb.com/hero/87896a4f32e7a4842b220691cf6e51d7.jpg', genre: 'RPG', platform: 'PC' },
  { id: 7, title: 'Cyberpunk 2077', image: 'https://cdn2.steamgriddb.com/hero/719c6c64efb8dbf088b2677dee1a2c2e.png', genre: 'RPG', platform: 'PC, PS, Xbox' },
  { id: 8, title: 'Halo Infinite', image: 'https://cdn2.steamgriddb.com/hero/b87d091b59c00691ef8fdee0f0472b5b.jpg', genre: 'Shooter', platform: 'PC, Xbox' },
  { id: 9, title: 'Call of Duty: Warzone', image: 'https://cdn2.steamgriddb.com/hero/0f79c3f3e971e1af245a3551b53a8737.png', genre: 'Battle Royale', platform: 'PC, Console' },
  { id: 10, title: 'Fortnite', image: 'https://cdn2.steamgriddb.com/hero/fa2b52148f1bfe3621b50ca9e3b3e5e2.png', genre: 'Battle Royale', platform: 'PC, Console, Mobile' },
  { id: 11, title: 'Super Mario Odyssey', image: 'https://cdn2.steamgriddb.com/hero/84e4ff1c1aef896401c3af7975a491b0.png', genre: 'Platformer', platform: 'Nintendo Switch' },
  { id: 12, title: 'God of War', image: 'https://cdn2.steamgriddb.com/hero/6b9134c091f817b0ba60a4fff43ded26.png', genre: 'Action', platform: 'PC, PS' },
  { id: 13, title: 'Elden Ring', image: 'https://cdn2.steamgriddb.com/hero/c73f4d8f3e0c84920eef1464c4c73cb8.jpg', genre: 'RPG', platform: 'PC, PS, Xbox' },
  { id: 14, title: 'Horizon Zero Dawn', image: 'https://cdn2.steamgriddb.com/hero/16837163fee34175358a47e0b51485ff.jpg', genre: 'Action', platform: 'PC, PS' },
  { id: 15, title: 'Animal Crossing: New Horizons', image: 'https://cdn2.steamgriddb.com/hero/2d75ebecba55c44db903cd7f5c59c5f7.png', genre: 'Simulation', platform: 'Nintendo Switch' },
  { id: 16, title: 'Overwatch 2', image: 'https://cdn2.steamgriddb.com/hero/b0927d92e8529303dc32a4690413063b.jpg', genre: 'Shooter', platform: 'PC, Console' },
  { id: 17, title: 'League of Legends', image: 'https://cdn2.steamgriddb.com/hero/1d4fec573363bb608caa3008337ea5cb.png', genre: 'MOBA', platform: 'PC' },
  { id: 18, title: 'Dota 2', image: 'https://cdn2.steamgriddb.com/hero/35bd966ff9784b5ebbaba5e1fad13859.png', genre: 'MOBA', platform: 'PC' },
  { id: 19, title: 'Counter-Strike 2', image: 'https://cdn2.steamgriddb.com/hero/d27be453d21aaa022062a24c5cf4111c.png', genre: 'Shooter', platform: 'PC' },
  { id: 20, title: 'Starfield', image: 'https://cdn2.steamgriddb.com/hero/895bbadee80b41e98a5e78ecf1ece53d.jpg', genre: 'RPG', platform: 'PC, Xbox' }
];

const mockGenres = ['All', 'RPG', 'Action', 'Adventure', 'Sandbox', 'Battle Royale', 'Platformer', 'Simulation', 'Shooter', 'MOBA'];

useEffect(() => {
  fetch('https://www.freetogame.com/api/games');
}, [page])


const GameList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const filteredGames = selectedGenre === "All" ? mockGames : mockGames.filter(game => game.genre === selectedGenre);

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Games</h2>
        <div className="flex gap-2 flex-wrap w-2/3 justify-end">
          {mockGenres.map((genre) => (
            <button key={genre} onClick={() => setSelectedGenre(genre)} className={`px-3 py-1 rounded ${selectedGenre === genre ?
              "bg-indigo-700 " :
              "bg-indigo-500 "
              }  hover:bg-indigo-400 cursor-pointer text-white`}>{genre}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover object-center" />
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
