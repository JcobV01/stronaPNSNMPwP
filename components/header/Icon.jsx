import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Icon = ({imgSource, destination}) => {
  return (
    <div className='bg-none'>
        <Link href={destination} target='_blank'>
            <Image 
                src={imgSource}
                width={50}
                height={50}
                alt='ikona socialmedia'
            />
        </Link>
    </div>
  )
}

export default Icon