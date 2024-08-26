import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GroupsPatronsCard = ({name, link, wiki}) => {
  return (
    <Link href={wiki} target='_blank'>
        <article className='relative w-[350px] h-[430px] flex justify-center shadow-[0px_4px_10px_0px_rgba(0,0,0,0.7)] rounded-[5px] overflow-hidden xl:w-[250px] xl:h-[330px]'>
            <Image src={link} width={350} height={430} alt={`Zdcięcie ${name}`} className='brightness-50 hover:scale-110 duration-500'/>
            <p className='absolute bottom-[20px] text-[20px] text-white w-[70%] text-center xl:text-[17px]'>{name}</p>
        </article>
    </Link>
  )
}

export default GroupsPatronsCard