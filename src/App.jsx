import './App.css'
import { CarouselDates } from '@/components/carousel-dates'
import { TimesGrid } from '@/components/times-grid'

function App() {
  return (
    <>
    <main className="w-full flex flex-col justify-center">
      <CarouselDates/>
			<TimesGrid/>
    </main>
    </>
  )
}

export default App
