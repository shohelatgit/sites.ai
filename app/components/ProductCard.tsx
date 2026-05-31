import Image from 'next/image';

interface ProductCardProps {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  screenshot: string;
  features: string[];
  onViewDemo: () => void;
}

export default function ProductCard({
  id,
  title,
  category,
  price,
  description,
  screenshot,
  features,
  onViewDemo,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={screenshot}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-purple-600 uppercase bg-purple-100 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Features */}
        <div className="mb-4">
          <ul className="text-xs text-gray-700 space-y-1">
            {features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                {feature}
              </li>
            ))}
            {features.length > 2 && (
              <li className="text-gray-500 italic">
                +{features.length - 2} more features
              </li>
            )}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-bold text-purple-600">${price}</p>
          </div>
          <button
            onClick={onViewDemo}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
          >
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}
