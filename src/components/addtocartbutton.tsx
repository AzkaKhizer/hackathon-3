// components/AddToCartButton.tsx
'use client'; // Mark this as a client component

import { useCart } from '../context/CartContext';

interface AddToCartButtonProps {
  product: {
    _id: string;
    name: string;
    price: number;
    imageUrl?: string
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
}