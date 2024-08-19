
import { format, addDays } from "date-fns"

const generateDatesArray = (length) => {
  const dates = []
  const todayDate = new Date()

  for (let i = 0; i < length; i++) {
    const currentDate = addDays(todayDate, i)
    dates.push(format(currentDate, "dd.MM"))
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

export { getPrefixedDate, generateDatesArray }