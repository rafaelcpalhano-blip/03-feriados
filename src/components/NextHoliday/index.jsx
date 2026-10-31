import { useState, useEffect, useRef } from 'react'
import "./next-holiday.css";

export default function NextHoliday({ holiday }) {
  const [now, setNow] = useState(() => new Date());
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const holidayDate = new Date(
    `${holiday.date}T00:00:00`
  ).toLocaleDateString("pt-BR");

  const start = new Date(`${holiday.date}T00:00:00`);
  const seconds = Math.max(0, Math.floor((start - now) / 1000));

  return (
    <section className='next-holiday'>
      <p>O próximo é</p>

      <h2>{holiday.name}</h2>

      <p>{holiday.weekday}, {holidayDate}</p>

      <h2 className='countdown'>
        Faltam {seconds}
      </h2>
    </section>
  );
}