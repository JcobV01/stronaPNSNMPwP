'use client'
import React from 'react'

import quote from '@public/assets/icons/quote.svg'
import Image from 'next/image'
import useIntersectionObserver from '@hooks/useObserver';

const Quote = ({text, author}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  return (
    <section ref={ref} className={`relative w-[50%] pb-[70px] m-auto mt-[70px] xl:w-[70%] md:w-[80%] transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
        <p className='text-[30px] font-medium text-center z-10 relative lg:text-[25px] sm:text-[20px]'>{text}</p>
        <p className='text-[30px] font-semibold text-[#848484] text-right z-10 relative mt-[20px] lg:text-[25px] sm:text-[17px]'>{author}</p>
        <Image src={quote} width={130} height={130} alt="Ikona cudzysłowu" className='absolute top-[-50%] left-[-40px] z-[1] fold:top-[-20%] sm:left-[-10px] sm:top-[-40%]'/>
    </section>
  )
}

export default Quote