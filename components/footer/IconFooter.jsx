import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const IconFooter = ({ imgSource, destination, desc }) => {
  return (
    <Link href={destination} target='_blank' rel="noopener noreferrer" title={`Przejdź do ${desc}`} aria-label={desc} className='bg-none border-[2.5px] border-white rounded-full p-[5px] duration-700 hover:border-[#5A7889] hover:scale-90'>
      <Icon icon={imgSource} width="35" height="35" alt={`Ikona ${desc}`} className='text-[#fff] duration-700 hover:text-[#5A7889]' />
    </Link>
  )
}

export default IconFooter