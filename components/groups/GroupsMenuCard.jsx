"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const GroupsMenuCard = ({icon, name, link, isActive, setActive}) => {
    const pathname = usePathname()

    return (
        <Link href={link}>
            <div className={`bg-white w-[200px] h-[200px] flex flex-col flex-center gap-[20px]`} style={{backgroundColor: isActive && '#5A7889', height: isActive && '215px', borderRadius: isActive && 7}} onClick={setActive(pathname)}>
                <div className='bg-white rounded-full p-[8px]'>
                    <Image src={icon} width="auto" height="auto" alt="Ikona zakładki lso" />
                </div>
                <p className='text-[12px] font-semibold tracking-[2.4px] text-center' style={{color: isActive && 'white'}}>{name}</p>
            </div>
        </Link>
    )
}

export default GroupsMenuCard