import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const IconHeader = ({imgSource, destination, desc}) => {
  return (
    <div className='bg-none'>
        <Link href={destination} target='_blank' rel="noopener noreferrer" aria-label={desc} title={`Przejdź do ${desc}`} className='inline-flex duration-700 hover:scale-95'>
            <Icon icon={imgSource} width="50" height="50" alt={`Ikona ${desc}`} className='text-[#ECECEC] sm:w-[40px] sm:h-[40px] duration-700 hover:text-[#5A7889] hover:scale-95'/>
        </Link>
    </div>
  )
}

export default IconHeader