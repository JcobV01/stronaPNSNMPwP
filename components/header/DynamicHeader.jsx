'use client';

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import Logo from '@components/Logo'
import Icon from '@components/header/Icon'
import Navbar from '@components/header/Navbar';

import fbIcon from '@public/assets/icons/facebook.svg'
import ytIcon from '@public/assets/icons/youtube.svg'

import mainImage from '@public/assets/images/header-images/main-image.webp';
import cemetery from '@public/assets/images/header-images/cemetery.webp';
import priests from '@public/assets/images/header-images/priests.webp';
import gallery from '@public/assets/images/header-images/main-image.webp';
import groups from '@public/assets/images/header-images/groups.webp';
import history from '@public/assets/images/header-images/history.webp';
import liturgicalCalendar from '@public/assets/images/header-images/liturgical-calendar.webp';
import messages from '@public/assets/images/header-images/messages.webp';
import events from '@public/assets/images/header-images/events.webp';
import announcements from '@public/assets/images/header-images/announcements.webp';
import nationals from '@public/assets/images/header-images/nationals.webp';
import sacraments from '@public/assets/images/header-images/sacraments.webp';

const DynamicHeader = () => {
    const pathname = usePathname();
    const [size, setSize] = useState({ width: 150, height: 150 });

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 345px)").matches) {
                setSize({ width: 75, height: 75 });
            } else {
                setSize({ width: 150, height: 150 });
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const headerImages = {
        "/cmentarz": cemetery,
        "/duszpasterze": priests,
        "/galeria": gallery,
        "/grupy-parafialne": groups,
        "/historia": history,
        "/kalendarz": liturgicalCalendar,
        "/komunikaty": messages,
        "/nabozenstwa": events,
        "/ogloszenia": announcements,
        "/rodacy": nationals,
        "/sakramenty": sacraments,
    }

    const headerImage = headerImages[pathname];

    return (
        <>
            {pathname === "/" ?
                <header className="w-full h-screen bg-cover" style={{ backgroundImage: `url(${mainImage.src})` }}>
                    <div className="w-full h-full bg-[rgba(0,0,0,0.30)] flex-center">
                        <section id="homepage" className='w-[960px] h-full flex items-center flex-col backdrop-blur-[5px] bg-[rgba(0,0,0,0.30)] sm:justify-between'>
                            <div className='pt-[40px] flex-center sm:pt-[20px]'>
                                <Logo width={size.width} height={size.height} padding={false} backgroundOpacity={false} />
                            </div>
                            <div className='flex-center flex-col text-center'>
                                <p className='text-[20px] text-[#B0B0B0] mt-[40px] sm:mt-[20px] sm:text-[18px] fold:mt-[10px]'>Rzymskokatolicka</p>
                                <h1 className='text-white text-[80px] font-bold tracking-[4px] leading-[80px] mt-[40px] md:text-[40px] md:leading-[40px] sm:mt-[20px] sm:text-[30px] fold:text-[25px] fold:mt-[10px]'>PARAFIA PRZYBYSŁAWICE</h1>
                                <p className='text-white text-[25px] w-[550px] mt-[70px] md:text-[20px] md:mt-[20px] sm:w-[95%] sm:text-[18px] fold:text-[15px] fold:mt-[10px]'>Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów</p>
                                <div className='flex-center gap-[30px] mt-[55px] sm:mt-[20px] fold:mt-[10px]'>
                                    <Icon imgSource={ytIcon} destination="https://www.youtube.com/channel/UC-YVjtMoqxUwkuZKdJvoZUw" />
                                    <Icon imgSource={fbIcon} destination="https://www.facebook.com/parafiaprzybyslawice" />
                                </div>
                            </div>
                            <div className='mt-auto mb-[30px] md:text-center sm:mt-[20px]'>
                                <Navbar />
                            </div>
                        </section>
                    </div>
                </header>
                :
                <header className="w-full h-[405px] bg-cover bg-center" style={{ backgroundImage: `url(${headerImage.src})` }}>
                    <div className="w-full h-full bg-[#00000090]">
                        <div className='flex-center pt-[40px]'>
                            <Navbar />
                        </div>
                    </div>
                </header>
            }
        </>
    )
}

export default DynamicHeader