export function generateDatesArray(length) {
  const dates = []
  const today = new Date()

  for (let i = 0; i < length; i++) {
    const currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i)

    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')

    dates.push(`${day}.${month}`)
  }

  return dates
}