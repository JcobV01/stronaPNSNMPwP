"use client"

import React, {useState } from 'react'

const GalleryAside = ({ years, handleYearClick, selectedYear }) => {
    const [indexAlbum, setIndexAlbum] = useState(0);

    const handleIndexChange = (index) => {
        setIndexAlbum(index);
    };

    const getTopPosition = (indexAlbum) => {
        const percentage = 100 - indexAlbum * 15;
        const topPosition = percentage < 0 ? `-${Math.abs(percentage)}%` : `${percentage}%`;

        return topPosition;
    }

    return (
        <aside className='album-gallery flex-center mt-[115px] w-[175px] absolute right-[-20%] max-h-[450px] overflow-y-hidden'>
            <div className='relative flex-center w-full h-[450px]'>
                <ul className='absolute !list-none space-y-[30px] duration-700 pl-0' style={{top: getTopPosition(indexAlbum), transform: 'translateY(-50%)'}}>
                    {years.map((year, index) => (
                        <li key={year} className='relative flex-center
                            after:content-[""] after:flex after:flex-col after:w-[5px] after:h-[10px] after:bg-[#353535] after:rounded-[5px] after:absolute after:bottom-[-50%] after:left-[50%] after:-translate-x-[50%] 
                            first:before:content-[""] first:before:flex first:before:flex-col first:before:w-[5px] first:before:h-[10px] first:before:bg-[#353535] first:before:rounded-[5px] first:before:absolute first:before:top-[-50%] first:before:left-[50%] first:before:-translate-x-[50%]'>
                            <button onClick={() => { handleYearClick(year), handleIndexChange(index) }} className={`text-[#353535] duration-500 ${selectedYear === year ? 'text-[30px] tracking-[7px] font-normal pl-[7px]' : 'text-[25px] tracking-[6px] font-light pl-[6px]'}`}>{year}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default GalleryAside