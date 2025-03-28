"use client"

import { Icon } from '@iconify/react'
import { useSession } from '@node_modules/next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = ({menu}) => {
    const {data: session} = useSession();
    const pathname = usePathname()

    const filteredMenu = !session?.user?.role || session?.user?.role !== "admin" ? menu.filter(item => item.link === '/management/panel' || item.link === "/management/panel/galeria") : menu

    console.log({filteredMenu})

    return (
        <nav className='flex flex-col w-full'>
            {filteredMenu.map((item, index) => (
                <Link href={item.link} key={index}>
                    <div className='flex items-center gap-[25px] h-[45px] hover:bg-[#212B33] w-full' style={{backgroundColor: pathname === item.link && "#212B33"}}>
                        <div className='pl-[45px]'>
                            <Icon icon={item.icon} width="30" height="30" className='text-white'/>  
                        </div>
                        <p className='flex text-[20px] text-white font-light'>{item.name}</p>
                    </div>
                </Link>
            ))}
        </nav>
    )
}

export default NavBar