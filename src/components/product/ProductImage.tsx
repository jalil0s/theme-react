import React from 'react';
import { Link } from 'react-router-dom';

interface ProductImageProps {
  id: string;
  name: string;
  imageUrl: string;
  savings?: number;
}

export function ProductImage({ id, name, imageUrl, savings }: ProductImageProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
      <Link to={`/product/${id}`} className="block w-full h-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/400x300?text=No+Image';
          }}
        />
      </Link>
      {savings > 0 && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          Save ${savings.toFixed(2)}
        </div>
      )}
    </div>
  );
}