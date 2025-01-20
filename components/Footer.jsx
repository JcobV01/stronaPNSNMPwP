'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@components/Logo'
import Navbar from '@components/footer/Navbar'
import IconFooter from '@components/footer/IconFooter'
import DownloadFile from '@components/DownloadFile'
import Link from 'next/link'
import Image from 'next/image'
import logoAirtilion from '@public/assets/images/airtilionFooter.svg'

const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/management") ?
        <>
        </>
        :
        <footer className='bg-[#11161A] flex flex-col items-center gap-[46px] p-6'>
          <Logo width="100" height="100" padding={true} backgroundOpacity={true} apectRatio="aspect-square"/>
          <Navbar />
          <div className='flex gap-[36px]'>
            <IconFooter imgSource='ph:youtube-logo-fill' destination="https://www.youtube.com/channel/UC-YVjtMoqxUwkuZKdJvoZUw" desc='Youtube'/>
            <IconFooter imgSource='ic:baseline-facebook' destination="https://www.facebook.com/parafiaprzybyslawice" desc='Facebook'/>
          </div>
          <DownloadFile location='/assets/downloadFiles/STANDARDY-OCHRONY-DZIECI.pdf' text='Standardy Ochrony Dzieci' />
          <p className='text-[13px] tracking-[3px] text-white text-center w-[50%] 2xl:w-[60%] lg:w-[80%] lg:text-[11px]'>Informujemy, że wszystkie dane osobowe zamieszczone na stronie internetowej parafii są umieszczone wyłącznie za zgodą osób zainteresowanych.</p>
          <div className='flex items-center justify-between w-full lg:flex-col lg:gap-[10px]'>
            <p className='text-[#898989] text-[10px] tracking-[2.6px] sm:text-center'>{`©${year} Parafia pw. Niepokalanego Serca Najświętszej Maryi Panny`}</p>
            <Link href="https://airtilion.com" title="Przejdź na stronę Airtilion" className='text-[#9d9d9d] text-[12px] font-light flex items-center gap-[10px] duration-700 mt-[12px] hover:scale-110 sm:flex-col'>Projekt i wykonanie
              <Image src={logoAirtilion} alt="Logo Airtilion" width="138" height="15"/>
            </Link>
          </div>
        </footer>
      }
    </>

  )
}

export default Footer