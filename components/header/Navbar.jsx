'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setActive(false);

  return (
    <>
      <nav className={`${scrolled === true ? 'backdrop-blur-[5px] bg-[rgba(0,0,0,0.30)]' : ''} md:hidden flex justify-center sticky top-0 duration-700 z-[1000] gap-[30px] items-center h-[75px] tracking-[2px] text-white text-[17px] lg:text-[15px] md:flex-col md:gap-[10px]`}>
        <Link href="/#parafia" className='duration-700 hover:scale-110'>Parafia</Link>
        <Link href="/#grupy" className='duration-700 hover:scale-110'>Grupy parafialne</Link>
        <Link href="/galeria" className='duration-700 hover:scale-110'>Galeria</Link>
        <Link href="/#kontakt" className='duration-700 hover:scale-110'>Kontakt</Link>
        <Link href="/komunikaty" className='duration-700 hover:scale-110'>Komunikaty</Link>
        <Link href="/ogloszenia" className='duration-700 hover:scale-110'>Ogłoszenia</Link>
      </nav>

      <div className={`${scrolled === true ? 'backdrop-blur-[5px] bg-[rgba(0,0,0,0.30)]' : ''} hidden md:flex justify-center h-[75px] items-center sticky top-0 z-[1000]`}>
        <div onClick={() => setActive(!active)} className='w-[30px] h-[20px] relative z-[1000]'>
          <div className={active ? "active-hamburger absolute top-[50%] translate-y-[-50%]" : "custom-hamburger absolute top-[50%] translate-y-[-50%]"}></div>
        </div>

        <div className={active ? "hidden md:flex justify-center gap-4 absolute top-0 left-0 w-full h-dvh bg-[rgba(0,0,0,0.90)] z-[110] transition-all duration-500 ease-in-out transform translate-x-0" : "fixed md:hidden w-full h-screen bg-white transition-all duration-500 ease-in-out transform translate-x-full"}>
          <nav className='flex-center flex-col h-full text-white gap-5'>
            <Link href="/#parafia" onClick={closeMenu}>Parafia</Link>
            <Link href="/#grupy" onClick={closeMenu}>Grupy parafialne</Link>
            <Link href="/#galeria" onClick={closeMenu}>Galeria</Link>
            <Link href="/#kontakt" onClick={closeMenu}>Kontakt</Link>
            <Link href="/komunikaty" onClick={closeMenu}>Komunikaty</Link>
            <Link href="/ogloszenia" onClick={closeMenu}>Ogłoszenia</Link>
          </nav>
        </div>

      </div>

    </>
  )
}

export default Navbar