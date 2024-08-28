"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

const panel = () => {

  const handleLogout = () => {
    signOut({callbackUrl: '/management'})
  }

  return (
    <div>
      <button onClick={handleLogout}>wyloguj</button>
    </div>
  )
}

export default panel