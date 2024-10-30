import Logo from '@components/Logo'
import React from 'react'
import { headers } from 'next/headers'

import statsImg from '@public/assets/icons/mamagement/chart.png'
import docksImg from '@public/assets/icons/mamagement/document.png'
import alarmImg from '@public/assets/icons/mamagement/alarm.png'
import sandImg from '@public/assets/icons/mamagement/sand.png'
import imageImg from '@public/assets/icons/mamagement/image.png'
import letterImg from '@public/assets/icons/mamagement/letter.png'

import Link from 'next/link'
import Image from 'next/image'
import UserBar from '@components/management/UserBar'
import TopBar from '@components/management/TopBar'
import NavBar from '@components/management/NavBar'



const menu = [
    {
        icon: statsImg,
        name: "Statystyki",
        link: "/management/panel"
    },
    {
        icon: docksImg,
        name: "Ogłoszenia",
        link: "/management/panel/ogloszenia"
    },
    {
        icon: docksImg,
        name: "Intencje",
        link: "/management/panel/intencje"
    },
    {
        icon: alarmImg,
        name: "Komunikaty",
        link: "/management/panel/komunikaty"
    },
    {
        icon: sandImg,
        name: "Historia",
        link: "/management/panel/historia"
    },
    {
        icon: imageImg,
        name: "Galeria",
        link: "/management/panel/galeria"
    },
    {
        icon: letterImg,
        name: "Wiadomości",
        link: "/management/panel/wiadomosci"
    },
]


const layout = ({ children }) => {
    return (
        <section className='h-dvh flex p-[20px]'>  
            <aside className='bg-[#11161A] h-full w-[330px] rounded-[10px] py-[45px] flex flex-col gap-[100px] items-start'>
                <article className='pl-[45px] flex flex-col gap-[20px] items-start'>
                    <Logo width={68} height={68} padding={10} />
                    <h1 className='text-white text-[20px]'>Panel <br /> Administracyjny</h1>
                </article>

                <NavBar menu={menu}/>
            </aside>
            
            <article className='px-[90px] flex-1 items-center pt-[20px]'>
                <TopBar/>
                {children}
            </article>

        </section>
    )
}

export default layout