import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function generateDatesArray(length) {
  const dates = []
  const today = new Date()

  for (let i = 0; i < length; i++) {
    const currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i)
    dates.push(currentDate.toDateString())
  }

  return dates
}

export function CarouselTimes() {
  const [api, setApi] = useState()

	const numberOfItems = 5 // Define how many items you want in the carousel
  const dates = generateDatesArray(numberOfItems)

	useEffect(() => {
		console.log("API object:", api) // Add this line to check if the API object is set correctly
		if (!api) return
	
		const handleSelect = () => {
			console.log('CAAW')
			console.log("Next button clicked. Current index:", api.selectedScrollSnap())
		}
	
		api.on("select", handleSelect)

		return () => {
			api.off("select", handleSelect)
		}
	}, [api])

  return (
    <Carousel className="w-full max-w-sm" setApi={setApi}>
      <CarouselContent className="-ml-1">
        {dates.map((date, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{ date }</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
