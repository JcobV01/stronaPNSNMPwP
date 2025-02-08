'use client'

import Link from '@node_modules/next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import GalleryAside from './GalleryAside';
import { Icon } from '@node_modules/@iconify/react/dist/iconify';

const AllAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const [dropdown, setDropdown] = useState(false)

    const getAlbums = async () => {
        try {
            const response = await fetch("/api/gallery/albums/getall", {
                method: "GET",
            });

            const data = await response.json();

            console.log("Fotki: ", data)

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

    const showDropdown = () => {
        dropdown === true ? setDropdown(false) : setDropdown(true)
    }

    const handleYearClick = (year) => {
        showDropdown();
        setSelectedYear(year);
    }


    return (
        <div className='flex md:flex-col'>
            <article className='hidden md:block mt-[50px]'>
                <p className='text-[15px]'>Wybierz rok</p>
                <div className=' relative w-full h-[40px] rounded-full bg-[#5A7889] flex items-center px-[20px] justify-between' onClick={showDropdown}>
                    <p className='text-white'>{selectedYear}</p>
                    <Icon icon="bxs:up-arrow" height={20} width={20} className={`text-white duration-500 rotate-180 ${dropdown === true && 'rotate-0'}`}/>

                    <div className={`absolute left-[0] w-full bg-[#5a7889ed] z-30 px-[20px] py-[10px] rounded-[10px]`} style={{bottom: `-${years.length * 30}px`, display: dropdown === false ? 'none' : 'block'}}>
                        {years.map((year) => (
                            year != selectedYear && <p className='w-full h-[30px] text-white' data-year={year} onClick={(e) => handleYearClick(e.target.dataset.year)}>{year}</p>
                        ))}
                    </div>
                </div> 
            </article>
            <article className='mt-[90px] grid grid-cols-4 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-[20px]'>
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
                                <Image src={album.cover} placeholder='blur' blurDataURL={album.base64hash} alt={album.name} width={imageWidth} height={imageHeight} className='absolute w-full h-full brightness-50 object-cover duration-700' />
                            </Link>
                        </div>
                    )
                })}
            </article>
            <GalleryAside years={years} handleYearClick={handleYearClick} selectedYear={selectedYear}/>
        </div>
    )
}

export default AllAlbums