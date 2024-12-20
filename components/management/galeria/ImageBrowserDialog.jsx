'use client';

import { Icon } from '@node_modules/@iconify/react/dist/iconify';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ImageBrowserDialog = ({ photos, imageBrowserRef, activePhotoID }) => {
    
    const [actualIndex, setActualIndex] = useState(1)
    
    const getPhotoIndex = (photoID) => {
        setActualIndex(photos.findIndex(photo => photo._id === photoID))
    }

    const setNewIndex = (mode) => {
        mode === 1 ? actualIndex < photos.length - 1 ? setActualIndex(prev => prev+1) : setActualIndex(0)
        :
        actualIndex > 0 ? setActualIndex(prev => prev-1) : setActualIndex(photos.length - 1)
    }

    const closeBrowser = () => {
        imageBrowserRef.current.close()
    }

    useEffect(() => {
        getPhotoIndex(activePhotoID)
    }, [activePhotoID])

    return (
        <dialog ref={imageBrowserRef} className="w-[70%] h-[70%] backdrop:bg-[#000000e4] bg-transparent outline-none border-none overflow-visible">
            <Icon icon="zondicons:close-solid" width="50" height="50" className='fixed top-[30px] right-[30px] text-[#c0c0c0] cursor-pointer duration-300 hover:text-[#5A7889]' onClick={closeBrowser}/>
            <div className='relative w-full h-full flex justify-center'>
                <Image width={1080} height={0} src={photos[actualIndex]?.fullurl} placeholder='blur' blurDataURL='data:image/jpeg;base64,/L6PZfSi_.AyE_3t7t7R**0o#DgR4' quality={90} alt="Zdjęcie w przeglądarce" className='w-auto h-full' />
                <div className='absolute top-[50%] left-[-20px] translate-y-[-50%] text-white cursor-pointer bg-[#5A7889] h-[100px] rounded-[5px] flex-center' onClick={() => setNewIndex(0)}>
                    <Icon icon="ic:round-play-arrow" width="50" height="50" className='rotate-180' />
                </div>
                <div className='absolute top-[50%] right-[-20px] translate-y-[-50%] text-white cursor-pointer bg-[#5A7889] h-[100px] rounded-[5px] flex-center' onClick={() => setNewIndex(1)}>
                    <Icon icon="ic:round-play-arrow" width="50" height="50" />
                </div>

                <div className='absolute bottom-[-50px] left-[50%] translate-x-[-50%]'>
                    <p className='text-white'>{actualIndex}/{photos.length}</p>
                </div>
            </div>
        </dialog>
    );
};

export default ImageBrowserDialog;