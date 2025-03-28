'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

const page = () => {
    const handleLogout = () => {
        signOut({ callbackUrl: '/management' })
    }
    return (
        <section>
            <article>
                <button onClick={handleLogout}>wyloguj</button>
            </article>
        </section>
    )
}

export default page