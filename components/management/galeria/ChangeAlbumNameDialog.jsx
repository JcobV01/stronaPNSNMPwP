"use client"

import React, { useEffect, useState } from 'react'

const ChangeAlbumNameDialog = ({dialogRef, closeDialog, albumName, albumID, getAlbumName}) => {

  const [newName, setNewName] = useState('')

  const updateName = async () => {
    try{
      const response = await fetch('/api/gallery/albums/changename', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({albumID, newName}) 
      })

      if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || "Błąd podczas aktualizacji folderu");
      }

      getAlbumName()
      closeDialog()
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <dialog ref={dialogRef} className='w-[60%]'>
        <div className='flex flex-center flex-col gap-2'>
            <h2>Zmień nazwę albumu</h2>
            <input type="text" onChange={(e) => setNewName(e.target.value)} placeholder={albumName}/>
            <div>
                <button onClick={closeDialog}>Anuluj</button>
                <button onClick={updateName}>Zatwierdź</button>
            </div>
        </div>
    </dialog>
  )
}

export default ChangeAlbumNameDialog