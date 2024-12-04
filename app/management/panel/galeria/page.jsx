"use client"

import NewFolderDialog from '@components/management/galeria/newFolderDialog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
  const router = useRouter();

  const folderDialog = useRef(null)
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("");

  const openDialogHandle = () => {
    folderDialog?.current?.showModal()
  }

  const closeDialogHandle = () => {
    folderDialog?.current?.close();
  }

  const moveToPhotos = (name) => {
    router.push(`/management/panel/galeria/${name}`);
  }

  const setNewFolder = async () => {
    try{
      const result = await fetch("/api/gallery/folder/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ folderName: folderName })
      })
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch('/api/gallery/get')
        const data = await response.json()
        setFolders(data)
        console.log(data);
        
      }
      catch(err){
        console.error("Błąd: " + err)
      }
    }

    getData()
  }, [])

  return (
    <section className='w-full flex-1 pt-8'>
      <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light w-full' onClick={openDialogHandle}>Dodaj album</button>
      <div className='flex gap-3 w-full'>
        {folders?.map((folder, index) => (
          <div key={index} className='relative w-[200px] h-[230px] mt-[32px] cursor-pointer' data-name={folder?.folderName} onClick={(e) => moveToPhotos(e.currentTarget.dataset.name)}>
            <Image src={folder?.resources?.secure_url} width={200} height={230} className='object-cover h-full brightness-50'/>
            <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[20px]'>{folder.folderName}</p>
          </div>
        ))}
      </div>

      <NewFolderDialog dialogRef={folderDialog} closeDialog={closeDialogHandle} setFolderName={setFolderName} createFolder = {setNewFolder}/>
    </section>
  )
}

export default page