import { CalendarCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <CalendarCheck className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                book<span className="text-primary-400">it</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              The easiest way to discover and book local services — from restaurants to wellness and beyond.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {['Restaurants', 'Padel', 'Barbershops', 'Beauty', 'Medical', 'Fitness', 'Spa'].map((c) => (
                <li key={c}>
                  <Link to={`/?category=${c.toLowerCase()}`} className="hover:text-white transition-colors">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About us', 'For businesses', 'Blog', 'Careers', 'Help center'].map((l) => (
                <li key={l}>
                  <span className="hover:text-white transition-colors cursor-pointer">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© 2026 Bookit. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
