"use client"

import InfoBar from '@components/home/kalendarz/components/InfoBar'
import Title from '@components/Title'
import { Icon } from '@iconify/react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const kalendarzDzien = () => {
    const [data, setData] = useState({})

    const { date } = useParams()

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
        <section className='pt-[50px] flex flex-col items-center px-[20px] gap-[100px]'>
            <Title title="Kalendarz" title2="Liturgiczny" subtitle="Na każdy dzień" />
            <article>
                <h4 className='text-[40px] font-medium tracking-[4px] text-center'>{
                    data?.day?.slice(0, 20) == "Dzień Powszedni" ?
                        data?.date?.split(", ")[1].charAt(0).toUpperCase() + data?.date?.split(", ")[1].slice(1) :
                        data?.day?.charAt(0).toUpperCase() + data?.day?.split(", ")[1].slice(1)
                }, {data?.time}
                </h4>
            </article>
            <article className='flex flex-col gap-[25px]'>
                <InfoBar year={data?.year?.slice(4, -4)} season={setSeason()} cycle={data?.year?.slice(6)} />
                <div className='flex gap-[25px]'>
                    <div className='flex-1'></div>
                    <div className="relative w-64">
                        <input
                            type="date"
                            className="w-full p-3 pr-10 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 appearance-none"
                        />
                        <Icon
                            icon="ion:calendar"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                            width="24"
                            height="24"
                        />
                    </div>
                </div>
            </article>

        </section>
    )
}

export default kalendarzDzien