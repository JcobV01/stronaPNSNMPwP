"use client"

import AddPhotosDialog from '@components/management/galeria/AddPhotosDialog'
import ChangeAlbumNameDialog from '@components/management/galeria/ChangeAlbumNameDialog'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
    const { albumID } = useParams()
    const [photos, setPhotos] = useState([])
    const [albumName, setAlbumName] = useState('')

    const changeNameDialog = useRef(null)
    const addPhotosDialog = useRef(null)

    const [selectMode, setSelectMode] = useState(false)
    const [selectedPhotos, setSelectedPhotos] = useState([])

    const openChangeNameDialog = () => {
        changeNameDialog.current.showModal()
    }

    const closeChangeNameDialog = () => {
        changeNameDialog.current.close()
    }

    const openAddPhotosDialog = () => {
        addPhotosDialog.current.showModal()
    }

    const closeAddPhotosDialog = () => {
        addPhotosDialog.current.close()
    }

    const getPhotos = async () => {
        try {
            const response = await fetch(`/api/gallery/photos/get`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ albumID: albumID })
            })

            const data = await response.json()
            console.log(data);

            setPhotos(data)
        }
        catch (error) {
            console.error(error);
        }
    }

    const getAlbumName = async () => {
        try{
            const response = await fetch('/api/gallery/albums/getname', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({albumID})
            })

            const data = await response.json()

            setAlbumName(data)
        }
        catch(err){
            console.error(err);
        }
    }

    const selectModeChange = () => {
        setSelectMode(prev => !prev)
        setSelectedPhotos([])
    }

    const selectPhoto = (e) => {
        const photoClass = e.currentTarget.classList
        const photoID = e.currentTarget.id
        if (photoClass.contains('photo-select-mode')) {
            setSelectedPhotos(prev => [...prev, photoID])
            photoClass.remove('photo-select-mode')
            photoClass.add('photo-selected')
        }
        else{
            setSelectedPhotos(prev => prev.filter(photoId => photoId !== photoID));
            photoClass.add('photo-select-mode')
            photoClass.remove('photo-selected')
        }
    }

    const deletePhotos = async () => {
        try{
            const response = await fetch('/api/gallery/photos/delete', {
                method: "DELETE",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({selectedPhotos, albumID})
            })

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Błąd podczas usuwania zdjęć");
            }
            getPhotos()

        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getPhotos()
        getAlbumName()
    }, [])

    return (
        <section className='flex gap-8 flex-col flex-1 pt-[40px] w-full'>
            <div className='flex gap-4 items-center'>
                <h3 className='text-[25px] font-bold text-[#353535]'>{albumName}</h3>
                <Icon icon="solar:pen-bold" width="25" height="25" className='color-[#353535] duration-500 cursor-pointer' onClick={openChangeNameDialog}/>
            </div>

            <div className='flex gap-6'>
                <button className='bg-[#11161a] py-[10px] px-[50px] rounded-[5px] text-white text-[16px] font-light' onClick={openAddPhotosDialog}>Dodaj zdjęcia do albumu</button>
                <button className='bg-[#1a2127] py-[10px] px-[50px] rounded-[5px] text-white text-[16px] font-light' onClick={selectModeChange}>{selectMode === true ? "Zakończ wybieranie" : "Wybierz zdjęcia"}</button>
                <button className='bg-[#1f272e] py-[10px] px-[50px] rounded-[5px] text-white text-[16px] font-light' onClick={deletePhotos}>Usuń wybrane</button>
            </div>


            <div className='w-full flex-1 overflow-y-auto columns-4'>
                {photos?.map((photo, index) => (
                    <div className={`w-[320px] h-auto mb-[20px] duration-500 ${selectMode === true && 'photo-select-mode'}`} key={index} id={photo._id} onClick={(e) => selectMode === true && selectPhoto(e)}>
                        <Image src={photo.fullurl} width={320} height={300} alt={`Zdjęcie z albumu ${photo._id}`} className={`object-contain w-full h-auto rounded-[3px] ${selectMode === true && 'cursor-pointer'}`} />
                    </div>
                ))}
            </div>

            <ChangeAlbumNameDialog dialogRef={changeNameDialog} closeDialog={closeChangeNameDialog} getAlbumName={getAlbumName} albumName={albumName} albumID={albumID}/>
            <AddPhotosDialog dialogRef={addPhotosDialog} closeDialog={closeAddPhotosDialog} folderId={albumID} getPhotos={getPhotos}/>
        </section>
    )
}

export default page