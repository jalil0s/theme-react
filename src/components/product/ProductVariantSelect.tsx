import React from 'react';
import { ProductVariant } from '../../types/product';

interface ProductVariantSelectProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant | null;
  onVariantChange: (variant: ProductVariant | null) => void;
}

export function ProductVariantSelect({ 
  variants, 
  selectedVariant, 
  onVariantChange 
}: ProductVariantSelectProps) {
  if (variants.length <= 1) return null;

  return (
    <div className="mb-3">
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500 bg-white"
        value={selectedVariant?.name || ''}
        onChange={(e) => {
          const variant = variants.find(v => v.name === e.target.value);
          onVariantChange(variant || null);
        }}
      >
        {variants.map((variant) => (
          <option key={variant.name} value={variant.name}>
            {variant.name}
          </option>
        ))}
      </select>
    </div>
  );
}