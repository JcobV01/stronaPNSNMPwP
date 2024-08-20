import Link from 'next/link'
import React from 'react'

const Navbar = ({bold}) => {
  return (
    <nav className='flex gap-[30px] tracking-[2px] text-white text-[17px] lg:text-[15px] md:flex-col md:gap-[10px]' style={{fontWeight: bold ? 600 : 400}}>
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