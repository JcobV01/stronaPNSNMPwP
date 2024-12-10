"use client"

import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

const page = () => {
    const { albumID } = useParams()
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const response = await fetch(`http://localhost:7000/api/albums/${albumID}`, {
                    method: "GET",
                    headers: {
                        'x-api-key': process.env.PHOTO_API_KEY,
                    },
                })

                const data = await response.json()
                setPhotos(data)
            }
            catch (error) {
                console.error(error);
            }
        }

        getPhotos()
    }, [])

    return (
        <section className='flex gap-8 flex-col flex-1 pt-[40px] w-full'>
            <div className='flex gap-4 items-center'>
                <h3 className='text-[25px] font-bold text-[#353535]'>{decodeURIComponent(name)}</h3>
                <Icon icon="solar:pen-bold" width="25" height="25" className='color-[#353535] duration-500 cursor-pointer'/>
            </div>

            <div className='flex gap-6'>
                <button className='bg-[#11161a] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light'>Dodaj zdjęcia do albumu</button>
                <button className='bg-[#1a2127] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light'>Wybierz zdjęcia</button>
                <button className='bg-[#1f272e] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light'>Usuń wybrane</button>
            </div>


            <div className='flex flex-wrap gap-2 w-full flex-1 overflow-y-scroll'>
                {photos?.map((photo, index) => (
                    <Image src={photo.secure_url} width={300} height={300} key={index} alt={`Zdjęcie z albumu ${decodeURIComponent(name)}`} className='object-cover'/>
                ))}
            </div>
        </section>
    )
}

export default page