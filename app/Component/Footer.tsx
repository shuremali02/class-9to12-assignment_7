import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-teal-700 p-5'>
        <div className='flex flex-col justify-center items-center pb-4'>
            <h1 className='text-2xl font-bold'>API Links : </h1>
            <Link href={"https://fakestoreapi.com/products"} className='hover:animate-pulse text-xl font-semibold text-white '>Client-Side Api</Link>
            <Link href={"https://simple-books-api.glitch.me/books/" } className='hover:animate-pulse text-xl font-semibold text-white '>Server-Side Api</Link>
            <h1 className='font-semibold sm:text-3xl '>Created By Student Leader : Syed Shurem Ali</h1>
        </div>
    </div>
  )
}
