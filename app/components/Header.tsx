'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <span className="text-xl font-bold text-gray-900">SiteMarket</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
            Browse
          </Link>
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
            Categories
          </Link>
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
            Best Sellers
          </Link>
        </nav>

        <Link href="/cart" className="relative">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            🛒 Cart
          </button>
        </Link>
      </div>
    </header>
  );
}
