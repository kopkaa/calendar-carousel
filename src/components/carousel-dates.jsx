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

const DATE_ITEMS_LENGTH = 5

export function CarouselDates({ onIndexChange }) {
  const [carouselApi, setCarouselApi] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const dates = generateDatesArray(DATE_ITEMS_LENGTH)

  useEffect(() => {
    if (!carouselApi) return

    const handleSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap())
    }
    carouselApi.on("select", handleSelect)
    return () => {
      carouselApi.off("select", handleSelect)
    }
  }, [carouselApi])

	useEffect(() => {
    onIndexChange(activeIndex)
  }, [activeIndex])

  const handleItemClick = (index) => {
		setActiveIndex(index)
    if (carouselApi) {
      carouselApi.scrollTo(index)
    }
  }

	const handleNextClick = () => {
		const nextIndex = activeIndex + 1
		if(DATE_ITEMS_LENGTH <= nextIndex) {
			return
		}
		setActiveIndex(nextIndex)
		if (carouselApi) {
      carouselApi.scrollTo(nextIndex)
    }
  }

	const handlePreviousClick = () => {
		const previousIndex = activeIndex - 1
		if(previousIndex < 0) {
			return
		}
		setActiveIndex(previousIndex)
		if (carouselApi) {
      carouselApi.scrollTo(previousIndex)
    }
  }

  return (
    <Carousel className="w-full" setApi={setCarouselApi}>
      <CarouselContent className="-ml-1">
        { dates.map((date, index) => {
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
      <CarouselPrevious onClick={() => handlePreviousClick()} />
      <CarouselNext onClick={() => handleNextClick()} />
    </Carousel>
  )
}
