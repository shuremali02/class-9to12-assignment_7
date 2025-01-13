export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
import Image from "next/image";
import React from "react";

const ProductCard = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) => {
  return (

    <div className="max-w-sm rounded overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white p-6">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title.slice(0, 30)}</h2>
      <p className="text-sm text-gray-600 mb-4">{description.slice(0, 70)}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">Category: {category}</span>
        <span className="text-lg font-bold text-gray-800">${price.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Rating: {rating.rate} ⭐</span>
        <span className="text-sm text-gray-500">({rating.count} reviews)</span>
      </div>
    </div>
  );
};

export default ProductCard;
