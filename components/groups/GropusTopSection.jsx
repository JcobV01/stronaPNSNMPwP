'use client'

import Title from '@components/Title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GroupsPatronsCard from './GroupsPatronsCard'
import useIntersectionObserver from '@hooks/useObserver'

const GropusTopSection = ({ logo, name, name2, info, link, patrons }) => {
    const [refGroups, isVisibleGroups] = useIntersectionObserver({
        threshold: 0
    });
    return (
        <section ref={refGroups} className={`w-[1200px] m-auto mb-[50px] xl:w-[90%] transition-all duration-1000 ease-in-out ${isVisibleGroups ? 'animation-visible' : 'animation-hidden'}`}>
            <Title title="Grupy" title2="Parafialne" subtitle="Opis grup" />
            <h4 className='text-[30px] font-medium tracking-[3px] text-center my-[50px] xl:text-[25px] lg:text-[20px]'>Informacje ogólne</h4>

            <article className='flex gap-[100px] lg:flex-col lg:gap-[50px]'>
                <div className='flex flex-col gap-[20px] items-center'>
                    <div className='w-[340px] h-[340px] flex flex-center bg-white rounded-[5px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] xl:w-[290px] xl:h-[290px] xl:p-[20px] fold:w-[240px] fold:h-[240px]'>
                        <Image src={logo.src} width={300} height={300} className='xl:w-auto xl:h-auto' />
                    </div>
                    <p className='text-[12px] tracking-[2.4px] font-semibold'>Logo {name2}</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    {info.map((paragraph, index) => (
                        <p key={index} className='text-[17px] xl:text-[15px]'>{paragraph}</p>
                    ))}
                    {link.length > 0 &&
                        <p className='font-medium'>
                            {link[0]}
                            <Link href={link[1]} className='text-[#5A7889]' target="_blank">{link[1]}</Link>
                        </p>
                    }
                </div>
            </article>
            <article>
                {patrons.length > 0 &&
                    <>
                        <h4 className='text-[30px] font-medium tracking-[3px] text-center my-[50px] xl:text-[25px] lg:text-[20px]'>Patroni {name2}</h4>
                        <div className='flex gap-[70px] justify-center lg:flex-wrap'>
                            {patrons.map((patron, index) => (
                                <GroupsPatronsCard name={patron.name} link={patron.image} wiki={patron.wiki} key={index} />
                            ))}
                        </div>
                    </>
                }
            </article>
        </section>
    )
}

export default GropusTopSection