'use client';

import { useCart } from '../../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-10 text-center mt-8">Your Cart</h1>
      <div className='flex justify-center items-center mb-10'>
        <FiShoppingCart className='text-5xl font-bold' />
      </div>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            {cart.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  )}
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="mx-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded-lg"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Total</p>
              <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
