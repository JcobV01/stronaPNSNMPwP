'use client'

import PostsCount from '@components/management/posts/PostsCount'
import PostsDisplay from '@components/management/posts/PostsDisplay'
import Link from 'next/link'
import React from 'react'

const komunikaty = () => {
  return (
    <section className='mt-[20px]'>
      <div className='flex items-center gap-20'>
        <Link href="/management/panel/komunikaty/nowy" className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light'>Dodaj nowy</Link>
        <p className='text-[20px] font-light'>Liczba postów: <PostsCount/></p>
      </div>
      <article className='mt-[100px]'>
        <div className='flex justify-between px-[50px]'>
          <p className='w-[550px]'>Tytuł</p>
          <p className='w-[150px]'>Autor</p>
          <p className='w-[100px]'>Kategorie</p>
          <p className='w-[150px]'>Data</p>
          <div className='w-[30px]'></div>
        </div>
        <PostsDisplay />
      </article>
    </section>
  )
}

export default komunikaty