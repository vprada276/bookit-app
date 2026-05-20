import type { Business } from '../types'

export const BUSINESSES: Business[] = [
  // RESTAURANTS
  {
    id: 'resto-1',
    name: 'Lumière Bistro',
    category: 'restaurants',
    location: 'Palermo, Buenos Aires',
    address: 'Thames 1856, Palermo',
    description:
      'A modern French-Argentine fusion bistro with an open kitchen and a warm, intimate atmosphere. Perfect for date nights and special occasions.',
    rating: 4.8,
    reviewCount: 312,
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80',
    ],
    priceRange: '$$$',
    openingHours: [
      { day: 'Mon - Thu', hours: '12:00 - 23:00' },
      { day: 'Fri - Sat', hours: '12:00 - 00:30' },
      { day: 'Sunday', hours: '12:00 - 22:00' },
    ],
    services: [
      { id: 's1', name: 'Lunch (2 people)', duration: 90, price: 45, description: 'Table for two, lunch service' },
      { id: 's2', name: 'Dinner (2 people)', duration: 120, price: 70, description: 'Table for two, dinner service' },
      { id: 's3', name: 'Private Dining (4-6)', duration: 150, price: 160, description: 'Private room experience' },
    ],
    tags: ['French', 'Fusion', 'Fine Dining', 'Wine'],
    featured: true,
    distance: '0.8 km',
  },
  {
    id: 'resto-2',
    name: 'Nikkei House',
    category: 'restaurants',
    location: 'Recoleta, Buenos Aires',
    address: 'Av. Callao 1234, Recoleta',
    description:
      'Contemporary Japanese-Peruvian cuisine in the heart of Recoleta. Known for its exceptional ceviches and signature sushi rolls.',
    rating: 4.7,
    reviewCount: 208,
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80',
      'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80',
    ],
    priceRange: '$$$',
    openingHours: [
      { day: 'Tue - Sun', hours: '13:00 - 23:30' },
      { day: 'Monday', hours: 'Closed' },
    ],
    services: [
      { id: 's1', name: 'Lunch (2 people)', duration: 90, price: 55, description: 'Table for two, lunch' },
      { id: 's2', name: 'Dinner (2 people)', duration: 120, price: 80, description: 'Table for two, dinner' },
    ],
    tags: ['Japanese', 'Peruvian', 'Nikkei', 'Sushi'],
    distance: '1.2 km',
  },
  {
    id: 'resto-3',
    name: 'La Parrilla del Sur',
    category: 'restaurants',
    location: 'San Telmo, Buenos Aires',
    address: 'Defensa 567, San Telmo',
    description:
      'Authentic Argentine asado experience. Our wood-fired grill has been the heart of this family-run steakhouse for over 20 years.',
    rating: 4.9,
    reviewCount: 541,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
    ],
    priceRange: '$$',
    openingHours: [
      { day: 'Mon - Sun', hours: '12:00 - 00:00' },
    ],
    services: [
      { id: 's1', name: 'Table (2 people)', duration: 90, price: 35, description: 'Standard table reservation' },
      { id: 's2', name: 'Table (4 people)', duration: 90, price: 60, description: 'Group reservation' },
      { id: 's3', name: 'Table (6+ people)', duration: 120, price: 100, description: 'Large group reservation' },
    ],
    tags: ['Steakhouse', 'Asado', 'Argentine', 'Grill'],
    featured: true,
    distance: '2.1 km',
  },

  // PADEL
  {
    id: 'padel-1',
    name: 'Padel Club Buenos Aires',
    category: 'padel',
    location: 'Belgrano, Buenos Aires',
    address: 'Av. del Libertador 7200, Belgrano',
    description:
      'Premium padel facility with 8 professional courts, equipment rental, coaching sessions, and a full-service bar and lounge area.',
    rating: 4.6,
    reviewCount: 187,
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80',
    ],
    priceRange: '$$',
    openingHours: [
      { day: 'Mon - Fri', hours: '07:00 - 23:00' },
      { day: 'Sat - Sun', hours: '08:00 - 22:00' },
    ],
    services: [
      { id: 's1', name: 'Court (1 hour)', duration: 60, price: 28, description: 'Single court booking for up to 4 players' },
      { id: 's2', name: 'Court + Equipment', duration: 60, price: 38, description: 'Court + racket and ball rental' },
      { id: 's3', name: 'Coaching Session', duration: 60, price: 55, description: 'Private lesson with pro coach' },
    ],
    tags: ['Padel', 'Sports', 'Courts', 'Lessons'],
    featured: true,
    distance: '3.4 km',
  },
  {
    id: 'padel-2',
    name: 'Urban Padel Hub',
    category: 'padel',
    location: 'Villa Crespo, Buenos Aires',
    address: 'Corrientes 5400, Villa Crespo',
    description:
      'Modern urban padel club with 4 indoor and 2 outdoor courts. Open early morning to late night for the serious player.',
    rating: 4.4,
    reviewCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
    ],
    priceRange: '$',
    openingHours: [
      { day: 'Mon - Sun', hours: '06:00 - 00:00' },
    ],
    services: [
      { id: 's1', name: 'Indoor Court (1h)', duration: 60, price: 22, description: 'Indoor court rental' },
      { id: 's2', name: 'Outdoor Court (1h)', duration: 60, price: 18, description: 'Outdoor court rental' },
    ],
    tags: ['Padel', 'Indoor', 'Outdoor', '24h'],
    distance: '1.7 km',
  },

  // BARBERSHOPS
  {
    id: 'barber-1',
    name: "The Gentleman's Cut",
    category: 'barbershops',
    location: 'Palermo, Buenos Aires',
    address: 'Honduras 4892, Palermo Soho',
    description:
      'Old-school barbershop with a modern twist. Master barbers specializing in classic cuts, hot towel shaves, and beard sculpting.',
    rating: 4.9,
    reviewCount: 423,
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    ],
    priceRange: '$$',
    openingHours: [
      { day: 'Mon - Fri', hours: '09:00 - 20:00' },
      { day: 'Saturday', hours: '09:00 - 18:00' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    services: [
      { id: 's1', name: 'Classic Cut', duration: 30, price: 18, description: 'Haircut with wash and style' },
      { id: 's2', name: 'Hot Towel Shave', duration: 45, price: 22, description: 'Classic straight razor shave' },
      { id: 's3', name: 'Cut + Shave', duration: 60, price: 35, description: 'Full grooming experience' },
      { id: 's4', name: 'Beard Sculpt', duration: 30, price: 15, description: 'Beard trim and shaping' },
    ],
    tags: ['Haircut', 'Shave', 'Beard', 'Classic'],
    featured: true,
    distance: '0.5 km',
  },
  {
    id: 'barber-2',
    name: 'Sharp & Co.',
    category: 'barbershops',
    location: 'Microcentro, Buenos Aires',
    address: 'Florida 890, Microcentro',
    description:
      'Premium downtown barbershop. Quick, precise cuts during your lunch break or after work. No waiting, just quality.',
    rating: 4.5,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    ],
    priceRange: '$',
    openingHours: [
      { day: 'Mon - Fri', hours: '08:00 - 21:00' },
      { day: 'Saturday', hours: '10:00 - 17:00' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    services: [
      { id: 's1', name: 'Express Cut', duration: 20, price: 12, description: 'Quick precision cut' },
      { id: 's2', name: 'Full Service', duration: 45, price: 25, description: 'Cut, beard and style' },
    ],
    tags: ['Quick', 'Precision', 'Express'],
    distance: '4.2 km',
  },

  // BEAUTY
  {
    id: 'beauty-1',
    name: 'Aura Beauty Studio',
    category: 'beauty',
    location: 'Las Cañitas, Buenos Aires',
    address: 'Arévalo 2849, Las Cañitas',
    description:
      'Luxury beauty studio offering full-service hair, nails, facials, and makeup. A sanctuary designed for the modern woman.',
    rating: 4.8,
    reviewCount: 289,
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    ],
    priceRange: '$$$',
    openingHours: [
      { day: 'Mon - Sat', hours: '09:00 - 20:00' },
      { day: 'Sunday', hours: '10:00 - 16:00' },
    ],
    services: [
      { id: 's1', name: 'Haircut & Style', duration: 60, price: 40, description: 'Cut, blow-dry, and style' },
      { id: 's2', name: 'Color Treatment', duration: 120, price: 85, description: 'Full color or highlights' },
      { id: 's3', name: 'Manicure + Pedicure', duration: 90, price: 45, description: 'Gel nails included' },
      { id: 's4', name: 'Facial Express', duration: 60, price: 55, description: 'Deep cleansing facial' },
      { id: 's5', name: 'Bridal Package', duration: 240, price: 200, description: 'Full bridal prep experience' },
    ],
    tags: ['Hair', 'Nails', 'Facials', 'Makeup', 'Bridal'],
    featured: true,
    distance: '1.1 km',
  },
  {
    id: 'beauty-2',
    name: 'Glow Nail Bar',
    category: 'beauty',
    location: 'Núñez, Buenos Aires',
    address: 'Av. del Libertador 8200, Núñez',
    description:
      'Trendy nail salon specializing in gel, acrylic, and nail art. Walk-ins welcome, appointments get priority service.',
    rating: 4.6,
    reviewCount: 178,
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    ],
    priceRange: '$$',
    openingHours: [
      { day: 'Mon - Sat', hours: '10:00 - 20:30' },
      { day: 'Sunday', hours: '11:00 - 18:00' },
    ],
    services: [
      { id: 's1', name: 'Gel Manicure', duration: 60, price: 28, description: 'Long-lasting gel polish' },
      { id: 's2', name: 'Acrylic Full Set', duration: 90, price: 45, description: 'Full set of acrylic nails' },
      { id: 's3', name: 'Nail Art (per nail)', duration: 15, price: 5, description: 'Custom nail art designs' },
      { id: 's4', name: 'Pedicure Spa', duration: 60, price: 30, description: 'Relaxing foot spa treatment' },
    ],
    tags: ['Nails', 'Gel', 'Acrylic', 'Nail Art'],
    distance: '2.9 km',
  },

  // MEDICAL
  {
    id: 'medical-1',
    name: 'Centro Médico Salud+',
    category: 'medical',
    location: 'Palermo, Buenos Aires',
    address: 'Santa Fe 3200, Palermo',
    description:
      'Comprehensive medical center with over 20 specialties. Modern facilities, experienced physicians, and minimal waiting times.',
    rating: 4.7,
    reviewCount: 632,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    ],
    priceRange: '$$',
    openingHours: [
      { day: 'Mon - Fri', hours: '08:00 - 20:00' },
      { day: 'Saturday', hours: '09:00 - 14:00' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    services: [
      { id: 's1', name: 'General Consultation', duration: 30, price: 40, description: 'General practitioner visit' },
      { id: 's2', name: 'Dermatology', duration: 30, price: 55, description: 'Skin specialist appointment' },
      { id: 's3', name: 'Cardiology', duration: 45, price: 65, description: 'Heart health consultation' },
      { id: 's4', name: 'Pediatrics', duration: 30, price: 45, description: 'Pediatric consultation' },
      { id: 's5', name: 'Nutrition', duration: 45, price: 50, description: 'Nutritionist appointment' },
    ],
    tags: ['Medical', 'Doctors', 'Health', 'Specialist'],
    featured: true,
    distance: '0.9 km',
  },
  {
    id: 'medical-2',
    name: 'Dra. Sofia Vega — Dentista',
    category: 'medical',
    location: 'Recoleta, Buenos Aires',
    address: 'Av. Pueyrredón 1100, Recoleta',
    description:
      'Modern dental clinic offering preventive, cosmetic, and restorative dentistry. Gentle, patient-centered approach.',
    rating: 4.9,
    reviewCount: 214,
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
    ],
    priceRange: '$$',
    openingHours: [
      { day: 'Mon - Thu', hours: '09:00 - 19:00' },
      { day: 'Friday', hours: '09:00 - 17:00' },
      { day: 'Sat - Sun', hours: 'Closed' },
    ],
    services: [
      { id: 's1', name: 'Cleaning & Check-up', duration: 45, price: 35, description: 'Preventive dental care' },
      { id: 's2', name: 'Teeth Whitening', duration: 60, price: 90, description: 'Professional whitening session' },
      { id: 's3', name: 'Orthodontic Consult', duration: 30, price: 45, description: 'Braces or aligner evaluation' },
    ],
    tags: ['Dental', 'Cosmetic', 'Orthodontics', 'Whitening'],
    distance: '1.5 km',
  },

  // FITNESS
  {
    id: 'fitness-1',
    name: 'Atlas Performance Gym',
    category: 'fitness',
    location: 'Puerto Madero, Buenos Aires',
    address: 'Pierina Dealessi 750, Puerto Madero',
    description:
      'High-performance fitness center with state-of-the-art equipment, personal trainers, and specialized group classes.',
    rating: 4.7,
    reviewCount: 345,
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    ],
    priceRange: '$$$',
    openingHours: [
      { day: 'Mon - Fri', hours: '06:00 - 23:00' },
      { day: 'Sat - Sun', hours: '07:00 - 21:00' },
    ],
    services: [
      { id: 's1', name: 'Personal Training (1h)', duration: 60, price: 55, description: '1-on-1 with certified trainer' },
      { id: 's2', name: 'Yoga Class', duration: 60, price: 18, description: 'Group yoga session' },
      { id: 's3', name: 'HIIT Class', duration: 45, price: 20, description: 'High-intensity interval training' },
      { id: 's4', name: 'Pilates', duration: 55, price: 22, description: 'Mat or reformer pilates' },
    ],
    tags: ['Gym', 'Personal Training', 'Classes', 'Yoga', 'HIIT'],
    featured: true,
    distance: '5.0 km',
  },

  // SPA
  {
    id: 'spa-1',
    name: 'Zen Spa & Wellness',
    category: 'spa',
    location: 'Palermo Hollywood',
    address: 'Godoy Cruz 1780, Palermo Hollywood',
    description:
      'A tranquil urban retreat offering therapeutic massages, body treatments, and holistic wellness experiences. Let your stress melt away.',
    rating: 4.8,
    reviewCount: 267,
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    ],
    priceRange: '$$$',
    openingHours: [
      { day: 'Mon - Sun', hours: '10:00 - 21:00' },
    ],
    services: [
      { id: 's1', name: 'Swedish Massage (60min)', duration: 60, price: 65, description: 'Full-body relaxation massage' },
      { id: 's2', name: 'Deep Tissue (90min)', duration: 90, price: 90, description: 'Therapeutic deep tissue massage' },
      { id: 's3', name: 'Aromatherapy', duration: 60, price: 70, description: 'Massage with essential oils' },
      { id: 's4', name: 'Couples Retreat', duration: 90, price: 155, description: 'Side-by-side massage for two' },
      { id: 's5', name: 'Hot Stone Therapy', duration: 75, price: 85, description: 'Volcanic stone full-body treatment' },
    ],
    tags: ['Massage', 'Spa', 'Wellness', 'Aromatherapy', 'Couples'],
    featured: true,
    distance: '0.6 km',
  },
]

export function getBusinessById(id: string): Business | undefined {
  return BUSINESSES.find((b) => b.id === id)
}

export function getBusinessesByCategory(category: string): Business[] {
  return BUSINESSES.filter((b) => b.category === category)
}

export function getFeaturedBusinesses(): Business[] {
  return BUSINESSES.filter((b) => b.featured)
}

export function searchBusinesses(query: string): Business[] {
  const q = query.toLowerCase()
  return BUSINESSES.filter(
    (b) =>
      b.name.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.location.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q))
  )
}
