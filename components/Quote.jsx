import React from 'react'

import quote from '@public/assets/icons/quote.svg'
import Image from 'next/image'

const Quote = ({text, author}) => {
  return (
    <section className='relative w-[50%] pb-[70px] m-auto mt-[70px] xl:w-[70%] md:w-[80%]'>
        <p className='text-[30px] font-medium text-center z-10 relative lg:text-[25px] fold:text-[20px]'>{text}</p>
        <p className='text-[30px] font-semibold text-[#848484] text-right z-10 relative mt-[20px] lg:text-[25px] fold:text-[20px]'>{author}</p>
        <Image src={quote} width={130} height={130} alt="Ikona cudzysłowu" className='absolute top-[-50%] left-[-40px] z-[1] fold:top-[-20%]'/>
    </section>
  )
}

export default Quote