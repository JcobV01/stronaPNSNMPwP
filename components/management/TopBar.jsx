"use client"

import { usePathname } from 'next/navigation'
import UserBar from './UserBar';

const TopBar = () => {

    const paths = new Map([
        ["/management/panel", "Statystyki"],
        ["/management/panel/ogloszenia", "Ogłoszenia"],
        ["/management/panel/intencje", "Intencje"],
        ["/management/panel/komunikaty", "Komunikaty"],
        ["/management/panel/komunikaty/nowy", "Dodaj wpis"],
        ["/management/panel/komunikaty/edytuj", "Edytuj wpis"],
        ["/management/panel/historia", "Historia"],
        ["/management/panel/galeria", "Galeria"],
        ["/management/panel/wiadomosci", "Wiadomości"]
    ]);

    const pathname = usePathname()

    return (
        <div className='flex justify-between border-b-[2px] border-[#E9E9E9] py-[16px]'>
            <h2 className='text-[#353535] text-[30px] font-bold'>{paths.get(`${pathname}`)}</h2>
            <UserBar />
        </div>
    )
}

export default TopBar