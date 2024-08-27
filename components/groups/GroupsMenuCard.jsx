"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const GroupsMenuCard = ({ icon, name, link, isActive, setActive, rounded }) => {
    const pathname = usePathname()

    const [windowWidth, setWindowWidth] = useState(null); 

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
  
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
  
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);

    return (
        <Link href={link}>
            <div className={`bg-white w-[200px] h-[200px] flex flex-col flex-center gap-[20px] p-[5px] relative ${rounded != "right" && !isActive && windowWidth > 1023 && "menu-card"} xl:w-[150px] xl:h-[150px] lg:gap-0`}
                style={{
                    backgroundColor: isActive && '#5A7889',
                    height: isActive ? (windowWidth < 1023 ? '150px' : (windowWidth > 1279 ? '215px' : '165px')) : '',
                    zIndex: isActive && 100,
                    borderRadius: isActive && ( windowWidth > 1023 ? 7 : 0),
                    borderStartStartRadius: rounded == 'left' && ( windowWidth > 1023 ? 7 : 0),
                    borderEndStartRadius: rounded == 'left' && ( windowWidth > 1023 ? 7 : 0),
                    borderStartEndRadius: rounded == 'right' && ( windowWidth > 1023 ? 7 : 0),
                    borderEndEndRadius: rounded == 'right' && ( windowWidth > 1023 ? 7 : 0),
                }} onClick={setActive(pathname)}>

                <div className='bg-white rounded-full p-[8px]'>
                    <Image src={icon} width="auto" height="auto" alt="Ikona zakładki lso" />
                </div>
                <p className='text-[12px] font-semibold tracking-[2.4px] text-center xl:text-[10px]' style={{ color: isActive && 'white' }}>{name}</p>
            </div>
        </Link>
    )
}

export default GroupsMenuCard