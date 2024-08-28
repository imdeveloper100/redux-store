import React from "react";

const Card = ({ image, title, price, onClick, removeClick }) => {
  return (
    <div className="max-w-sm overflow-hidden border-2 border-slate-400 rounded-lg p-4 bg-slate-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full">
      <img className="w-full h-48 rounded-lg object-cover" src={image} alt={title} />
      <div className="flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Price: ${price}
        </p>
      </div>
      {removeClick ? (
          <button 
            onClick={removeClick}
            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          >
            Remove Item
          </button>
        ) : (
          <button 
            onClick={onClick}
            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        )}
    </div>
  );
};

export default Card;
