import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const IconFooter = ({imgSource, destination, desc}) => {
  return (
    <div className='bg-none border-[2.5px] border-white rounded-full p-[5px]'>
        <Link href={destination} target='_blank' title={`Przejdź do ${desc}`} aria-label={desc} >
            <Icon icon={imgSource} width="35" height="35" alt='Ikona socialmedia' className='text-[#fff]'/>
        </Link>
    </div>
  )
}

export default IconFooter