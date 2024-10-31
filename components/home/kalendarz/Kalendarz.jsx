"use client"

import Title from '@components/Title'

import DayCard from './components/DayCard'
import { useEffect, useState } from 'react'
import { getDateToday } from '@utils/date'
import InfoBar from './components/InfoBar'

const Kalendarz = () => {
  const [todayData, setTodayData] = useState({})
  const [tomorrowData, setTomorrowData] = useState({})
  const [laterData, setLaterData] = useState({})

  const fetchReadings = async (dateToFind) => {
    try {
      const readings = await fetch('api/readings', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dateToFind })
      });
      const html = await readings.json();
      return html.data;
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const todayData = await fetchReadings(getDateToday(0));
      const tomorrowData = await fetchReadings(getDateToday(1));
      const laterData = await fetchReadings(getDateToday(2));

      setTodayData(todayData)
      setTomorrowData(tomorrowData)
      setLaterData(laterData)
    }

    fetchData()
  }, [])

  const setSeason = () => {
    const time = todayData?.time?.split(" ");
    if (time != null) {
      if (time[1] == "Tydzień" && time[2] == "zwykły") return "Okres zwykły"
      else if (time[1] == "Tydzień" && time[2] == "adwentu") return "Adwent"
      else if (time[1] == "Narodzenia" && time[2] == "Pańskiego") return "Okres Bożego Narodzenia"
      else if (time[3] == "Narodzeniu" && time[4] == "Pańskim") return "Okres Bożego Narodzenia"
      else if (time[3] == "Narodzeniu" && time[4] == "Pańskim") return "Okres Bożego Narodzenia"
      else if (time[1] == "Wielkiego" && time[2] == "Postu") return "Wielki Post"
      else if (time[0] == "Wielki" && time[1] == "Tydzień") return "Wielki Post"
      else if (time[0] == "Oktawa" && time[1] == "Wielkanocna") return "Okres Wielkanocny"
      else if (time[1] == "Tydzień" && time[2] == "Wielkanocny") return "Okres Wielkanocny"
    }
  }

  return (
    <section id="kalendarz" className='my-[140px] flex flex-col gap-[70px] sm:my-[100px] sm:gap-0'>
      <Title title="Kalendarz" title2="Liturgiczny" subtitle="Czytania na każdy dzień" />

      <InfoBar year={todayData?.year?.slice(4, -4)} season={setSeason()} cycle={todayData?.year?.slice(6)}/>

      <article className='flex flex-col gap-[30px] sm:mt-[30px]'>
        <DayCard dateText={getDateToday(0)} date={todayData?.date?.split(",")} name={todayData?.time} texts={todayData?.readings} color={todayData?.color?.split(" ")[0]} memory={todayData?.day?.slice(0, 20) == "Dzień Powszedni" ? todayData?.date?.split(", ")[1] : todayData?.day} />
        <DayCard dateText={getDateToday(1)} date={tomorrowData?.date?.split(",")} name={tomorrowData?.time} texts={tomorrowData?.readings} color={tomorrowData?.color?.split(" ")[0]} memory={tomorrowData?.day?.slice(0, 20) == "Dzień Powszedni" ? tomorrowData?.date?.split(", ")[1] : tomorrowData?.day} />
        <DayCard dateText={getDateToday(2)} date={laterData?.date?.split(",")} name={laterData?.time} texts={laterData?.readings} color={laterData?.color?.split(" ")[0]} memory={laterData?.day?.slice(0, 20) == "Dzień Powszedni" ? laterData?.date?.split(", ")[1] : laterData?.day} />
      </article>
    </section>
  )
}

export default Kalendarz