'use client';

import { useState } from 'react';
import ProductCard from './components/ProductCard';
import DemoModal from './components/DemoModal';
import products from './data/products.json';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  screenshot: string;
  demoUrl: string;
  features: string[];
}

export default function Home() {
  const [selectedDemo, setSelectedDemo] = useState<{
    isOpen: boolean;
    demoUrl: string;
    title: string;
  }>({
    isOpen: false,
    demoUrl: '',
    title: '',
  });

  const handleViewDemo = (product: Product) => {
    setSelectedDemo({
      isOpen: true,
      demoUrl: product.demoUrl,
      title: product.title,
    });
  };

  const handleCloseDemo = () => {
    setSelectedDemo({
      isOpen: false,
      demoUrl: '',
      title: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Website Marketplace</h1>
          <p className="text-gray-600 mt-2">Browse and preview beautiful website templates</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(products as Product[]).map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onViewDemo={() => handleViewDemo(product)}
            />
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products available yet.</p>
            <p className="text-gray-400">Add demo websites to public/demos/ folder</p>
          </div>
        )}
      </main>

      {/* Demo Modal */}
      <DemoModal
        isOpen={selectedDemo.isOpen}
        demoUrl={selectedDemo.demoUrl}
        title={selectedDemo.title}
        onClose={handleCloseDemo}
      />
    </div>
  );
}
