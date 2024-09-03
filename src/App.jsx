import './App.css'
import { CarouselDates } from '@/components/carousel-dates'
import { TimesGrid } from '@/components/times-grid'
import { useState, useEffect } from 'react'

function App() {
	const [index, setIndex] = useState()

  const handleIndexChange = (index) => {
    setIndex(index)
  }
  return (
    <>
    <main className="w-full flex flex-col justify-center">
      <CarouselDates onIndexChange={handleIndexChange}/>
			<TimesGrid index={index}/>
    </main>
    </>
  )
}

export default App
