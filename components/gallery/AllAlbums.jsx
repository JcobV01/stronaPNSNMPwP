'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const AllAlbums = () => {
    const [albums, setAlbums] = useState([]);

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
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAlbums();
    }, []);

    console.log(albums);

    return (
        <article className='mt-[90px] grid grid-cols-4 gap-[20px]'>
            {albums.map((album, index) => {
                return (
                    <div key={album.folderId} className={`flex-center h-[250px] w-[250px] rounded-[2px] relative`}>
                        <hr className='absolute top-[15px] w-[100px] h-[1px] bg-white z-10' />
                        <p className='text-white text-[25px] font-light max-w-[200px] text-center z-10'>{album.name}</p>
                        <hr className='absolute bottom-[15px] w-[100px] h-[1px] bg-white z-10' />
                        <Image src={album.cover} width="250" height="250" className='absolute w-full h-full brightness-50' />
                    </div>
                )
            })}
        </article>
    )
}

export default AllAlbums