"use client"

import React, { useState } from 'react'

const AddPhotosDialog = ({ folderId, dialogRef, closeDialog, getPhotos }) => {
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event) => {
        setFiles(event.target.files);
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

    return (
        <dialog ref={dialogRef} className='w-[60%]'>
            <div className='flex flex-col gap-4 p-4'>
                <h2>Dodaj zdjęcia</h2>
                <div>
                    <h2>Upload Images</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                        />
                        <button type="submit">{uploading === true ? <div className='loader-main mx-auto'></div> : 'Upload'}</button>
                    </form>
                    {status && <p>{status}</p>}
                </div>
            </div>
            <button onClick={closeDialog}>Anuluj</button>
        </dialog>
    )
}

export default AddPhotosDialog