import { useState, useEffect } from 'react'
import { generateTimeSlots } from "@/lib/date"



export function TimesGrid() {
	const [timeSlots, setTimeSlots] = useState([])

	useEffect(() => {
			const slots = generateTimeSlots()
			setTimeSlots(slots)
	}, [])

	const capacityFormatted = (capacity, originalCapacity) => {
    return `(${capacity}/${originalCapacity})`
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
			{timeSlots.map((slot, index) => (
          <div
            key={index}
           className="relative border border-gray-200 p-6 rounded-lg shadow-lg bg-transparent hover:bg-blue-600 cursor-pointer"
          >
              <div
                className={`absolute top-2 left-2 text-xs font-medium px-2 ${
                  slot.Capacity === slot.OriginalCapacity ? 'text-red-500' : 'text-gray-100'
                }`}
              >
              {capacityFormatted(slot.Capacity, slot.OriginalCapacity)}
            </div>
            <div className="text-3xl font-bold text-white">{slot.Time}</div>
          </div>
        ))}
      </div>
    </>
  )
}