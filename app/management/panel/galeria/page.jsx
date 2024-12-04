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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

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
    try {
      const result = await fetch("/api/gallery/folder/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ folderName: folderName })
      })
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/gallery/get')
        const data = await response.json()
        setFolders(data)
        console.log(data);

      }
      catch (err) {
        console.error("Błąd: " + err)
      }
    }

    getData()
  }, [])

  const filteredFolders = () => {
    if (!searchQuery) return folders;

    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filtrowanie folderów w każdym roku
    const filtered = Object.entries(folders).reduce((acc, [year, folderList]) => {
      const filteredList = folderList.filter(folder =>
        folder.folderName.toLowerCase().includes(lowerCaseQuery)
      );

      if (filteredList.length > 0) {
        acc[year] = filteredList; 
      }

      return acc;
    }, {});

    return filtered;
  };

  const getUniqueYears = () => {
    const years = Object.keys(folders);
    return [...years];
  }

  return (
    <section className='w-full flex-1 pt-8'>
      <div className='w-full flex justify-between'>
        <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light w-[300px]' onClick={openDialogHandle}>Dodaj album</button>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className='w-[200px] px-[10px] rounded-[5px]'>
          <option value="">Wybierz rok</option>
          {getUniqueYears().map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <input type="search" placeholder='Wyszukaj album' className='w-[600px] px-[10px] rounded-[5px]' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div className='flex flex-col gap-3 w-full mt-8 h-[600px] px-[10px] overflow-y-auto'>
        {Object.entries(filteredFolders()).map(([year, folders]) => (
          <div className='w-full' key={year}>
            <h2 className='text-[20px] text-center text-black'>{year}</h2>
            <hr className='border-gray-400 w-full' />
            <div className='flex flex-wrap gap-4'>
              {folders.map((folder, index) => (
                <div key={index} className='relative w-[200px] h-[230px] mt-[32px] cursor-pointer' data-name={folder?.folderName} onClick={(e) => moveToPhotos(e.currentTarget.dataset.name)}>
                  <Image src={folder?.resources?.secure_url} width={200} height={230} className='object-cover h-full brightness-50' alt="Zdjęcie przedstawiające album" />
                  <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[20px] text-center'>{folder.folderName}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <NewFolderDialog dialogRef={folderDialog} closeDialog={closeDialogHandle} setFolderName={setFolderName} createFolder={setNewFolder} />
    </section>
  )
}

export default page