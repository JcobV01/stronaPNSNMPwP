"use client"

import React, { useState } from 'react'

const ChangeAlbumNameDialog = ({ dialogRef, closeDialog, album, albumID, getAlbumName }) => {

  const [newName, setNewName] = useState('')

  const updateName = async () => {
    try {
      const response = await fetch('/api/gallery/albums/changename', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ albumID, newName })
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Błąd podczas aktualizacji folderu");
      }

      getAlbumName()
      closeDialog()
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <dialog ref={dialogRef} className='w-[50%] p-8 bg-[#f0f0f0] backdrop:bg-[#00000098]'>
      <div className='w-full h-full flex flex-col gap-4'>
        <h2 className='text-center text-lg font-medium text-[20px] py-[20px]'>Zmień nazwę albumu</h2>
        <p className='text-[14px]'>Prosimy o wpisywanie tylko nazwy wydarzenia np. "Boże Narodzenie" oraz o spójne nazewnictwo wzgledem ubiegłych lat.</p>
        <input className='h-[50px] px-[10px] rounded-[5px]' type="text" onChange={(e) => setNewName(e.target.value)} placeholder={album.name} />
        <div className='flex justify-between w-full'>
          <button className='bg-[#8a1616] text-white py-2 px-4 rounded-md flex-1 max-w-[250px]' onClick={closeDialog}>Anuluj</button>
          <button className='bg-[#0e5115] text-white py-2 px-4 rounded-md flex-1 max-w-[250px]' onClick={updateName}>Zatwierdź</button>
        </div>
      </div>
    </dialog>
  )
}

export default ChangeAlbumNameDialog