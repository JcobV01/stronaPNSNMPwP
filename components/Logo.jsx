import Image from 'next/image'
import React from 'react'

import logo from '@public/assets/icons/logo.svg'

const Logo = ({width, height}) => {
  return (
    <div className='bg-white rounded-[15px] opacity-[0.8] p-[10px]'>
        <Image 
            src={logo}
            width={width}
            height={height}
            alt='Logo parafii'
        />
    </div>
  )
}

export default Logo