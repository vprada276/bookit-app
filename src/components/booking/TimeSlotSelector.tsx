import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { generateTimeSlots } from '../../data/timeSlots'

interface TimeSlotSelectorProps {
  serviceId: string
  selectedDate: string
  selectedSlot: string | null
  onDateChange: (date: string) => void
  onSlotSelect: (slotId: string, time: string) => void
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00')
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

function getNextDays(startDate: string, count: number) {
  return Array.from({ length: count }, (_, i) => addDays(startDate, i))
}

function formatDayLabel(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.round((d.getTime() - today.getTime()) / 86400000)

  if (diff === 0) return 'Today'
  if (diff === 1) return 'Tomorrow'
  return d.toLocaleDateString('en-US', { weekday: 'short' })
}

function formatDayNum(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').getDate()
}

export default function TimeSlotSelector({
  serviceId,
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotSelect,
}: TimeSlotSelectorProps) {
  const [weekOffset, setWeekOffset] = useState(0)
  const today = new Date().toISOString().split('T')[0]
  const weekStart = addDays(today, weekOffset * 7)
  const days = getNextDays(weekStart, 7)

  const slots = generateTimeSlots(selectedDate, serviceId)

  const morningSlots = slots.filter((s) => {
    const h = parseInt(s.time.split(':')[0])
    return h < 12
  })
  const afternoonSlots = slots.filter((s) => {
    const h = parseInt(s.time.split(':')[0])
    return h >= 12 && h < 17
  })
  const eveningSlots = slots.filter((s) => {
    const h = parseInt(s.time.split(':')[0])
    return h >= 17
  })

  return (
    <div>
      {/* Date picker */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-700">{formatDate(selectedDate)}</p>
          <div className="flex gap-1">
            <button
              onClick={() => setWeekOffset((o) => Math.max(0, o - 1))}
              disabled={weekOffset === 0}
              className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => setWeekOffset((o) => o + 1)}
              className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => {
            const isSelected = day === selectedDate
            const isPast = day < today
            return (
              <button
                key={day}
                onClick={() => !isPast && onDateChange(day)}
                disabled={isPast}
                className={`
                  flex flex-col items-center py-2.5 rounded-2xl text-xs font-medium transition-all
                  ${isSelected
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                    : isPast
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'bg-gray-50 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }
                `}
              >
                <span className="text-[10px] uppercase tracking-wide mb-1 opacity-75">
                  {formatDayLabel(day)}
                </span>
                <span className="font-bold text-sm">{formatDayNum(day)}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Time slots */}
      <div className="space-y-4">
        {[
          { label: 'Morning', icon: '🌅', slots: morningSlots },
          { label: 'Afternoon', icon: '☀️', slots: afternoonSlots },
          { label: 'Evening', icon: '🌆', slots: eveningSlots },
        ].map(
          ({ label, icon, slots: group }) =>
            group.length > 0 && (
              <div key={label}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {icon} {label}
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {group.map((slot) => (
                    <button
                      key={slot.id}
                      disabled={!slot.available}
                      onClick={() => slot.available && onSlotSelect(slot.id, slot.time)}
                      className={`
                        py-2 px-1 rounded-xl text-sm font-semibold transition-all
                        ${
                          selectedSlot === slot.id
                            ? 'bg-primary-600 text-white shadow-md shadow-primary-200 scale-105'
                            : slot.available
                              ? 'bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-700 hover:scale-105 border border-gray-100'
                              : 'bg-gray-50 text-gray-300 cursor-not-allowed line-through border border-gray-100'
                        }
                      `}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}
