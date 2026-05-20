import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Star,
  MapPin,
  Clock,
  ArrowLeft,
  ChevronRight,
  Check,
} from 'lucide-react'
import { getBusinessById } from '../data/businesses'
import { CATEGORIES } from '../data/categories'
import TimeSlotSelector from '../components/booking/TimeSlotSelector'
import BookingModal from '../components/booking/BookingModal'
import type { Service } from '../types'

export default function BusinessDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const business = id ? getBusinessById(id) : undefined

  const [activeImage, setActiveImage] = useState(0)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  )
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null)
  const [selectedSlotTime, setSelectedSlotTime] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  if (!business) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 gap-4">
        <div className="text-6xl">😕</div>
        <h2 className="text-xl font-bold text-gray-900">Business not found</h2>
        <Link to="/" className="text-primary-600 hover:underline text-sm font-medium">
          ← Back to explore
        </Link>
      </div>
    )
  }

  const category = CATEGORIES.find((c) => c.id === business.category)

  const canBook = selectedService && selectedSlotId && selectedSlotTime

  function handleSlotSelect(slotId: string, time: string) {
    setSelectedSlotId(slotId)
    setSelectedSlotTime(time)
  }

  function handleDateChange(date: string) {
    setSelectedDate(date)
    setSelectedSlotId(null)
    setSelectedSlotTime(null)
  }

  function handleServiceSelect(service: Service) {
    setSelectedService(service)
    setSelectedSlotId(null)
    setSelectedSlotTime(null)
  }

  return (
    <div className="flex-1 bg-gray-50">
      {/* Back navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Business info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image gallery */}
            <div className="rounded-3xl overflow-hidden shadow-card">
              <div className="relative h-72 sm:h-96">
                <img
                  src={business.images[activeImage] || business.imageUrl}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
                {/* Category badge */}
                {category && (
                  <div className={`absolute top-4 left-4 flex items-center gap-1.5 ${category.bgColor} ${category.color} text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm`}>
                    <span>{category.emoji}</span>
                    <span>{category.label}</span>
                  </div>
                )}
              </div>
              {/* Thumbnails */}
              {business.images.length > 1 && (
                <div className="flex gap-2 p-3 bg-white">
                  {business.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 transition-all ${
                        activeImage === i ? 'ring-2 ring-primary-500 scale-105' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Business info */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  {business.name}
                </h1>
                <div className="flex items-center gap-1.5 flex-shrink-0 bg-amber-50 px-3 py-1.5 rounded-xl">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-900">{business.rating}</span>
                  <span className="text-gray-400 text-sm">({business.reviewCount})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span>{business.address}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-gray-700">{business.priceRange}</span>
                  <span>·</span>
                  <span>{business.location}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">{business.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {business.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-50 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-bold text-gray-900">Opening Hours</h2>
              </div>
              <div className="space-y-2">
                {business.openingHours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm font-medium text-gray-700">{h.day}</span>
                    <span className={`text-sm font-semibold ${h.hours === 'Closed' ? 'text-red-500' : 'text-green-600'}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Services</h2>
              <div className="space-y-3">
                {business.services.map((service) => {
                  const isSelected = selectedService?.id === service.id
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-100 hover:border-primary-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{service.name}</span>
                          {isSelected && (
                            <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        {service.description && (
                          <p className="text-sm text-gray-500 mt-0.5">{service.description}</p>
                        )}
                        <p className="text-xs text-gray-400 mt-1">{service.duration} min</p>
                      </div>
                      <div className="ml-4 text-right flex-shrink-0">
                        <span className="text-lg font-bold text-gray-900">${service.price}</span>
                        <ChevronRight className={`w-4 h-4 ml-1 inline transition-transform ${isSelected ? 'text-primary-600 rotate-90' : 'text-gray-300'}`} />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Booking panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl shadow-float p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Book a spot</h2>
                <p className="text-sm text-gray-500 mb-5">
                  {selectedService
                    ? `Selected: ${selectedService.name}`
                    : 'Select a service below to continue'}
                </p>

                {selectedService ? (
                  <>
                    <div className="bg-primary-50 rounded-2xl p-3 mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-primary-600 font-semibold">Selected Service</p>
                        <p className="font-bold text-gray-900 text-sm">{selectedService.name}</p>
                      </div>
                      <span className="text-xl font-extrabold text-primary-700">${selectedService.price}</span>
                    </div>

                    <h3 className="text-sm font-bold text-gray-700 mb-3">Choose date & time</h3>
                    <TimeSlotSelector
                      serviceId={selectedService.id}
                      selectedDate={selectedDate}
                      selectedSlot={selectedSlotId}
                      onDateChange={handleDateChange}
                      onSlotSelect={handleSlotSelect}
                    />

                    <button
                      disabled={!canBook}
                      onClick={() => setModalOpen(true)}
                      className={`w-full mt-6 py-3.5 rounded-2xl font-bold text-sm transition-all ${
                        canBook
                          ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-200 hover:scale-[1.02]'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {canBook ? `Book for ${selectedSlotTime}` : 'Select a time slot'}
                    </button>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <div className="text-4xl mb-3">📋</div>
                    <p className="text-sm">
                      Select a service from the list on the left to see available time slots
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking modal */}
      {selectedService && selectedSlotTime && (
        <BookingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          business={business}
          service={selectedService}
          date={selectedDate}
          time={selectedSlotTime}
          onConfirm={() => {
            setTimeout(() => setModalOpen(false), 2500)
          }}
        />
      )}
    </div>
  )
}
