"use client"

import InfoBar from '@components/home/kalendarz/components/InfoBar'
import Title from '@components/Title'
import { Icon } from '@iconify/react'
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

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
                console.log(html.data)
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

    const displayColor = {
        "zielony": '#3C9530',
        "czerwony": '#e01111',
        "fioletowy": '#860ac9',
        "różowy": "#ff3dfb",
        "biały": "#ffffff"
    }

    const dateInputRef = useRef(null);

    const handleClick = () => {
        dateInputRef.current?.showPicker();
    };

    function formatTitle(title) {
        const words = title.replace(".", "").split(" ");

        if (words[1] === "czytanie") {
            return `${words[0]} ${words[1]}: `;
        }

        return `${words[0]}: `;
    }

    return (
        <section className='pt-[50px] flex flex-col items-center px-[20px] gap-[100px]'>
            <Title title="Kalendarz" title2="Liturgiczny" subtitle="Na każdy dzień" />
            <article>
                <h4 className='text-[30px] font-medium tracking-[4px] text-center max-w-[1200px]'>{
                    data?.day?.slice(0, 20) == "Dzień Powszedni" ?
                        data?.date?.split(", ")[1].charAt(0).toUpperCase() + data?.date?.split(", ")[1].slice(1) :
                        data?.day?.charAt(0).toUpperCase() + data?.day?.slice(1)
                }, {data?.time}
                </h4>
            </article>
            <article className='flex flex-col gap-[25px]'>
                <InfoBar year={data?.year?.slice(4, -4)} season={setSeason()} cycle={data?.year?.slice(6)} />

                <div className='flex gap-[25px] h-[80px]'>
                    <div className='flex-1 rounded-[5px] flex-center' style={{ backgroundColor: displayColor[data?.color?.split(" ")[0]] }}>
                        <p className={` text-[30px] ${data?.color?.split(" ")[0] == 'biały' ? 'text-[#353535]': 'text-white'}`}>{data?.date?.split(", ")[0]}</p>
                    </div>
                    <div className="relative inline-block rounded-[5px] w-[80px] flex-center" style={{ backgroundColor: displayColor[data?.color?.split(" ")[0]] }}>
                        <button onClick={handleClick} className="p-2 focus:outline-none z-10">
                            <Icon icon="ion:calendar" width="50" height="50" className={`${data?.color?.split(" ")[0] == 'biały' ? 'text-[#353535]': 'text-white'}`} />
                        </button>
                        <input type="date" ref={dateInputRef} className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" />
                    </div>
                </div>

                <div className='min-h-[80px] p-[15px] rounded-[5px] bg-[#5A7889] flex'>
                    <div className='flex-1'>
                        {data?.readings?.slice(0, data?.readings?.length / 2).map((item, index) => (
                            <p className='text-white' key={index}>
                                <span className='font-semibold text-white'>{formatTitle(item?.title)}</span>
                                {item?.title.slice(item?.title.indexOf("(") + 1, item?.title.length - 1)}
                            </p>
                        ))}
                    </div>
                    <div className='flex-1'>
                        {data?.readings?.slice(data?.readings?.length / 2).map((item, index) => (
                            <p className='text-white' key={index}>
                                <span className='font-semibold text-white'>{formatTitle(item?.title)}</span>
                                {item?.title.slice(item?.title.indexOf("(") + 1, item?.title.length - 1)}
                            </p>
                        ))}
                    </div>
                </div>
            </article>

            <article>
                {
                    data?.readings?.map((text, index) => (
                        <div key={index} >
                            <h4>{text?.title}</h4>
                            <h5>{text?.subtitle}</h5>
                            {
                                text?.content?.map((paragraph, indexInside) => (
                                    <p key={indexInside}>{paragraph}</p>
                                ))
                            }
                        </div>
                    ))
                }
            </article>

        </section>
    )
}

export default kalendarzDzien