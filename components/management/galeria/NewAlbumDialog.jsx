import React from 'react'

const NewAlbumDialog = ({ dialogRef, albumName, setAlbumName, closeDialog, eventDate, setEventDate, createFolder }) => {
  return (
    <dialog ref={dialogRef} className='p-8 w-[50%] bg-[#f0f0f0] backdrop:bg-[#00000098]'>
      <div className='w-full h-full flex flex-col gap-4'>
        <h2 className='text-center text-lg font-medium text-[20px] py-[20px]'>Dodaj nowy album</h2>
        <p className='text-[14px]'>Prosimy o wpisywanie tylko nazwy wydarzenia np. "Boże Narodzenie" oraz o spójne nazewnictwo wzgledem ubiegłych lat.</p>
        <input type="text" className='h-[50px] px-[10px]' placeholder='Wpisz nazwę nowego albumu' value={albumName} onChange={(e) => setAlbumName(e.target.value)} />
        <input type="date" className='h-[50px] px-[10px]' value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        <div className='flex gap-4 w-full'>
          <button className='bg-[#8a1616] text-white py-2 px-4 rounded-md flex-1' onClick={() => closeDialog()}>Anuluj</button>
          <button className='bg-[#0e5115] text-white py-2 px-4 rounded-md flex-1' onClick={() => createFolder()}>Dodaj</button>
        </div>
      </div>
    </dialog>
  )
}

export default NewAlbumDialog