import React from 'react'
const mockData = [
  { id: 1, title: 'The Witcher 3', image: 'https://cdn2.steamgriddb.com/hero/87896a4f32e7a4842b220691cf6e51d7.jpg' },
  { id: 2, title: 'God of War Ragnarok', image: 'https://cdn2.steamgriddb.com/hero/6c73e29b5c799f2bd212a97678a3a197.jpg' },
  { id: 3, title: 'Demon Souls (2020)', image: 'https://cdn2.steamgriddb.com/hero/e7b966126309c9707f07563d62d14f0c.jpg' }
]

const Featured = () => {
  return (
    <section className="mb-8 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Featured Games</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {mockData.map((game) => (
          <div key={game.id} className="relative h-48 rounded-lg overflow-hidden group">
            <img src={game.image} alt={game.title} className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white font-semibold"> {game.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section >
  )
}

export default Featured
