import { Product } from "@/app/Component/Client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const parsedId = parseInt(params.id);
  const fetchData = await fetch("https://fakestoreapi.com/products");
  const response: Product[] = await fetchData.json();
  const product = response?.find((p) => p.id === parsedId);

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
          <p className="text-lg text-gray-600 mt-2">
            Sorry, the product you&#39;re looking for doesn&#39;t exist.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}

              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="mt-6">
              <span className="block text-sm font-medium text-gray-500">Category:</span>
              <span className="text-lg font-semibold text-gray-800">{product.category}</span>
            </div>
            <div className="mt-4">
              <span className="block text-sm font-medium text-gray-500">Price:</span>
              <span className="text-2xl font-bold text-blue-600">${product.price}</span>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-400 text-lg">&#9733;</span>
              <p className="ml-2 text-gray-600">{product.rating.rate} / 5</p>
            </div>
            <div>
            <button className="mt-8 w-full px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700 transition">
              Add to Cart
            </button>
            <button className="mt-8 w-full px-6 py-3  bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700 transition">
              Back to Shopping
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
