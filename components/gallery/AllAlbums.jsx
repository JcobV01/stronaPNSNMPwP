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

    return (
        <article className='mt-[90px] grid grid-cols-4 gap-[20px]'>
            {albums.map((album, index) => {
                const dynamicAlbumsWidthEverySeven = (index + 1) % 7 === 0;
                const dynamicAlbumsWIdthEveryFiveteen = (index + 1) % 15 === 0;

                let imageWidth = 250;
                let imageHeight = 250;
                if (dynamicAlbumsWidthEverySeven){
                    imageWidth = 520;
                } else if (dynamicAlbumsWIdthEveryFiveteen){
                    imageWidth = 520;
                    imageHeight = 520;
                }

                return (
                    <div key={album.folderId} className={`flex-center rounded-[2px] relative ${dynamicAlbumsWidthEverySeven ? 'col-span-2 w-[520px] h-[250px]' : 'w-[250px] h-[250px]'} ${dynamicAlbumsWIdthEveryFiveteen ? 'col-span-2 col-col-2 w-[520px] h-[520px]' : 'w-[250px] h-[250px]'}`}>
                        <hr className='absolute top-[15px] w-[100px] h-[1px] bg-white z-10' />
                        <p className='text-white text-[25px] font-light max-w-[200px] text-center z-10'>{album.name}</p>
                        <hr className='absolute bottom-[15px] w-[100px] h-[1px] bg-white z-10' />
                        <Image src={album.cover} width={imageWidth} height={imageHeight} className='absolute w-full h-full brightness-50 object-cover' />
                    </div>
                )
            })}
        </article>
    )
}

export default AllAlbums