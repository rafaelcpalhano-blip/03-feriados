import './App.css'

/*Components Imports */
import Header from './components/Header'
import HolidayCard from './components/HolidayCard'
import NextHoliday from './components/NextHoliday'

/*Mocked Data*/
import holidays from './data/holidays'

function App() {

  return (
    
    <>
      <Header />

      <NextHoliday />
     
      <p className='count'>14 feriados em 2026</p>

     <main className='holiday-list'>
        

        {holidays.map((item) => (
             <HolidayCard key={item.date} date={item.date} name={item.name} weekday={item.weekday} />
          ))}

     </main>
    </>
  )
}

export default App
