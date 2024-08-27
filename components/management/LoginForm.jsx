'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

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
    <section className='flex-center flex-col'>
      <h2>Zaloguj się</h2>
      {error && <span className='text-red-700 font-semibold'>{error}</span>}
      <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nazwa użytkownika" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Hasło" />
        <button>Zaloguj się</button>
      </form>
      <Link href={'/management/rejestracja'}>Nie masz konta? Zarejestruj się</Link>
    </section>
  )
}

export default LoginForm