import Image from 'next/image';
import Link from 'next/link';

interface SiteCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export default function SiteCard({
  id,
  name,
  description,
  price,
  rating,
  reviews,
  image,
  category,
}: SiteCardProps) {
  return (
    <Link href={`/site/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-xs text-purple-600 font-semibold uppercase">{category}</p>
              <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-semibold text-gray-700">{rating}</span>
              <span className="text-xs text-gray-500">({reviews})</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-purple-600">${price}</span>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
