import { useEffect, useState } from 'react'
import { X, CheckCircle, User, Mail, Phone, Loader2 } from 'lucide-react'
import type { Business, Service } from '../../types'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  business: Business
  service: Service
  date: string
  time: string
  onConfirm: (details: { name: string; email: string; phone: string }) => void
}

function formatDisplayDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

type Step = 'form' | 'loading' | 'success'

export default function BookingModal({
  isOpen,
  onClose,
  business,
  service,
  date,
  time,
  onConfirm,
}: BookingModalProps) {
  const [step, setStep] = useState<Step>('form')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (isOpen) {
      setStep('form')
      setErrors({})
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Name is required'
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = 'Valid email required'
    if (!phone.trim()) e.phone = 'Phone is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStep('loading')
    // Simulate API call
    setTimeout(() => {
      setStep('success')
      onConfirm({ name, email, phone })
    }, 1800)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && step !== 'loading' && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-white sm:rounded-3xl rounded-t-3xl shadow-float max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        {step !== 'loading' && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Booking summary card */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-6 sm:rounded-t-3xl rounded-t-3xl">
          <p className="text-primary-200 text-xs font-semibold uppercase tracking-wider mb-1">
            Your booking
          </p>
          <h2 className="text-xl font-bold mb-1">{business.name}</h2>
          <p className="text-primary-200 text-sm">{service.name}</p>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <div className="bg-white/15 rounded-xl px-3 py-2">
              <p className="text-primary-200 text-xs">Date</p>
              <p className="font-semibold">{formatDisplayDate(date)}</p>
            </div>
            <div className="bg-white/15 rounded-xl px-3 py-2">
              <p className="text-primary-200 text-xs">Time</p>
              <p className="font-semibold">{time}</p>
            </div>
            <div className="bg-white/15 rounded-xl px-3 py-2">
              <p className="text-primary-200 text-xs">Duration</p>
              <p className="font-semibold">{service.duration} min</p>
            </div>
          </div>
        </div>

        {/* Step: Form */}
        {step === 'form' && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Your details</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+54 11 1234-5678"
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Total</p>
                <p className="text-2xl font-bold text-gray-900">${service.price}</p>
              </div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-primary-200"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        )}

        {/* Step: Loading */}
        {step === 'loading' && (
          <div className="p-12 flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-10 h-10 text-primary-600 animate-spin" />
            <p className="text-gray-600 font-medium">Confirming your booking...</p>
          </div>
        )}

        {/* Step: Success */}
        {step === 'success' && (
          <div className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-9 h-9 text-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Booking Confirmed!</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A confirmation has been sent to <strong>{email}</strong>. See you at {business.name} on {formatDisplayDate(date)} at {time}.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
