"use client"

import ImageBrowserDialog from '@components/management/galeria/ImageBrowserDialog'
import Title from '@components/Title'
import Image from '@node_modules/next/image'
import Link from '@node_modules/next/link'
import { useParams } from '@node_modules/next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const album = () => {
  const { id } = useParams()
  const imageBrowser = useRef(null)
  const [photos, setPhotos] = useState([])
  const [album, setAlbum] = useState([])
  const [activePhoto, setActivePhoto] = useState('') //stan przechowujący aktywne zdjęcie w przeglądarce (służy do aktualizacji wymiarów)

  const getPhotos = async () => {
    try {
      const response = await fetch('/api/gallery/photos/get', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          albumID: id
        })
      })

      const data = await response.json()
      setPhotos(data)
    }
    catch (err) {
      console.error(err)
    }
  }

  const getAlbum = async () => {
    try {
      const response = await fetch('/api/gallery/albums/getname', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          albumID: id
        })
      })

      const data = await response.json()
      setAlbum(data)
      console.log(data);
      
    }
    catch (err) {
      console.error(err)
    }
  }

  const openImageBrowser = (photoID) => {
    setActivePhoto(photoID)
    imageBrowser.current.showModal()
  }

  const convertDate = (dateString) => {
    const date = String(dateString).split("-");
    return `${date[2]}.${date[1]}.${date[0]} r.`;
  }

  useEffect(() => {
    getAlbum()
    getPhotos()
  }, [])

  return (
    <section className='py-[70px] flex flex-col gap-[70px] items-center'>
      <Title title="Galeria" title2="" subtitle="Zdjęcia z wydarzeń" />
      <div className="w-[1430px] flex flex-col gap-2">
        <h4 className='text-[40px] font-bold'>{album.name}</h4>
        <p className='text-[17px] font-light'>Autor albumu: <span className='font-medium'>{album.author === "Jakub Wadycki" || album.author === "Artur Plebańczyk" ? "Parafia pw. Niepokalanego Serca NPM w Przybysławicach" : album.author}</span></p>
        <p className='text-[17px] font-light'>Data wydarzenia: <span className='font-medium'>{convertDate(album.eventDate)}</span></p>
      </div>
      <div className='columns-4 w-[1430px]'>
        {photos?.map((photo, index) => (
          <div key={index} className='mb-[10px] cursor-pointer hover:brightness-75 duration-500' onClick={() => openImageBrowser(photo._id)}>
            <Image src={photo.fullurl} width={350} height={250} alt="Zdjęcie z galerii" className='rounded-[3px]'/>
          </div>
        ))}
      </div>

      <p className='text-[18px] '>To już wszystko z tego wydarzenia - zapraszamy do obejrzenia zdjęć z <Link href="/galeria" className='font-bold text-[#5a7889]'>innych albumów.</Link></p>
      <ImageBrowserDialog imageBrowserRef={imageBrowser} photos={photos} activePhotoID={activePhoto}/>
    </section>

  )
}

export default album