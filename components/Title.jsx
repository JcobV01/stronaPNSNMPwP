import React from 'react'

const Title = ({title, title2, subtitle}) => {
  return (
    <div className='flex flex-col gap-[5px]'>
        <h2 className='text-[#353535] text-[40px] tracking-[10px] font-[500] text-center 2xl:text-[35px] lg:text-[30px] sm:text-[23px]'>
          <span className='text-[#5A7889]'>{`${title[0]}`}</span>
          {`${title.slice(1)} `}

          <span className='text-[#5A7889]'>{`${title2.length > 0 ? title2[0] : ''}`}</span>
          {`${title2.length > 0 ? title2.slice(1) : ''}`}
        </h2>

        <div className='h-[2px] w-[100px] bg-[#5A7889] m-auto'></div>
        <h3 className='text-[#B0B0B0] text-[15px] text-center 2xl:text-[13px] lg:text-[12px] sm:text-[11px]'>{subtitle}</h3>
    </div>
  )
}

export default Title