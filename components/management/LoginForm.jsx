'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Logo from '@components/Logo'


const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        name,
        password,
        redirect: false
      });

      if (res.error) {
        setError("Niepoprawne dane");
        return;
      }

      router.replace('/management/panel');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className='flex-center flex-col h-screen fold:h-full sm:pt-[10px] sm:pb-[10px]'>
      <div className='bg-white w-[600px] h-[600px] flex-center flex-col rounded-[10px] sm:w-[90%]'>
        <Logo width={150} height={150} padding={false} backgroundOpacity={false} />
        <h2 className='text-[40px] tracking-[3px] font-medium mt-[20px] sm:text-[25px]'>Zaloguj się</h2>
        {error && <span className='text-red-700 font-light tracking-[2px]'>{error}</span>}
        <form onSubmit={handleSubmit} className='flex flex-col mt-[40px] w-[75%] sm:w-[90%]'>
          <input onChange={(e) => setName(e.target.value)} className="text-[#353535] bg-gray-50 py-[10px] px-[10px] tracking-[0.5px]" type="text" placeholder="Nazwa użytkownika" />
          <input onChange={(e) => setPassword(e.target.value)} className="text-[#353535] bg-gray-100 py-[10px] px-[10px] mt-[15px] tracking-[0.5px]" type="password" placeholder="Hasło" />
          <button className='bg-[#11161A] text-[20px] text-white font-light py-[15px] px-[60px] rounded-[5px] mx-auto mt-[40px] fold:text-[18px]'>Zaloguj się</button>
        </form>
        <Link href={'/management/rejestracja'} className='mt-[30px] text-[18px] font-light fold:text-[15px]'>Nie masz konta? <span className='text-[#5A7889]'>Zarejestruj się</span></Link>
      </div>
    </section>
  )
}

export default LoginForm