"use client"

import Button from "./Component/Button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-900">
     
      <div className="text-center mb-8">
        <h1 className="font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 text-transparent bg-clip-text
       border border-b border-gray-700 pb-2 text-2xl md:text-5xl mb-6 animate-bounce">Welcome to My Assignment</h1>
        <p className="text-2xl font-bold font-serif animate-pulse">Check in </p>
      </div>
      
      <div className=" flex flex-col md:flex-row gap-4">
       <Button  button="Server Side Data Fetching" href="/Server-side"/>
       <Button button=" Client Side Data Fetching" href="/Client-side"/>
        
      </div>
      </div>
   
  )
}