"use client"

import NewAlbumDialog from '@components/management/galeria/newAlbumDialog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const page = () => {

  return (
    <section className='w-full flex-1 pt-8'>
      <div className='w-full flex justify-between'>
        <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light w-[300px]'>Dodaj album</button>
        <select className='w-[200px] px-[10px] rounded-[5px]'>
          <option value="">Wybierz rok</option>
          
        </select>
        <input type="search" placeholder='Wyszukaj album' className='w-[600px] px-[10px] rounded-[5px]' />
      </div>
      <div className='flex flex-col gap-3 w-full mt-8 h-[600px] px-[10px] overflow-y-auto'>
        
      </div>
    </section>
  )
}

export default page