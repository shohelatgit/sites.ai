'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    email: '',
    fullName: '',
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (checkoutData.email && checkoutData.fullName) {
      alert(`Order confirmed for ${checkoutData.fullName}!\n\nEmail: ${checkoutData.email}\n\nYou will receive your sites shortly.`);
      setCart([]);
      localStorage.removeItem('cart');
      setShowCheckout(false);
      setCheckoutData({ email: '', fullName: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
              <Link
                href="/"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg overflow-hidden">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-6 border-b last:border-b-0 hover:bg-gray-50"
                    >
                      <div className="relative w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                          unoptimized
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                        <p className="text-purple-600 font-bold text-xl mt-2">${item.price}</p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-semibold transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg p-6 sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between mb-3 text-gray-700">
                        <span>{item.name}</span>
                        <span className="font-semibold">${item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between mb-2 text-gray-700">
                      <span>Subtotal</span>
                      <span>${total}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-gray-700">
                      <span>Tax</span>
                      <span>$0</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-2xl font-bold text-gray-900">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>

                  {!showCheckout ? (
                    <button
                      onClick={() => setShowCheckout(true)}
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="font-bold text-gray-900 mb-4">Checkout Details</h3>

                      <input
                        type="text"
                        placeholder="Full Name"
                        value={checkoutData.fullName}
                        onChange={(e) =>
                          setCheckoutData({ ...checkoutData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                      />

                      <input
                        type="email"
                        placeholder="Email Address"
                        value={checkoutData.email}
                        onChange={(e) =>
                          setCheckoutData({ ...checkoutData, email: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                      />

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800">
                          <span className="font-semibold">Demo Mode:</span> This is a mock checkout. Click "Complete Order" to confirm.
                        </p>
                      </div>

                      <button
                        onClick={handleCheckout}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                      >
                        Complete Order
                      </button>

                      <button
                        onClick={() => setShowCheckout(false)}
                        className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
                      >
                        Back
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
