import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GroupsCard = ({icon, name, desc, link}) => {
  return (
    <div className='bg-[#D9D9D925] w-[500px] h-[250px] flex gap-[20px] px-[30px] pt-[25px] pb-[20px] rounded-[5px]'>
        <div className='w-[56px] h-[56px] rounded-full bg-white flex flex-center'>
            <Image src={icon} width={40} height={40} alt={`Ikona ${name}`}/>
        </div>

        <div className='relative flex flex-1 flex-col gap-[10px]'>
            <h4 className='text-white text-[18px] font-semibold tracking-[3.6px]'>{name}</h4>
            <p className='text-[#D4D4D4] text-[12px] font-light tracking-[2.4px]'>{desc}</p>
            <Link href={link} className='absolute bottom-0 right-0'>
                <p className='text-white text-[12px] font-normal tracking-[2.4px]'>Czytaj więcej</p>
            </Link>
        </div>
    </div>
  )
}

export default GroupsCard