"use client"

import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

const page = () => {
    const { name } = useParams()
    // const folderName = useMemo(() => decodeURIComponent(name), [name])
    // const [photos, setPhotos] = useState([])

    const [files, setFiles] = useState([]);
    const [folderId, setFolderId] = useState('46b17908-c396-4532-a370-a761122b09c3');
    const [status, setStatus] = useState('');

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFolderId('46b17908-c396-4532-a370-a761122b09c3')
        if (!folderId || files.length === 0) {
            setStatus('Please provide folderId and select at least one file.');
            return;
        }

        const formData = new FormData();
        formData.append('folderId', folderId);

        // Dodajemy wszystkie pliki do formData
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        try {
            const response = await fetch('http://localhost:7000/api/photos', {
                method: 'POST',
                headers: {
                    'x-api-key': 'isJFu6UoIZELuSImxy75BlIIRZUsGgGC',
                },
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Files uploaded successfully');
                console.log(data.filePaths);  // Możesz tu obsłużyć ścieżki do zdjęć
            } else {
                setStatus(data.message || 'Upload failed');
            }
        } catch (error) {
            setStatus('Error uploading files');
            console.error(error);
        }
    };

    const getPhotos = async () => {
        const response = await fetch("http://localhost:7000/api/albums", {
            method: "GET",
            headers: {
                'x-api-key': 'isJFu6UoIZELuSImxy75BlIIRZUsGgGC',
                // 'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ name: 'testowyfolder' })
        })

        const data = await response.json()
        // setPhotos(data || [])
        console.log(data)
    }

    const getPhotosIn = async () => {
        const response = await fetch(`http://localhost:7000/api/photos/6757ff08a5fa16016660e67d`, {
            method: "GET",
            headers: {
                'x-api-key': 'isJFu6UoIZELuSImxy75BlIIRZUsGgGC',
                // 'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ folderId: '1870d512-0af0-46fc-8904-5cc1ca7d5450' })
        })

        const data = await response.json()
        // setPhotos(data || [])
        console.log(data)
    }

    const [folderName, setFolderName] = useState('')

    const createFolder = async () => {
        try{
            const response = await fetch('http://localhost:7000/api/albums', {
                method: "POST",
                headers: {
                    'x-api-key': 'isJFu6UoIZELuSImxy75BlIIRZUsGgGC',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: folderName  })
            })
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <section className='flex gap-8 flex-col flex-1 pt-[40px] w-full'>
            <button onClick={getPhotos}>Click</button>


            <div>
                <h2>Upload Images</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter album folderId"
                        value={folderId}
                        onChange={(e) => setFolderId(e.target.value)}
                    />
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                    />
                    <button type="submit">Upload</button>
                </form>
                {status && <p>{status}</p>}
            </div>

            <button onClick={getPhotosIn}>Download</button>


        <div>
            <input type="text" onChange={(e) => setFolderName(e.target.value)} />
            <button onClick={createFolder}>Create Folder</button>
        </div>
            {/* <div className='flex gap-4 items-center'>
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
            </div> */}
        </section>
    )
}

export default page