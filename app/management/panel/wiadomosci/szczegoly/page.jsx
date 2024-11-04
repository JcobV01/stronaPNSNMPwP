'use client'

import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'

const page = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    objective: '',
    message: '',
  });

  const searchParams = useSearchParams();
  const messageId = searchParams.get('id');

  useEffect(() => {
    const getMessageDetails = async () => {
      const response = await fetch(`/api/contact/${messageId}`)
      const data = await response.json();
      const dateObj = new Date(data.Date); 

      setMessage({
        name: data.Name,
        email: data.Email,
        date: dateObj.toLocaleDateString('pl-PL', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        time: dateObj.toLocaleTimeString('pl-PL', {
          hour: 'numeric',
          minute: 'numeric',
        }),
        objective: data.Objective,
        message: data.Message,
      })

    }

    if (messageId) getMessageDetails();
  }, [messageId])

  return (
    <Suspense fallback="Ładowanie...">
      <section className='mt-[10px] w-full'>
        <article>
          <div className='flex items-center justify-between'>
            <h2 className='text-[25px] font-light'>Wiadomość od <span className='font-semibold text-[#5A7889]'>{message.name}</span></h2>
            <p className='text-[18px] font-semibold'>Wysłano {message.date}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-[18px] font-light mt-[15px]'>Z emailu <span className='font-semibold text-[#5A7889]'>{message.email}</span></p>
            <p className='text-[18px] font-semibold'>O godzinie {message.time}</p>
          </div>
          <p className='text-[18px] font-light'>Do <span className='font-semibold text-[#5A7889]'>{message.objective}</span></p>
          <hr className='w-full mt-[15px] border-[#5A7889]' />
          <p className='mt-[15px] text-[18px] font-light'>Treść</p>
          <p className='mt-[10px] h-[625px] overflow-y-auto pr-[20px]'>{message.message}</p>
        </article>
      </section>
    </Suspense>
  )
}

export default page