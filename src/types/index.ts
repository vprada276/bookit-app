export type CategoryId =
  | 'restaurants'
  | 'padel'
  | 'barbershops'
  | 'beauty'
  | 'medical'
  | 'fitness'
  | 'spa'

export interface Category {
  id: CategoryId
  label: string
  emoji: string
  color: string
  bgColor: string
}

export interface OpeningHours {
  day: string
  hours: string
}

export interface Service {
  id: string
  name: string
  duration: number // minutes
  price: number
  description?: string
}

export interface TimeSlot {
  id: string
  time: string
  available: boolean
}

export interface Business {
  id: string
  name: string
  category: CategoryId
  location: string
  address: string
  description: string
  rating: number
  reviewCount: number
  imageUrl: string
  images: string[]
  priceRange: '$' | '$$' | '$$$' | '$$$$'
  openingHours: OpeningHours[]
  services: Service[]
  tags: string[]
  featured?: boolean
  distance?: string
}

export interface Booking {
  id: string
  businessId: string
  businessName: string
  serviceId: string
  serviceName: string
  date: string
  timeSlot: string
  customerName: string
  customerEmail: string
  customerPhone: string
  status: 'confirmed' | 'pending' | 'cancelled'
}
