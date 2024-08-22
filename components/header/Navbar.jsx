'use client';

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className='sm:hidden flex gap-[30px] tracking-[2px] text-white text-[17px] lg:text-[15px] md:flex-col md:gap-[10px]'>
        <Link href="/#parafia">Parafia</Link>
        <Link href="/#grupy">Grupy parafialne</Link>
        <Link href="/#galeria">Galeria</Link>
        <Link href="/#kontakt">Kontakt</Link>
        <Link href="/komunikaty">Komunikaty</Link>
        <Link href="/ogloszenia">Ogłoszenia</Link>
      </nav>



      <div className="hidden sm:flex justify-end">
        <div onClick={() => setActive(!active)} className='relative w-[30px] h-[20px] z-10'>
          <div className={active ? "active-hamburger" : "custom-hamburger"}></div>
        </div>

        <div className={active ? "hidden sm:flex justify-center gap-4 absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.90)] transition-all duration-500 ease-in-out transform translate-x-0" : "fixed sm:hidden w-full h-screen bg-white transition-all duration-500 ease-in-out transform translate-x-full"}>
          <nav className='flex-center flex-col h-full text-white gap-5'>
            <Link href="/#parafia">Parafia</Link>
            <Link href="/#grupy">Grupy parafialne</Link>
            <Link href="/#galeria">Galeria</Link>
            <Link href="/#kontakt">Kontakt</Link>
            <Link href="/komunikaty">Komunikaty</Link>
            <Link href="/ogloszenia">Ogłoszenia</Link>
          </nav>
        </div>

      </div>

    </>
  )
}

export default Navbar