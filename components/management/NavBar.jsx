"use client"

import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = ({menu}) => {

    const pathname = usePathname()

    return (
        <nav className='flex flex-col w-full'>
            {menu.map((item, index) => (
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