import { Link, useNavigate } from 'react-router-dom'
import { MapPin, Menu, X, CalendarCheck } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-200">
              <CalendarCheck className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              book<span className="text-primary-600">it</span>
            </span>
          </Link>

          {/* Location badge */}
          <button className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary-600 bg-gray-50 hover:bg-primary-50 rounded-full px-3 py-1.5 transition-colors">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-medium">Buenos Aires</span>
          </button>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Explore
            </Link>
            <button
              onClick={() => navigate('/bookings')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              My Bookings
            </button>
            <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm">
              Sign In
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-primary-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Explore
            </Link>
            <button
              onClick={() => { navigate('/bookings'); setMenuOpen(false) }}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-primary-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              My Bookings
            </button>
            <button className="w-full bg-primary-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl">
              Sign In
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
