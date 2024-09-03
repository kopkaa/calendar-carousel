
import { format, addDays } from "date-fns"

const generateDatesArray = (length) => {
  const dates = []
  const todayDate = new Date()

  for (let i = 0; i < length; i++) {
    const currentDate = addDays(todayDate, i)
		const formattedDate = format(currentDate, "dd.MM")
    dates.push(formattedDate)
  }

  return dates
}

const getPrefixedDate = (date, index) => {
	if (index === 0) {
		return `Dnes ${date}`
	} else if (index === 1) {
		return `Zítra ${date}`
	}
	return date
}

const generateTimeSlots = () => {
	const timeSlots = []
	const startHour = 14
	const endHour = 23
	
	for (let hour = startHour; hour <= endHour; hour++) {
			let time = `${hour < 10 ? '0' : ''}${hour}:00`
			let capacity = Math.floor(Math.random() * 3)
			
			timeSlots.push({
					"Time": time,
					"Capacity": capacity,
					"OriginalCapacity": 2
			})
	}

	return timeSlots
}

export { getPrefixedDate, generateDatesArray, generateTimeSlots }