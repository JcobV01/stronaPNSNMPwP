'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@components/Logo'
import Navbar from '@components/footer/Navbar'
import IconFooter from '@components/footer/IconFooter'
import DownloadFile from '@components/DownloadFile'


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
          <div className='flex justify-between w-full lg:flex-col lg:gap-[10px]'>
            <p className='text-[#898989] text-[10px] tracking-[2.6px]'>{`©${year} Parafia pw. Niepokalanego Serca Najświętszej Maryi Panny`}</p>
            <p className='text-[#898989] text-[10px] tracking-[2.6px]'>Made by Artur Plebańczyk & Jakub Wadycki</p>
          </div>
        </footer>
      }
    </>

  )
}

export default Footer