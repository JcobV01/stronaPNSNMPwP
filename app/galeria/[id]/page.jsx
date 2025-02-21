"use client"

import ImageBrowserDialog from '@components/management/galeria/ImageBrowserDialog'
import Title from '@components/Title'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const album = () => {
  const { id } = useParams()
  const imageBrowser = useRef(null)
  const [photos, setPhotos] = useState([])
  const [album, setAlbum] = useState([])
  const [activePhoto, setActivePhoto] = useState('')
  const [columns, setColumns] = useState(1)
  const [coords, setCoords] = useState([])
  const [siteHeight, setSiteHeight] = useState(0)
  const resizeTimeout = useRef(null);

  const getImageDimensions = (url) => {
    return new Promise((resolve, reject) => {
      const img = new window.Image(); // używamy window.Image
      img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
      img.onerror = reject;
      img.src = url;
    });
  }

  const calculateColumns = async () => {
    const width = window.innerWidth;
    if (width >= 1536) return 4;
    else if (width >= 1024) return 3;
    else if (width >= 768) return 2;
    else return 1;
  }

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
      });

      const data = await response.json();

      let columnHeights = [0, 0, 0, 0]; // Wysokość każdej z 4 kolumn
      const tempCoords = await Promise.all(data.map(async (element, index) => {
        const dimensions = await getImageDimensions(element.fullurl);
        const cols = await calculateColumns()
        const column = index % cols; // Wyliczenie kolumny

        const imgWidth = window.innerWidth > 1279 ? 360 :
                         window.innerWidth > 767 ? 330 :
                         window.innerWidth > 639 ? 410 :
                         window.innerWidth <= 639 && window.innerWidth * 0.9;

        const tempY = columnHeights[column]; // Pobieramy aktualną wysokość kolumny
        columnHeights[column] += (dimensions.height * imgWidth / dimensions.width) + 10; // Aktualizujemy wysokość kolumny

        return { x: column * imgWidth, y: tempY };
      }));

      setSiteHeight(Math.max(...columnHeights))
      setCoords(tempCoords);
      setPhotos(data);
    } catch (err) {
      console.error(err);
    }
  };

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

  const handleResize = () => {
    clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(() => {
      getPhotos();

      const getCols = async () => {
        setColumns(await calculateColumns())
      }
  
      getCols()


    }, 500); // Debounce - wykonuje się po 500ms od ostatniego resize
  };

  useEffect(() => {
    getAlbum();
    getPhotos();
    
    const getCols = async () => {
      setColumns(await calculateColumns())
    }

    getCols()

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  return (
    <section className='py-[70px] flex flex-col gap-[70px] items-center overflow-x-hidden'>
      <Title title="Galeria" title2="" subtitle="Zdjęcia z wydarzeń" />
      <div className="w-[1430px] flex flex-col gap-2 2xl:w-[1070px] xl:w-[980px] lg:w-[660px] md:w-[400px] sm:w-[90%]">
        <h4 className='text-[40px] font-bold xl:text-[35px] md:text-[30px] md:text-center sm:text-[20px]'>{album.name}</h4>
        <p className='text-[17px] font-light xl:text-[16px] md:text-[15px] md:text-center'>Autor albumu: <span className='font-medium'>{album.author === "Jakub Wadycki" || album.author === "Artur Plebanczyk" ? "Parafia pw. Niepokalanego Serca NPM w Przybysławicach" : album.author}</span></p>
        <p className='text-[17px] font-light xl:text-[16px] md:text-[15px] md:text-center'>Data wydarzenia: <span className='font-medium'>{convertDate(album.eventDate)}</span></p>
      </div>
      <div className='relative w-[1430px] 2xl:w-[1070px] xl:w-[980px] lg:w-[660px] md:w-[400px] sm:w-[90%] justify-center flex-col mt-[32px]' style={{ height: columns > 1 && siteHeight, display: columns === 1 && 'flex' }}>
        {photos?.map((photo, index) => (
          <div key={index} id={index} className='mb-[10px] cursor-pointer hover:brightness-75 duration-500'
            style={{
              transform: columns > 1 && `translateX(${coords[index].x}px) translateY(${coords[index].y}px)`,
              position: columns > 1 && 'absolute'
            }}
            onClick={() => openImageBrowser(photo._id)}>
            <Image src={photo.fullurl} placeholder='blur' blurDataURL={photo.base64hash} width={350} height={250} alt="Zdjęcie z galerii" loading="lazy" className='rounded-[3px] xl:w-[320px] md:w-[400px] sm:w-[100%]' />
          </div>
        ))}
      </div>

      <p className='text-[18px] sm:text-[15px] md:text-center'>To już wszystko z tego wydarzenia - zapraszamy do obejrzenia zdjęć z <Link href="/galeria" className='font-bold text-[#5a7889]'>innych albumów.</Link></p>
      <ImageBrowserDialog imageBrowserRef={imageBrowser} photos={photos} activePhotoID={activePhoto} />
    </section>

  )
}

export default album