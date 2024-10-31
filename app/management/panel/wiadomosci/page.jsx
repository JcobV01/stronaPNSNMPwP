import React from 'react'
import MessagesDisplay from '@components/management/wiadomosci/MessagesDisplay'

const page = () => {
  return (
    <section className='mt-[20px] w-full'>
      <article className='mt-[50px]'>
        <div className='flex justify-between px-[50px]'>
          <p className='w-[350px]'>Wiadomość</p>
          <p className='w-[150px]'>Autor</p>
          <p className='w-[150px]'>E-mail</p>
          <p className='w-[150px]'>Data</p>
          <p className='w-[125px]'>Cel</p>
          <div className='w-[30px]'></div>
          <div className='w-[30px]'></div>
        </div>
        <MessagesDisplay />
      </article>
    </section>
  )
}

export default page