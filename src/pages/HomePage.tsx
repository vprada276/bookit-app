import { useState, useMemo } from 'react'
import { Sparkles, TrendingUp } from 'lucide-react'
import SearchBar from '../components/ui/SearchBar'
import CategoryFilter from '../components/ui/CategoryFilter'
import BusinessCard from '../components/business/BusinessCard'
import { BUSINESSES } from '../data/businesses'
import type { CategoryId } from '../types'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null)

  const filtered = useMemo(() => {
    let list = BUSINESSES
    if (selectedCategory) {
      list = list.filter((b) => b.category === selectedCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.location.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q)) ||
          b.category.toLowerCase().includes(q)
      )
    }
    return list
  }, [search, selectedCategory])

  const featured = useMemo(() => BUSINESSES.filter((b) => b.featured), [])

  const showFeatured = !search && !selectedCategory

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-indigo-600 text-white overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Discover local services near you
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Book any service,{' '}
              <span className="text-yellow-300">instantly.</span>
            </h1>
            <p className="text-primary-100 text-lg sm:text-xl mb-8 leading-relaxed">
              From restaurants to padel courts, barbershops to medical appointments — find, book, and enjoy.
            </p>

            {/* Search */}
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search for restaurants, barbershops, padel..."
              className="max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category filter */}
        <div className="mb-8">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>

        {/* Featured section */}
        {showFeatured && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">Featured & Popular</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featured.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          </section>
        )}

        {/* All / filtered results */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">
              {selectedCategory
                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`
                : search
                  ? `Results for "${search}"`
                  : 'All Businesses'}
            </h2>
            <span className="text-sm text-gray-500">
              {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No businesses found</h3>
              <p className="text-gray-500 text-sm">
                Try adjusting your search or clearing the filters
              </p>
              <button
                onClick={() => { setSearch(''); setSelectedCategory(null) }}
                className="mt-4 text-primary-600 text-sm font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
