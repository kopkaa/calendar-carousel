import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { generateDatesArray, getPrefixedDate } from "@/lib/date"

export function CarouselTimes() {
  const [api, setApi] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const numberOfItems = 5 // Define how many items you want in the carousel
  const dates = generateDatesArray(numberOfItems)

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap()) // Update the active index state when the carousel index changes
    }

    api.on("select", handleSelect)

    // Cleanup on unmount
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  const handleItemClick = (index) => {
		setActiveIndex(index)
    if (api) {
      api.scrollTo(index)
    }
  }

	const handleNextClick = () => {
		const nextIndex = activeIndex + 1
		setActiveIndex(nextIndex)
		if (api) {
      api.scrollTo(nextIndex)
    }
  }

  return (
    <Carousel className="w-full" setApi={setApi}>
      <CarouselContent className="-ml-1">
        {dates.map((date, index) => {
          const isActive = activeIndex === index
          const cardClassName = isActive ? "bg-blue-500" : "bg-white"
          const textClassName = isActive ? "text-white font-bold" : "text-black"

          return (
            <CarouselItem 
              key={index} 
              className="basis-1/3 cursor-pointer"
              onClick={() => handleItemClick(index)}
            >
              <div className="p-1">
                <Card className={`border-none ${cardClassName}`}>
                  <CardContent className={`flex items-center justify-center p-6 ${textClassName}`}>
                    <span className="text-2xl">
                      { getPrefixedDate(date, index) }
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext onClick={() => handleNextClick()} />
    </Carousel>
  )
}
