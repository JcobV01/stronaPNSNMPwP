import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='mt-[20px]'>
      <div className='flex items-center gap-20'>
        <Link href="/management/panel/historia/nowy" className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light'>Dodaj nowy</Link>
      </div>
      <article className='mt-[50px]'>
        <div className='flex justify-between px-[50px]'>
          <p className='w-[600px]'>Tytuł</p>
          <p className='w-[150px]'>Data</p>
          <p className='w-[150px]'>Autor</p>
          <div className='w-[30px]'></div>
        </div>
        {/* <PostsDisplay /> */}
      </article>
    </section>
  )
}

export default page