'use client';

import { useCart } from '../../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image'; // ✅ Import Next.js Image component
import { useRouter } from 'next/navigation'; // Importing useRouter for navigation

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const router = useRouter(); // Initialize the router

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-4">Your Cart</h1>

      <div className="flex justify-center items-center my-6">
        <FiShoppingCart className="text-4xl md:text-5xl" />
      </div>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cart Items */}
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            {cart.map((item) => (
              <div key={item._id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4">
                <div className="flex flex-col sm:flex-row items-center">
                  {item.imageUrl && (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                        priority // Loads important images first
                      />
                    </div>
                  )}
                  <div className="mt-2 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center mt-3 sm:mt-0">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="mx-3 sm:mx-4 text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded-lg"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="ml-3 sm:ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center sm:text-left">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600 text-lg">Total</p>
              <p className="text-lg md:text-xl font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
            {/* Checkout Button */}
            <button
  onClick={() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Store cart in localStorage
    router.push("/checkout"); // Navigate to checkout
  }}
  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
>
  Checkout
</button>

          </div>
        </div>
      )}
    </div>
  );
}
