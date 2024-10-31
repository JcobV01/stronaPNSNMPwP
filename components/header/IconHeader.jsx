import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const IconHeader = ({imgSource, destination}) => {
  return (
    <div className='bg-none'>
        <Link href={destination} target='_blank'>
            <Icon icon={imgSource} width="50" height="50" alt='Ikona socialmedia' className='text-[#5A7889]'/>
        </Link>
    </div>
  )
}

export default IconHeader