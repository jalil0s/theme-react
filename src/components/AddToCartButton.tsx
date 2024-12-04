import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore, CartItem } from '../store/cartStore';

interface AddToCartButtonProps {
  item: Omit<CartItem, 'quantity'>;
  variant?: string;
}

export function AddToCartButton({ item, variant }: AddToCartButtonProps) {
  const { addItem, setIsOpen, setHighlightedItemId } = useCartStore();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...item,
      quantity: 1,
      variant: variant ? { name: variant } : undefined,
    };
    
    addItem(cartItem);
    setHighlightedItemId(item.id);
    setIsOpen(true);
    
    // Reset highlight after animation
    setTimeout(() => {
      setHighlightedItemId(null);
    }, 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
    >
      <ShoppingCart className="w-5 h-5" />
      <span>Add to Cart</span>
    </button>
  );
}