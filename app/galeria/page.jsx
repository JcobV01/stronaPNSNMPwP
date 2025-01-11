"use client"

import Title from '@components/Title'
import React from 'react'
import { Icon } from "@iconify/react"
import AllAlbums from '@components/gallery/AllAlbums'

const galeria = () => {
  return (
    <div className='flex-center flex-col relative'>
      {/* <div className='h-[60px] w-[815px] flex-center absolute top-[-30px] xl:w-[700px] lg:w-[70%] md:w-[90%]'>
        <input type="search" placeholder='Wyszukaj wydarzenie' className='h-full w-full rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] outline-none pl-[40px] pr-[70px]' />
        <Icon icon="basil:search-outline" width="40" height="40" className="text-[#5A7889] z-10 absolute right-0 mr-[20px]" />
      </div> */}
      <section className='py-[100px] min-h-[900px]'>
        <Title title="Galeria" title2="" subtitle="Zdjęcia z wydarzeń" />
        <AllAlbums />
      </section>
    </div>
  )
}

export default galeria