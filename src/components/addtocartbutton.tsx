'use client'; // Mark this as a client component

import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string; // Ensure imageUrl is always a string
  quantity: number;
}

interface AddToCartButtonProps {
  product: Omit<Product, 'quantity'>; // Exclude quantity from props
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      imageUrl: product.imageUrl ?? "/default-image.jpg", // Provide a default image URL
    });

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
