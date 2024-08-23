import React from 'react'
import Image from 'next/image'

import CandleIcon from './icons/Candle'
import PigeonIcon from './icons/Pigeon'
import PitcherIcon from './icons/Pitcher'
import StoleIcon from './icons/Stole'
import RingsIcon from './icons/Rings'
import CoffinIcon from './icons/Coffin'

const IconComponents = {
    baptism: CandleIcon,
    confirmation: PigeonIcon,
    anointing: PitcherIcon,
    confession: StoleIcon,
    marriage: RingsIcon,
    funeral: CoffinIcon,
}

const CardToNavbar = ({ name, title, subtitle, setComponent, isActive }) => {
    const IconComponent = IconComponents[name] || null;
    return (
        <button onClick={() => setComponent(name)} className={`flex justify-between py-[15px] items-center border flex-col w-[200px] h-[150px] bg-white rounded-[10px] ${isActive ? 'border-[#5A7889] shadow-[5px_5px_10px_0px_rgba(90,120,137,1)]' : 'border-transparent shadow-[5px_5px_10px_0px_rgba(176,176,176,1)'}`}>
            {IconComponent && <IconComponent color={isActive ? '#5A7889' : '#353535'} />}
            <div className='font-medium tracking-[3px] text-[15px]'>
                <p className='text-[#B0B0B0]'>{title}</p>
                <p className=''>{subtitle}</p>
            </div>
        </button>
    )
}

export default CardToNavbar