import { Link } from 'react-router-dom'
import { CalendarX, ArrowLeft } from 'lucide-react'

export default function BookingsPage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Explore
      </Link>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">My Bookings</h1>
      <p className="text-gray-500 mb-12">Sign in to view your upcoming and past appointments.</p>

      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mb-6">
          <CalendarX className="w-10 h-10 text-gray-400" />
        </div>
        <h2 className="text-xl font-bold text-gray-700 mb-2">No bookings yet</h2>
        <p className="text-gray-400 text-sm max-w-xs">
          Once you book a service, your appointments will appear here.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Explore Services
        </Link>
      </div>
    </div>
  )
}
