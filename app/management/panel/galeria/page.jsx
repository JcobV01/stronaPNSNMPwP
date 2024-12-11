"use client"

import NewAlbumDialog from '@components/management/galeria/newAlbumDialog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [years, setYears] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await fetch("/api/gallery/albums/getall", {
          method: "GET",
        });
  
        if (!response.ok) {
          throw new Error("Błąd podczas pobierania danych");
        }
  
        const data = await response.json();

        /* Grupowanie albumów latami*/
        const groupedAlbums = data.reduce((acc, album) => {
          const year = album.year;
          if (!acc[year]) {
            acc[year] = [];
          }
          acc[year].push(album);
          return acc;
        }, {});
        
        const sortedYears = Object.keys(groupedAlbums).sort((a, b) => b - a);
        
        setAlbums(groupedAlbums);
        setYears(sortedYears);
  
      } catch (error) {
        console.log(error);
      }
    }

    getAlbums();
  }, []);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  }

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredAlbums = Object.entries(selectedYear ? { [selectedYear]: albums[selectedYear] || [] } : albums)
  .reduce((acc, [year, photos]) => {
    const filteredPhotos = photos.filter((photo) =>
      photo.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filtrujemy po nazwie albumu
    );

    if (filteredPhotos.length > 0) {
      acc[year] = filteredPhotos;
    }

    return acc;
  }, {});

  return (
    <section className='w-full flex-1 pt-8'>
      <div className='w-full flex justify-between'>
        <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light w-[300px]'>Dodaj album</button>
        <select className='w-[200px] px-[10px] rounded-[5px]' onChange={handleYearChange}>
          <option value="">Wszystkie</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <input type="search" placeholder='Wyszukaj album' className='w-[600px] px-[10px] rounded-[5px]' value={searchTerm} onChange={handleSearchTermChange} />
      </div>

      <div className='flex flex-col gap-3 w-full mt-8 h-[600px] px-[10px] overflow-y-auto'>
        {Object.entries(filteredAlbums).sort(([yearA], [yearB]) => yearB - yearA).map(([year, photos]) => (
          <div className='w-full' key={year}>
            <h2 className='text-[20px] text-center text-black'>{year}</h2>
            <hr className='border-gray-400 w-full'/>
            <div className='flex flex-wrap gap-4'>
              {photos.map((photo) => (
                <div key={photo.folderId} className='relative w-[200px] h-[230px] mt-[32px] cursor-pointer'>
                  <Image src="" width={200} height={230} className='object-cover h-full brightness-50' alt="Zdjęcie przedstawiające album" />
                  <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[20px] text-center'>{photo.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


    </section>
  )
}

export default page