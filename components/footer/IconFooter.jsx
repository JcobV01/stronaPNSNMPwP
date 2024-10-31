import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const IconFooter = ({imgSource, destination}) => {
  return (
    <div className='bg-none border-[2.5px] border-white rounded-full p-[5px]'>
        <Link href={destination} target='_blank'>
            <Icon icon={imgSource} width="35" height="35" alt='ikona socialmedia' className='text-[#fff]'/>
        </Link>
    </div>
  )
}

export default IconFooter