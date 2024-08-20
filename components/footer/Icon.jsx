import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Icon = ({imgSource, destination}) => {
  return (
    <div className='bg-none border-[2.5px] border-white rounded-full p-[5px]'>
        <Link href={destination} target='_blank'>
            <Image 
                src={imgSource}
                width={35}
                height={35}
                alt='ikona socialmedia'
            />
        </Link>
    </div>
  )
}

export default Icon