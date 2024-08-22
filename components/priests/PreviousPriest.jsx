import Image from 'next/image'
import React from 'react'

const PreviousPriest = ({image, name, dates}) => {
  return (
    <article>
        <Image
            src={image}
            width={250}
            height={250}
            alt={`Zdjęcie ${name}`}
        />
        <div className='bg-white rounded-b-[5px] py-[17px]'>
            <h5 className='text-[17px] text-center font-semibold tracking-[2px] mb-[10px]'>{name}</h5>
            <p className='text-[13px] font-light tracking-[1.5px] text-center'>Od {dates[0]}</p>
            <p className='text-[13px] font-light tracking-[1.5px] text-center'>Do {dates[1]}</p>
        </div>
    </article>
  )
}

export default PreviousPriest