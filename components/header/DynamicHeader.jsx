'use client';

import React from 'react'
import { usePathname } from 'next/navigation'

import Logo from '@components/Logo'
import IconHeader from '@components/header/IconHeader'
import Navbar from '@components/header/Navbar';

import mainImage from '@public/assets/images/header-images/main-image.webp';
import cemetery from '@public/assets/images/header-images/cemetery.webp';
import priests from '@public/assets/images/header-images/priests.webp';
import gallery from '@public/assets/images/header-images/gallery.webp';
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

    const groupsPathPrefix = "/grupy-parafialne";
    const headerImage = pathname.startsWith(groupsPathPrefix) ? groups : headerImages[pathname] || groups;

    return (
        <>
            {pathname === "/" ?
                <>
                    <Navbar />
                    <header className="w-full h-dvh bg-cover mt-[-70px]" style={{ backgroundImage: `url(${mainImage.src})` }}>
                        <div className="w-full h-full bg-[rgba(0,0,0,0.30)] flex-center">
                            <section id="homepage" className='w-[960px] h-full flex items-center flex-col backdrop-blur-[5px] bg-[rgba(0,0,0,0.30)]'>
                                <div className='pt-[100px] flex-center md:pt-[150px] sm:pt-[100px]'>
                                    <Logo width={150} height={150} padding={false} backgroundOpacity={false} apectRatio="aspect-[150/150]" mobileWidth="w-[75px]" />
                                </div>
                                <div className='flex-center flex-col text-center'>
                                    <p className='text-[20px] text-[#B0B0B0] mt-[30px] sm:text-[18px] fold:mt-[10px]'>Rzymskokatolicka</p>
                                    <h1 className='text-white text-[80px] font-bold tracking-[4px] leading-[80px] mt-[40px] md:text-[40px] md:leading-[40px] sm:text-[30px] fold:text-[25px] fold:mt-[10px]'>PARAFIA PRZYBYSŁAWICE</h1>
                                    <p className='text-white text-[25px] w-[550px] mt-[40px] md:text-[20px] md:mt-[20px] sm:w-[95%] sm:text-[15px] fold:text-[15px] fold:mt-[10px]'>Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów</p>
                                    <div className='flex-center gap-[30px] mt-[40px] md:pb-[10px] fold:mt-[10px]'>
                                        <IconHeader imgSource='ph:youtube-logo-fill' destination="https://www.youtube.com/channel/UC-YVjtMoqxUwkuZKdJvoZUw" desc="Youtube" />
                                        <IconHeader imgSource='ic:baseline-facebook' destination="https://www.facebook.com/parafiaprzybyslawice" desc="Facebook" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </header>
                </>
                : pathname.startsWith("/management") ?
                    <></>
                    :
                    <>
                        <Navbar />
                        <header className="w-full h-[405px] bg-cover bg-center mt-[-76px]" style={{ backgroundImage: `url(${headerImage.src})` }}>
                            <div className="w-full h-full bg-[#00000090]"></div>
                        </header>
                    </>
            }
        </>
    )
}

export default DynamicHeader