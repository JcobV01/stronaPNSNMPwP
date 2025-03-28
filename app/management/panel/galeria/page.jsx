"use client"

import NewAlbumDialog from '@components/management/galeria/NewAlbumDialog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { useSession } from "next-auth/react"
import Cookies from 'js-cookie';


import placeholderImg from '@public/assets/images/header-images/history.webp'

const page = () => {
  const session = useSession()

  const [albums, setAlbums] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [years, setYears] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const [albumName, setAlbumName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const router = useRouter();
  const albumDialog = useRef(null);

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
    } catch (err) {
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
      const yrs = Array.from({ length: parseInt(data.maxYear) - parseInt(data.minYear) + 1 }, (_, i) => parseInt(data.minYear) + i).reverse();
      return yrs;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRangeYears().then((yrs) => {
      setYears(yrs);
      const cookieYear = Cookies.get("selectedYearManagement");
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

  const handleYearClick = (year) => {
    setSelectedYear(year);
    Cookies.set("selectedYearManagement", year, { expires: 1 / 24, path: '/' });
    setAlbums([]); // resetujemy listę przy zmianie roku
    setPage(1); // resetujemy stronę
  }


  // Wyświetlamy tylko część albumów – do indeksu page * 12
  const displayedAlbums = albums.slice(0, page * 12);

  const createNewAlbum = async () => {
    try {
      const response = await fetch('/api/gallery/albums/new', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          albumName: albumName,
          eventDate: eventDate,
          author: session.data?.user?.name
        })
      })

      if (response.ok) {
        setAlbumName('');
        setEventDate('');
        closeDialogHandle();
        getAlbums(selectedYear);
      }

    } catch (error) {
      console.error(err);
    }
  }

  const handleAlbum = (folderId) => {
    router.push(`/management/panel/galeria/${folderId}`);
  }

  const openDialogHandle = () => {
    albumDialog?.current?.showModal()
  }

  const closeDialogHandle = () => {
    albumDialog?.current?.close();
  }

  return (
    <section className='w-full flex-1 pt-8'>
      <div className='w-full flex justify-between'>
        <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light w-[300px]' onClick={openDialogHandle}>Dodaj album</button>
        <select className='w-[200px] px-[10px] rounded-[5px]' value={selectedYear} onChange={(e) => handleYearClick(Number(e.target.value))}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-3 w-full mt-8 h-[600px] px-[10px] overflow-y-auto'>
        <h2 className='text-[20px] text-center text-black'>{selectedYear}</h2>
        <hr className='border-gray-400 w-full' />
        <div className='w-full flex flex-wrap gap-4'>
          {displayedAlbums.map((album) => (
            <div className='relative w-[230px] h-[230px] mt-[32px] cursor-pointer' key={album.folderId} onClick={() => handleAlbum(album?.folderId)}>
              <Image src={album.cover !== 'default' ? album.cover : placeholderImg} width={230} height={230} placeholder='blur' blurDataURL={album.base64hash} className='object-cover h-full brightness-50' alt="Zdjęcie przedstawiające album" />
              <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[20px] text-center'>{album?.name}</p>
            </div>
          ))}
        </div>
        <div ref={loaderRef} className="w-full flex justify-center my-8">
          {isLoading && <div className='loader'></div>}
        </div>
      </div>

      <NewAlbumDialog dialogRef={albumDialog} closeDialog={closeDialogHandle} albumName={albumName} setAlbumName={setAlbumName} eventDate={eventDate} setEventDate={setEventDate} createFolder={createNewAlbum} />

    </section>
  )
}

export default page