import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='mt-[20px]'>
      <div className='flex items-center gap-20'>
        <Link href="/management/panel/komunikaty/nowy" className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light'>Dodaj nowy</Link>
        <p className='text-[20px] font-light'>Liczba postów:<span></span></p>
      </div>
    </section>
  )
}

export default page