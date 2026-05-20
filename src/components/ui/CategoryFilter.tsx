import { CATEGORIES } from '../../data/categories'
import type { CategoryId } from '../../types'

interface CategoryFilterProps {
  selected: CategoryId | null
  onSelect: (id: CategoryId | null) => void
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
      {/* All pill */}
      <button
        onClick={() => onSelect(null)}
        className={`
          flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
          ${
            selected === null
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 scale-105'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
          }
        `}
      >
        All
      </button>

      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(selected === cat.id ? null : cat.id)}
          className={`
            flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
            ${
              selected === cat.id
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
            }
          `}
        >
          <span className="text-base leading-none">{cat.emoji}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  )
}
