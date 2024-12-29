import React from "react";

export interface ServerType {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const ServerCard = ({ id, name, type, available }: ServerType) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden transition-transform hover:scale-105  hover:shadow-lg hover:shadow-black bg-white p-6 ">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">Type: {type}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-xs">ID: {id}</span>
        <span
          className={`text-sm font-medium px-3 py-1 rounded ${
            available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {available ? "Available" : "Unavailable"}
        </span>
      </div>
    </div>
  );
};

export default ServerCard;
