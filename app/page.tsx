'use client';

import { useState, useEffect } from 'react';
import SiteCard from './components/SiteCard';
import Header from './components/Header';

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

export default function Home() {
  const [sites, setSites] = useState<Site[]>([]);
  const [filteredSites, setFilteredSites] = useState<Site[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSites = async () => {
      try {
        const response = await fetch('/api/sites');
        const data = await response.json();
        setSites(data);
        setFilteredSites(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load sites:', error);
        setLoading(false);
      }
    };

    loadSites();
  }, []);

  const categories = ['All', 'Startup', 'Portfolio', 'E-Commerce'];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredSites(sites);
    } else {
      setFilteredSites(sites.filter((site) => site.category === category));
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Marketplace</h1>
            <p className="text-xl opacity-90">Discover beautiful, pre-built websites ready to launch</p>
          </div>
        </section>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-purple-200 hover:border-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sites Grid */}
          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Loading sites...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredSites.map((site) => (
                <SiteCard key={site.id} {...site} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
