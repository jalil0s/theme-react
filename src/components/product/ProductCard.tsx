import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { Product, ProductVariant } from '../../types/product';
import { ProductImage } from './ProductImage';
import { ProductVariantSelect } from './ProductVariantSelect';
import { ProductPrice } from './ProductPrice';

interface ProductCardProps {
  product: Product;
  layout?: boolean;
}

export function ProductCard({ product, layout = true }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [selectedVariant, setSelectedVariant] = React.useState<ProductVariant | null>(
    Array.isArray(product.variants) && product.variants.length > 0 ? product.variants[0] : null
  );

  if (product.isAvailable !== 1) return null;

  const variants = Array.isArray(product.variants) ? product.variants : 
    (typeof product.variants === 'string' ? JSON.parse(product.variants) : []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: selectedVariant?.price || product.price || 0,
      originalPrice: selectedVariant?.original_price || selectedVariant?.price || product.originalPrice || product.price || 0,
      discount: selectedVariant?.discountPercentage || product.discount || 0,
      image: product.image || (Array.isArray(product.images) ? product.images[0] : undefined),
      description: product.description,
      variant: selectedVariant ? {
        name: selectedVariant.name,
        price: selectedVariant.price,
        discountPercentage: selectedVariant.discountPercentage,
        billingCycle: selectedVariant.billingCycle
      } : undefined
    });
  };

  const metadata = typeof product.metadata === 'string'
    ? JSON.parse(product.metadata)
    : product.metadata;

  const imageUrl = product.image || 
    (Array.isArray(product.images) ? product.images[0] : undefined) || 
    'https://placehold.co/400x300?text=No+Image';
  
  const currentPrice = selectedVariant?.price || product.price || 0;
  const originalPrice = selectedVariant?.original_price || selectedVariant?.price || product.originalPrice || product.price || 0;
  const savings = originalPrice - currentPrice;
  const discount = savings > 0 ? Math.round((savings / originalPrice) * 100) : 0;

  return (
    <motion.div
      layout={layout}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <ProductImage
        id={product.id}
        name={product.name}
        imageUrl={imageUrl}
        savings={savings}
      />

      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        <ProductVariantSelect
          variants={variants}
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariant}
        />
        
        {(metadata?.shortDescription || product.description) && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {metadata?.shortDescription || product.description}
          </p>
        )}

        <ProductPrice
          currentPrice={currentPrice}
          originalPrice={originalPrice}
          savings={savings}
          discount={discount}
        />

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white h-10 rounded-lg transition-colors duration-200 flex items-center justify-center"
          disabled={!product.isAvailable}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}