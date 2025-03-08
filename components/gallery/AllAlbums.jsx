'use client'

import Link from '@node_modules/next/link';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import GalleryAside from './GalleryAside';
import { Icon } from '@node_modules/@iconify/react/dist/iconify';
import placeholderImg from '@public/assets/images/header-images/history.webp';
import Cookies from 'js-cookie';

const AllAlbums = () => {
    const [albums, setAlbums] = useState([]); // pełna lista albumów pobrana z backendu
    const [selectedYear, setSelectedYear] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const [years, setYears] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loaderRef = useRef(null);

    // Pobieramy wszystkie albumy dla danego roku
    const getAlbums = async (year) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/gallery/albums/getbyyear', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ albumYear: year })
            });
            const data = await response.json();
            setAlbums(data);
            setPage(1); // resetujemy stronę, aby pokazać pierwsze 12 albumów
        } catch(err) {
            console.log(err);
        }
        setIsLoading(false);
    }

    const getRangeYears = async () => {
        try {
            const response = await fetch('/api/gallery/albums/getrange', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            const yrs = Array.from({length: parseInt(data.maxYear) - parseInt(data.minYear) + 1}, (_, i) => parseInt(data.minYear) + i).reverse();
            return yrs;
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRangeYears().then((yrs) => {
            setYears(yrs);
            const cookieYear = Cookies.get("selectedYear");
            const initialYear = cookieYear || yrs[0];
            setSelectedYear(initialYear);
        });
    }, []);

    // Gdy zmienia się wybrany rok, pobieramy pełną listę albumów
    useEffect(() => {
        if (selectedYear) {
            getAlbums(selectedYear);
        }
    }, [selectedYear]);

    // Aktualizujemy flagę hasMore na podstawie liczby wyświetlanych albumów
    useEffect(() => {
        setHasMore(page * 12 < albums.length);
    }, [page, albums]);

    // Intersection Observer, który zwiększa stronę gdy użytkownik przewinie do dołu
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore && !isLoading) {
                setPage(prev => prev + 1);
            }
        }, {
            rootMargin: '100px',
        });
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        }
    }, [hasMore, isLoading]);

    const showDropdown = () => {
        setDropdown(prev => !prev);
    }

    const handleYearClick = (year) => {
        setSelectedYear(year);
        Cookies.set("selectedYear", year, {expires: 1 / 24, path: '/'});
        setAlbums([]); // resetujemy listę przy zmianie roku
        setPage(1); // resetujemy stronę
        showDropdown();
    }

    // Wyświetlamy tylko część albumów – do indeksu page * 12
    const displayedAlbums = albums.slice(0, page * 12);

    return (
        <div className='flex md:flex-col'>
            <article className='hidden md:block mt-[50px]'>
                <p className='text-[15px]'>Wybierz rok</p>
                <div className='relative w-full h-[40px] rounded-full bg-[#5A7889] flex items-center px-[20px] justify-between' onClick={showDropdown}>
                    <p className='text-white'>{selectedYear}</p>
                    <Icon icon="bxs:up-arrow" height={20} width={20} className={`text-white duration-500 rotate-180 ${dropdown && 'rotate-0'}`}/>
                    <div className='absolute left-0 w-full bg-[#5a7889ed] z-30 px-[20px] py-[10px] rounded-[10px]' style={{bottom: `-${years.length * 30}px`, display: dropdown ? 'block' : 'none'}}>
                        {years?.map((year) => (
                            year !== selectedYear && 
                            <p 
                                key={year}
                                className='w-full h-[30px] text-white'
                                data-year={year} 
                                onClick={(e) => handleYearClick(e.target.dataset.year)}
                            >
                                {year}
                            </p>
                        ))}
                    </div>
                </div> 
            </article>
            <article className='mt-[90px] grid grid-cols-4 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-[20px]'>
                {displayedAlbums.map((album, index) => {
                    const dynamicAlbumsWidthEverySeven = (index + 1) % 12 === 5;
                    const dynamicAlbumsWIdthEveryFiveteen = (index + 1) % 12 === 10;

                    let imageWidth = 250;
                    let imageHeight = 250;
                    if (dynamicAlbumsWidthEverySeven) {
                        imageWidth = 520;
                    } else if (dynamicAlbumsWIdthEveryFiveteen) {
                        imageWidth = 520;
                        imageHeight = 520;
                    }

                    return (
                        <div key={album.folderId} className='gallery-albums rounded-[2px] relative w-[250px] h-[250px]'>
                            <Link href={`/galeria/${album.folderId}`} className='flex-center w-full h-full duration-500 hover:scale-90'>
                                <hr className='absolute top-[15px] w-[100px] h-[1px] bg-white z-10' />
                                <p className='text-white text-[25px] font-light max-w-[200px] text-center z-10'>{album.name}</p>
                                <hr className='absolute bottom-[15px] w-[100px] h-[1px] bg-white z-10' />
                                <Image src={album.cover !== 'default' ? album.cover : placeholderImg} placeholder='blur' blurDataURL={album.base64hash} alt={album.name} width={imageWidth} height={imageHeight} className='absolute w-full h-full brightness-50 object-cover duration-700' />
                            </Link>
                        </div>
                    )
                })}
                <div ref={loaderRef} className="w-full flex justify-center my-8">
                    {isLoading && <div className='loader'></div>}
                </div>
            </article>
            <GalleryAside years={years} handleYearClick={handleYearClick} selectedYear={selectedYear}/>
        </div>
    );
}

export default AllAlbums;
