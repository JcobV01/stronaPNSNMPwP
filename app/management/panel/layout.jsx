import Logo from '@components/Logo'
import React from 'react'

import statsImg from '@public/assets/icons/mamagement/chart.png'
import docksImg from '@public/assets/icons/mamagement/document.png'
import alarmImg from '@public/assets/icons/mamagement/alarm.png'
import sandImg from '@public/assets/icons/mamagement/sand.png'
import imageImg from '@public/assets/icons/mamagement/image.png'
import letterImg from '@public/assets/icons/mamagement/letter.png'
import Link from 'next/link'
import Image from 'next/image'



const menu = [
    {
        icon: statsImg,
        name: "Statystyki",
        link: "#"
    },
    {
        icon: docksImg,
        name: "Ogłoszenia",
        link: "#"
    },
    {
        icon: alarmImg,
        name: "Komunikaty",
        link: "#"
    },
    {
        icon: sandImg,
        name: "Historia",
        link: "#"
    },
    {
        icon: imageImg,
        name: "Galeria",
        link: "#"
    },
    {
        icon: letterImg,
        name: "Wiadomości",
        link: "#"
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

                <nav className='flex flex-col w-full'>
                    {menu.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <div className='flex items-center gap-[25px] h-[45px] hover:bg-[#212B33] w-full'>
                                <div className='pl-[45px]'>
                                    <Image src={item.icon} width="30" height="30" alt={`Ikona ${item.name}`}/>
                                </div>
                                <p className='flex text-[20px] text-white font-light'>{item.name}</p>
                            </div>
                        </Link>
                    ))}
                </nav>
            </aside>
            {children}
        </section>
    )
}

export default layout