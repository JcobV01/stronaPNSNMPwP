import Link from 'next/link'
import React from 'react'

const Navbar = ({bold, uppercase}) => {
  return (
    <nav className='flex gap-[30px] tracking-[2px] text-white text-[17px] lg:text-[15px] md:flex-col md:gap-[10px]' style={{fontWeight: bold ? 600 : 400, textTransform: uppercase ? 'uppercase' : 'normal-case' }}>
        <Link href="/#parafia">Parafia</Link>
        <Link href="/#grupy">Grupy parafialne</Link>
        <Link href="/#galeria">Galeria</Link>
        <Link href="/#kontakt">Kontakt</Link>
        <Link href="/komunikaty">Komunikaty</Link>
        <Link href="/ogloszenia">Ogłoszenia</Link>
    </nav>
  )
}

export default Navbar