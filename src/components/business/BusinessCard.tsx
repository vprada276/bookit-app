import { Link } from 'react-router-dom'
import { Star, MapPin, Clock } from 'lucide-react'
import type { Business } from '../../types'
import { CATEGORIES } from '../../data/categories'

interface BusinessCardProps {
  business: Business
}

const PRICE_LABELS: Record<string, string> = {
  '$': 'Budget',
  '$$': 'Moderate',
  '$$$': 'Premium',
  '$$$$': 'Luxury',
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const category = CATEGORIES.find((c) => c.id === business.category)

  return (
    <Link
      to={`/business/${business.id}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={business.imageUrl}
          alt={business.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Featured badge */}
        {business.featured && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            ✨ Featured
          </div>
        )}

        {/* Price range */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
          {business.priceRange}
        </div>

        {/* Category chip on image bottom */}
        {category && (
          <div className={`absolute bottom-3 left-3 flex items-center gap-1.5 ${category.bgColor} ${category.color} text-xs font-semibold px-2.5 py-1 rounded-full`}>
            <span>{category.emoji}</span>
            <span>{category.label}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-primary-600 transition-colors">
            {business.name}
          </h3>
          {/* Rating */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-gray-900">{business.rating}</span>
            <span className="text-xs text-gray-400">({business.reviewCount})</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{business.description}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-[140px]">{business.location}</span>
          </div>

          {business.distance && (
            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{business.distance}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {business.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {business.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-50 text-gray-500 text-xs px-2 py-0.5 rounded-full border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
