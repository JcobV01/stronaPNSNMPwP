import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex gap-[25px] tracking-[2px] text-white text-[17px] md:text-center font-semibold lg:text-[15px] md:flex-col md:gap-[10px]'>
        <Link href="/#parafia">PARAFIA</Link>
        <Link href="/#grupy">GRUPY PARAFIALNE</Link>
        <Link href="/#galeria">GALERIA</Link>
        <Link href="/#kontakt">KONTAKT</Link>
        <Link href="/komunikaty">KOMUNIKATY</Link>
        <Link href="/ogloszenia">OGŁOSZENIA</Link>
    </nav>
  )
}

export default Navbar