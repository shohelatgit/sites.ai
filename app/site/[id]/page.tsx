'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import { useParams } from 'next/navigation';

interface Site {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  previewUrl: string;
  features: string[];
  tags: string[];
}

export default function SiteDetail() {
  const params = useParams();
  const id = params.id as string;
  const [site, setSite] = useState<Site | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const loadSite = async () => {
      try {
        const response = await fetch('/api/sites');
        const sites = await response.json();
        const selectedSite = sites.find((s: Site) => s.id === parseInt(id));
        setSite(selectedSite);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load site:', error);
        setLoading(false);
      }
    };

    loadSite();
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (!cart.find((item: Site) => item.id === site?.id)) {
      cart.push(site);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${site?.name} added to cart!`);
    } else {
      alert('Already in cart!');
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      </>
    );
  }

  if (!site) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
          <p className="text-gray-500 text-lg mb-4">Site not found</p>
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold">
            Back to marketplace
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Link */}
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold mb-6 inline-block">
            ← Back to marketplace
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image */}
              <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-6">
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg p-8 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{site.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{site.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-2xl">★</span>
                    <span className="text-2xl font-bold text-gray-900">{site.rating}</span>
                    <span className="text-gray-500">({site.reviews} reviews)</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {site.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700">
                        <span className="text-green-500 text-xl">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Preview */}
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Preview</h2>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {showPreview ? 'Hide Preview' : 'Show Live Preview'}
                </button>

                {showPreview && (
                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                    <iframe
                      src={site.previewUrl}
                      className="w-full h-96 border-none"
                      title={`${site.name} preview`}
                      sandbox="allow-same-origin allow-scripts"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Purchase */}
            <div>
              <div className="bg-white rounded-lg p-6 sticky top-24 shadow-lg">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-semibold mb-2">Price</p>
                  <p className="text-4xl font-bold text-purple-600">${site.price}</p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-semibold mb-2">Category</p>
                  <p className="text-lg text-gray-900">{site.category}</p>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors mb-3"
                >
                  Add to Cart
                </button>

                <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors">
                  Buy Now
                </button>

                {/* Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    ✓ Instant delivery<br />
                    ✓ Full source code included<br />
                    ✓ 30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
