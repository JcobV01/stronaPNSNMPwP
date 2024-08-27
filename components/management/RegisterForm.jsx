'use client'

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
        <section className='flex-center flex-col'>
            <h2>Zarejestruj się</h2>
            {error && <span className='text-red-700 font-semibold'>{error}</span>}
            <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nazwa użytkownika" />
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Hasło" />
                <button>Zarejestruj się</button>
            </form>
            <Link href={'/management/'}>Masz już konto? Zaloguj się</Link>
        </section>
    )
}

export default RegisterForm