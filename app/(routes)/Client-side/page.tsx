"use client"
import ProductCard, { Product } from '@/app/Component/Client'
import Loader from '@/app/Component/Loader'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// Csr
export default function ClientSide() {
  const [loader, setLoader] = useState(false)
  const [products, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function ClientFetching() {
      setLoader(true)
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      setProduct(data)
      setLoader(false)
    }
    ClientFetching()
  }, [])
  if (loader) {
    return (
      <Loader />
    )
  }
  console.log(products)
  return (
    <div className='p-5 bg-teal-900 min-h-screen' >
      <div className='flex flex-col justify-center items-center'>

        <h1 className='font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 text-transparent bg-clip-text
       border border-b border-gray-700 pb-2 text-2xl md:text-5xl mb-6'>
          Client-Side Data Fetching
        </h1>
        <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-7 '>
          {products.map((Product, index) => (
            <div key={index}>
             <Link href={`/Client-side/${Product.id}`}> <ProductCard {...Product} /> </Link>
            </div>

          ))}
        </div>
      </div>
    </div>

  )
}
