'use client'

import Logo from '@components/Logo';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Wszystkie pola muszą być wypełnione");
            return;
        }

        try {
            const resNameExists = await fetch('/api/checkUsername', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name })
            });

            const { user: nameUser } = await resNameExists.json();

            if (nameUser) {
                setError("Nazwa użytkownika jest już zajęta");
                return;
            }

            const resUserExists = await fetch('/api/userExists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const { user: emailUser } = await resUserExists.json();

            if (emailUser) {
                setError("Użytkownik o podanym mailu jest już zarejestrowany");
                return;
            }

            const res = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push('/management');
            } else {
                console.log("Nie zarejestrowano użytkownika");
            }
        } catch (error) {
            console.log("Błąd podczas rejestracji");
        }
    }

    return (
        <section className='flex-center flex-col h-screen fold:h-full sm:pt-[10px] sm:pb-[10px]'>
            <div className='bg-white w-[600px] h-[700px] flex-center flex-col rounded-[10px] sm:w-[90%]'>
                <Logo width={150} height={150} padding={false} backgroundOpacity={false}/>
                <h2 className='text-[40px] tracking-[3px] font-medium mt-[20px] sm:text-[25px]'>Zarejestruj się</h2>
                {error && <span className='text-red-700 font-light tracking-[2px]'>{error}</span>}
                <form onSubmit={handleSubmit} className='flex flex-col mt-[40px] w-[75%] sm:w-[90%]'>
                    <input onChange={(e) => setName(e.target.value)} className="text-[#353535] bg-gray-50 py-[10px] px-[10px] tracking-[0.5px]" type="text" placeholder="Nazwa użytkownika" />
                    <input onChange={(e) => setEmail(e.target.value)} className="text-[#353535] bg-gray-100 py-[10px] px-[10px] mt-[15px] tracking-[0.5px]" type="text" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} className="text-[#353535] bg-gray-100 py-[10px] px-[10px] mt-[15px] tracking-[0.5px]" type="password" placeholder="Hasło" />
                    <button className='bg-[#11161A] text-[20px] text-white font-light py-[15px] px-[60px] rounded-[5px] mx-auto mt-[40px] fold:text-[18px]'>Zarejestruj się</button>
                </form>
                <Link href={'/management/'} className='mt-[30px] text-[18px] font-light fold:text-[15px]'>Masz już konto? <span className='text-[#5A7889]'>Zaloguj się</span> </Link>
            </div>
        </section>
    )
}

export default RegisterForm