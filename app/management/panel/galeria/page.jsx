"use client"

import NewAlbumDialog from '@components/management/galeria/newAlbumDialog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
  const [albums, setAlbums] = useState([])

  const getAlbums = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/albums", {
        method: "GET",
        headers: {
          'x-api-key': 'isJFu6UoIZELuSImxy75BlIIRZUsGgGC',
        },
      });

      if(!response.ok){
        throw new Error("Błąd podczas pobierania danych");
      }

      const data = await response.json();
      setAlbums(data || []);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAlbums();
  },[]);

  console.log(albums);

  return (
    <section className='w-full flex-1 pt-8'>
      <div className='w-full flex justify-between'>
        <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light w-[300px]'>Dodaj album</button>
        <select className='w-[200px] px-[10px] rounded-[5px]'>
          <option value="">Wybierz rok</option>

        </select>
        <input type="search" placeholder='Wyszukaj album' className='w-[600px] px-[10px] rounded-[5px]' />
      </div>
      <div className='flex flex-col gap-3 w-full mt-8 h-[600px] px-[10px] overflow-y-auto'>
        {albums.map((album, index) => (
          <div key={index} className='relative w-[200px] h-[230px] mt-[32px] cursor-pointer'>
            <Image src={album.cover} width={200} height={230} className='object-cover h-full brightness-50' alt="Zdjęcie przedstawiające album" />
            <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[20px] text-center'>{album.name}</p>
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default page