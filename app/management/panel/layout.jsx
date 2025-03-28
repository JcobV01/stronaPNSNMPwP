import Logo from '@components/Logo'
import React from 'react'

import TopBar from '@components/management/TopBar'
import NavBar from '@components/management/NavBar'


const menu = [
    {
        icon: 'fa6-solid:house',
        name: "Strona główna",
        link: "/management/panel"
    },
    {
        icon: 'ion:stats-chart',
        name: "Statystyki",
        link: "/management/panel/statystyki"
    },
    {
        icon: 'basil:document-solid',
        name: "Ogłoszenia",
        link: "/management/panel/ogloszenia"
    },
    {
        icon: 'ri:table-fill',
        name: "Intencje",
        link: "/management/panel/intencje"
    },
    {
        icon: 'tabler:bell-filled',
        name: "Komunikaty",
        link: "/management/panel/komunikaty"
    },
    {
        icon: 'iconamoon:clock-fill',
        name: "Historia",
        link: "/management/panel/historia"
    },
    {
        icon: 'solar:gallery-bold',
        name: "Galeria",
        link: "/management/panel/galeria"
    },
    {
        icon: 'solar:letter-bold',
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
            
            <article className='px-[80px] flex-1 items-center pt-[20px] flex flex-col'>
                <TopBar/>
                {children}
            </article>

        </section>
    )
}

export default layout