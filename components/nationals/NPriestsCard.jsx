import Image from 'next/image'
import React from 'react'

const NPriestsCard = ({image, name, desc, alive, dimensions}) => {
  return (
    <article className='flex md:flex-col shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[5px]'>
        <div className='flex flex-center w-[200px] h-[200px]'>
            <Image 
            src={image}
            width={dimensions}
            height={dimensions}
            alt={`Zdjęcie ${name}`}
            className='brightness-[0.8]'
            />
        </div>
        <div className='bg-white px-[50px] py-[30px] w-[400px] flex flex-col gap-[17px] md:w-[200px] rounded-r-[5px] flex-1 md:px-[20px]'>
          <h5 className='text-[20px] font-bold tracking-[3px] md:text-[17px]'>{!alive && 'ŚP. '}KSIĄDZ <br />{name}</h5>
          <p className='text-[14px] font-light tracking-[1.7px] md:text-[11px]'>{desc}</p>
        </div>
      </article>
  )
}

export default NPriestsCard