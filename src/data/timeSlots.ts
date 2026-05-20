import type { TimeSlot } from '../types'

const ALL_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00',
]

// Deterministically mark some slots as unavailable using a seed
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function generateTimeSlots(date: string, serviceId: string): TimeSlot[] {
  const seed = date.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) +
    serviceId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)

  return ALL_SLOTS.map((time, i) => ({
    id: `slot-${time.replace(':', '')}`,
    time,
    available: seededRandom(seed + i) > 0.3, // ~70% available
  }))
}
