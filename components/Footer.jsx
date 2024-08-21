import React from 'react'
import Logo from './logo'
import Navbar from './Navbar'
import Icon from './footer/Icon'

import fbIcon from '@public/assets/icons/facebook-w.svg'
import ytIcon from '@public/assets/icons/youtube-w.svg'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='bg-[#11161A] flex flex-col items-center gap-[46px] p-6'>
        <Logo width="100" height="100"/>
        <Navbar bold={true} uppercase={true}/>
        <div className='flex gap-[36px]'>
            <Icon imgSource={fbIcon} destination="https://www.facebook.com/parafiaprzybyslawice"/>
            <Icon imgSource={ytIcon} destination="https://www.youtube.com/channel/UC-YVjtMoqxUwkuZKdJvoZUw"/>
        </div>
        <p className='text-[13px] tracking-[3px] text-white text-center w-[50%] 2xl:w-[60%] lg:w-[80%] lg:text-[11px]'>Informujemy, że wszystkie dane osobowe zamieszczone na stronie internetowej parafii są umieszczone wyłącznie za zgodą osób zainteresowanych.</p>
        <div className='flex justify-between w-full lg:flex-col lg:gap-[10px]'>
            <p className='text-[#898989] text-[10px] tracking-[2.6px]'>{`©${year} Parafia pw. Niepokalanego Serca Najświętszej Maryi Panny`}</p>
            <p className='text-[#898989] text-[10px] tracking-[2.6px]'>Made by Artur Plebańczyk & Jakub Wadycki</p>
        </div>
    </footer>
  )
}

export default Footer