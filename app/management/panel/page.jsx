"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

const panel = () => {

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

export default panel