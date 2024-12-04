import React from 'react';

interface ProductPriceProps {
  currentPrice: number;
  originalPrice: number;
  savings: number;
  discount: number;
}

export function ProductPrice({ 
  currentPrice, 
  originalPrice, 
  savings, 
  discount 
}: ProductPriceProps) {
  return (
    <div className="mt-auto">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-xl font-bold text-gray-900">
          ${currentPrice.toFixed(2)}
        </span>
        {savings > 0 && (
          <span className="text-sm text-gray-500 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
        {discount > 0 && (
          <span className="text-sm font-medium text-red-500">
            {discount}% OFF
          </span>
        )}
      </div>
      {savings > 0 && (
        <div className="text-sm font-medium text-green-600">
          You save ${savings.toFixed(2)}
        </div>
      )}
    </div>
  );
}