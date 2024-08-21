import Image from 'next/image'
import React from 'react'

import logo from '@public/assets/icons/logo.svg'
import Link from 'next/link'

const Logo = ({width, height, padding, backgroundOpacity}) => {
  return (
    <Link href="/#homepage">
      <div className='bg-white rounded-[15px]' style={{padding: padding ? 10 : 20, background: backgroundOpacity ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.60)'}}>
          <Image 
              src={logo}
              width={width}
              height={height}
              alt='Logo parafii'
          />
      </div>
    </Link>
  )
}

export default Logo