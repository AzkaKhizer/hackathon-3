"use client";

import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
  quantity: number; // ✅ Ensure quantity is included
}

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Ensure imageUrl has a fallback value if undefined
    const productWithFallbackImage = {
      ...product,
      imageUrl: product.imageUrl ?? 'default-image.jpg', // Fallback to a default image if undefined
    };

    // Add product with fallback image to the cart
    addToCart(productWithFallbackImage);
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
