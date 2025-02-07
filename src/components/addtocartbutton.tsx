// components/AddToCartButton.tsx
'use client'; // Mark this as a client component

import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

interface AddToCartButtonProps {
  product: {
    _id: string;
    name: string;
    price: number;
    imageUrl?: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
}