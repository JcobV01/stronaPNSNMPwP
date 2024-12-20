'use client'

import Link from '@node_modules/next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const AllAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);

    const getAlbums = async () => {
        try {
            const response = await fetch("/api/gallery/albums/getall", {
                method: "GET",
            });

            const data = await response.json();

            const sortedAlbums = data.sort((a, b) => {
                if (a.year === b.year) {
                    return new Date(b.createdAt) - new Date(a.createdAt); // Jeśli ten sam rok, sortuj po dacie utworzenia
                }
                return b.year - a.year;
            });

            setAlbums(sortedAlbums);
            const latestYear = sortedAlbums[0]?.year;
            setSelectedYear(latestYear);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAlbums();
    }, []);

    const filteredAlbums = selectedYear ? albums.filter(album => album.year === selectedYear) : albums;
    const years = [...new Set(albums.map(album => album.year))];

    const handleYearClick = (year) => {
        setSelectedYear(year);
    }

    console.log(albums);

    return (
        <div className='flex relative'>
            <article className='mt-[90px] grid grid-cols-4 gap-[20px]'>
                {filteredAlbums.map((album, index) => {
                    const dynamicAlbumsWidthEverySeven = (index + 1) % 7 === 0;
                    const dynamicAlbumsWIdthEveryFiveteen = (index + 1) % 15 === 0;

                    let imageWidth = 250;
                    let imageHeight = 250;
                    if (dynamicAlbumsWidthEverySeven) {
                        imageWidth = 520;
                    } else if (dynamicAlbumsWIdthEveryFiveteen) {
                        imageWidth = 520;
                        imageHeight = 520;
                    }

                    return (
                        <div key={album.folderId} className={`gallery-albums rounded-[2px] relative ${dynamicAlbumsWidthEverySeven ? 'col-span-2 w-[520px] h-[250px]' : 'w-[250px] h-[250px]'} ${dynamicAlbumsWIdthEveryFiveteen ? 'col-span-2 col-col-2 w-[520px] h-[520px]' : 'w-[250px] h-[250px]'}`}>
                            <Link href={`/galeria/${album.folderId}`} className='flex-center w-full h-full duration-500 hover:scale-90'>
                                <hr className='absolute top-[15px] w-[100px] h-[1px] bg-white z-10' />
                                <p className='text-white text-[25px] font-light max-w-[200px] text-center z-10'>{album.name}</p>
                                <hr className='absolute bottom-[15px] w-[100px] h-[1px] bg-white z-10' />
                                <Image src={album.cover} alt={album.name} width={imageWidth} height={imageHeight} className='absolute w-full h-full brightness-50 object-cover duration-700' />
                            </Link>
                        </div>
                    )
                })}
            </article>
            <aside className='mt-[90px] absolute right-[-15%]'>
                <ul className='!list-none space-y-[30px]'>
                    {years.map(year => (
                        <li key={year} className='relative flex-center 
                        after:content-[""] after:flex after:flex-col after:w-[5px] after:h-[10px] after:bg-[#353535] after:rounded-[5px] after:absolute after:bottom-[-50%] after:left-[50%] after:-translate-x-[50%] 
                        first:before:content-[""] first:before:flex first:before:flex-col first:before:w-[5px] first:before:h-[10px] first:before:bg-[#353535] first:before:rounded-[5px] first:before:absolute first:before:top-[-50%] first:before:left-[50%] first:before:-translate-x-[50%]'>
                            <button onClick={() => handleYearClick(year)} className={`text-[#353535] duration-500 ${selectedYear === year ? 'text-[30px] tracking-[7px] font-normal pl-[7px]' : 'text-[25px] tracking-[6px] font-light pl-[6px]'}`}>{year}</button>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}

export default AllAlbums