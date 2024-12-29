import ServerCard from '@/app/Component/Server'
import React from 'react'
interface Servertype {
  id: number,
  name: string,
  type: string,
  available: boolean,
}

export default async function ServerSide() {
  const response = await fetch("https://simple-books-api.glitch.me/books/")
  const data: Servertype[] = await response.json()
  console.log(data)
  return (
    <div className='min-h-screen bg-teal-900 flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center p-5 gap-7'>
      <h1 className='font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 text-transparent bg-clip-text
       border border-b border-gray-700 pb-2 text-2xl md:text-5xl mb-6'>
        Server-Side Data Fetching
      </h1>
    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data.map((Obj, index) => (
        <div key={index}>
          <ServerCard {...Obj} />
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}
