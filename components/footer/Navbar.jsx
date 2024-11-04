import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex gap-[25px] tracking-[2px] text-white text-[17px] md:text-center font-semibold lg:text-[15px] md:flex-col md:gap-[10px]'>
        <Link href="/#parafia" className='duration-700 hover:text-[#5A7889]'>PARAFIA</Link>
        <Link href="/#grupy" className='duration-700 hover:text-[#5A7889]'>GRUPY PARAFIALNE</Link>
        <Link href="/#galeria" className='duration-700 hover:text-[#5A7889]'>GALERIA</Link>
        <Link href="/#kontakt" className='duration-700 hover:text-[#5A7889]'>KONTAKT</Link>
        <Link href="/komunikaty" className='duration-700 hover:text-[#5A7889]'>KOMUNIKATY</Link>
        <Link href="/ogloszenia" className='duration-700 hover:text-[#5A7889]'>OGŁOSZENIA</Link>
    </nav>
  )
}

export default Navbar