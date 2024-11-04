"use client"

import CalendarSigla from '@components/calendar/CalendarSigla'
import CalendarTextsSection from '@components/calendar/CalendarTextsSection'
import InfoBar from '@components/home/kalendarz/components/InfoBar'
import Title from '@components/Title'
import useIntersectionObserver from '@hooks/useObserver'
import { Icon } from '@iconify/react'
import { getDateToday } from '@utils/date'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const kalendarzDzien = () => {
    const [data, setData] = useState({})

    const { date } = useParams()
    const router = useRouter()

    useEffect(() => {
        const fetchReadings = async (dateToFind) => {
            try {
                const readings = await fetch('/api/readings', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ dateToFind })
                });
                const html = await readings.json();
                setData(html.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchReadings(date)
    }, [date])

    const setSeason = () => {
        const time = data?.time?.split(" ");
        const day = data?.day
        if (time != null) {
            if (time[1] == "Tydzień" && time[2] == "zwykły") return "Okres zwykły"
            else if (time[1] == "Tydzień" && time[2] == "adwentu") return "Adwent"
            else if (time[1] == "Narodzenia" && time[2] == "Pańskiego") return "Okres Bożego Narodzenia"
            else if (time[3] == "Narodzeniu" && time[4] == "Pańskim") return "Okres Bożego Narodzenia"
            else if (time[3] == "Narodzeniu" && time[4] == "Pańskim") return "Okres Bożego Narodzenia"
            else if (time[1] == "Wielkiego" && time[2] == "Postu") return "Wielki Post"
            else if (time[0] == "Wielki" && time[1] == "Tydzień" && !(day == "Wielki Czwartek" || day == "Wielki Piątek Męki Pańskiej" || day == "Wigilia Paschalna")) return "Wielki Post"
            else if (time[0] == "Wielki" && time[1] == "Tydzień" && (day == "Wielki Czwartek" || day == "Wielki Piątek Męki Pańskiej" || day == "Wigilia Paschalna")) return "Triduum Paschalne"
            else if (time[0] == "Oktawa" && time[1] == "Wielkanocna") return "Okres Wielkanocny"
            else if (time[1] == "Tydzień" && time[2] == "Wielkanocny") return "Okres Wielkanocny"
        }
    }

    const displayColor = {
        "zielony": '#325f2f',
        "czerwony": '#e01111',
        "fioletowy": '#860ac9',
        "różowy": "#ff3dfb",
        "biały": "#ffffff"
    }

    const dateInputRef = useRef(null);

    const handleClick = () => {
        dateInputRef.current?.showPicker();
    };

    const formatTitle = (title) => {
        const words = title.replace(".", "").split(" ");

        if (words[1] === "czytanie") {
            return `${words[0]} ${words[1]}: `;
        }

        return `${words[0]}: `;
    }

    const changeDate = (e) => {
        router.push(`/kalendarz/${e.target.value}`)
    }
    
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1
      });

      const [refTwo, isVisibleTwo] = useIntersectionObserver({
        threshold: 0.1
      });

    return (
        <section ref={ref} className={`pt-[50px] flex flex-col items-center px-[20px] gap-[100px] pb-[150px] transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
            <Title title="Kalendarz" title2="Liturgiczny" subtitle="Na każdy dzień" />
            <article>
                <h4 className='text-[30px] lg:text-[25px] font-medium tracking-[4px] text-center max-w-[1200px] xl:w-[80%] m-auto'>{
                    data?.day?.slice(0, 20) == "Dzień Powszedni" ?
                        data?.date?.split(", ")[1].charAt(0).toUpperCase() + data?.date?.split(", ")[1].slice(1) :
                        data?.day?.charAt(0).toUpperCase() + data?.day?.slice(1)
                }, {data?.time}
                </h4>
            </article>
            <article ref={refTwo} className={`flex flex-col gap-[25px] transition-all duration-1000 ease-in-out ${isVisibleTwo ? 'animation-visible' : 'animation-hidden'}`}>
                <InfoBar year={data?.year?.slice(4, -4)} season={setSeason()} cycle={data?.year?.slice(6)} />

                <div className='flex gap-[25px] h-[80px] sm:flex-col sm:h-auto lg:mx-[20px]'>
                    <div className='flex-1 rounded-[5px] flex-center sm:h-[80px] sm:flex-auto' style={{ backgroundColor: displayColor[data?.color?.split(" ")[0]] }}>
                        <p className={` text-[30px] lg:text-[25px] ${data?.color?.split(" ")[0] == 'biały' ? 'text-[#353535]': 'text-white'}`}>{data?.date?.split(", ")[0]}</p>
                    </div>
                    <div className="relative inline-block rounded-[5px] w-[80px] flex-center sm:w-full" style={{ backgroundColor: displayColor[data?.color?.split(" ")[0]] }}>
                        <button onClick={handleClick} className="p-2 focus:outline-none z-10">
                            <Icon icon="ion:calendar" width="50" height="50" className={`${data?.color?.split(" ")[0] == 'biały' ? 'text-[#353535]': 'text-white'}`} />
                        </button>
                        <input type="date" ref={dateInputRef} onChange={(e) => changeDate(e)} max={getDateToday(14)} className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" />
                    </div>
                </div>

                <CalendarSigla readings={data?.readings} formatTitle={formatTitle}/>
            </article>

            <CalendarTextsSection readings={data?.readings} formatTitle={formatTitle}/>

        </section>
    )
}

export default kalendarzDzien