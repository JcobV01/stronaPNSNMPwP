"use client"

import { Icon } from '@node_modules/@iconify/react/dist/iconify';
import React, { useEffect, useState } from 'react'

const AddPhotosDialog = ({ folderId, dialogRef, closeDialog, getPhotos }) => {
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState('');
    const [uploading, setUploading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const filesToFileList = (filesArray) => {
        const dataTransfer = new DataTransfer(); // Tworzymy nowy obiekt DataTransfer
        filesArray.forEach((file) => dataTransfer.items.add(file)); // Dodajemy pliki do DataTransfer
        return dataTransfer.files; // Zwracamy nowy FileList
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        // handleFileChange();
        const fileList = filesToFileList(Array.from(event.dataTransfer.files));
        setFiles(fileList)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setUploading(true)

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
            const response = await fetch('/api/gallery/photos/add', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Files uploaded successfully');
                getPhotos()
                closeDialog()
                setUploading(false)
            } else {
                setStatus(data.message || 'Upload failed');
            }

        } catch (error) {
            setStatus('Error uploading files');
            console.error(error);
        }
    };

    useEffect(() => {console.log(files)},[files])

    return (
        <dialog ref={dialogRef} className='p-8 w-[50%] bg-[#f0f0f0] backdrop:bg-[#00000098]'>
            <div className='w-full h-full flex flex-col gap-4'>
                <h2 className='text-center text-lg font-medium text-[20px] py-[20px]'>Dodaj zdjęcia</h2>

                <p>Ilość wybranych plików: {files.length}</p>

                <div className={`flex items-center justify-center w-full h-64 border-2 ${isDragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-50'} border-dashed rounded-lg cursor-pointer hover:bg-gray-100`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <Icon icon="iconamoon:cloud-upload-fill" className='text-gray-500' width="40" height="40" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Wybierz pliki</span> lub przeciągnij i upuść</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG, WEBP</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} accept='image/png, image/jpg, image/jpeg, image/webp'/>
                    </label>
                </div>

                <div className='flex justify-between'>
                    <button className='bg-[#8a1616] text-white py-2 px-4 rounded-md flex-1 max-w-[250px]' onClick={closeDialog}>Anuluj</button>
                    <button className='bg-[#0e5115] text-white py-2 px-4 rounded-md flex-1 max-w-[250px]' onClick={handleSubmit}>{uploading ? <div class="loader-spin"></div> : 'Prześlij'}</button>
                </div>
            </div>
        </dialog>
    )
}

export default AddPhotosDialog