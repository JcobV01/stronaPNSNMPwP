'use client'

import Title from '@components/Title'
import useIntersectionObserver from '@hooks/useObserver'
import { Icon } from '@iconify/react'
import Image from 'next/image'

import Link from "next/link"
import { useEffect, useState } from 'react'

const Galeria = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true)

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  const getAlbums = async () => {
    try {
      const response = await fetch("/api/gallery/albums/getall", {
        method: "POST",
      });

      const data = await response.json();

      const sortedAlbums = data.sort((a, b) => {
        if (a.year === b.year) {
          return new Date(b.createdAt) - new Date(a.createdAt); // Jeśli ten sam rok, sortuj po dacie utworzenia
        }
        return b.year - a.year;
      });

      setAlbums(sortedAlbums.slice(0,3));
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <section id="galeria" ref={ref} className={`flex-center transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
      <article className='mt-[70px] mb-[30px] w-[1400px] 2xl:w-[90%]'>
        <Title title="Galeria" title2="" subtitle="Najnowsze albumy" />
        <p className='text-[15px] font-medium tracking-[3px] text-center mt-[50px] sm:tracking-[1px] sm:text-[13px]'>Nasza parafia jest miejscem żywego świadectwa wiary, gdzie odbywa się wiele różnorodnych wydarzeń i uroczystości. W Galerii Parafialnej prezentujemy fotografie, które oddają atmosferę tych wyjątkowych chwil. Zdjęcia są publikowane po każdym wydarzeniu, aby umożliwić wszystkim parafianom ponowne przeżycie ważnych momentów naszej wspólnoty oraz by dać okazję do zapoznania się z tym, co dzieje się w naszym kościele. Zapraszamy do regularnego odwiedzania galerii i dzielenia się wspomnieniami!</p>

        <div className='flex my-[75px] flex-center gap-[24px]'>
          {loading === false && albums.map((album) => (
            <Link href={`/galeria/${album.folderId}`} key={album.folderId} className='w-[30%] h-[600px]'>
              <div className='relative h-full'>
                <Image src={album.cover} placeholder='blur' blurDataURL={album.base64hash} alt={album.name} width={720} height={0} quality={100} className='object-cover h-full brightness-50'/>
                <p className='absolute top-2/4 left-1/2  -translate-y-1/2- -translate-x-1/2 text-[20px] text-white text-center font-semibold tracking-[4px]'>{album.name}</p>
                <p className='absolute left-1/2 top-[90%] -translate-x-1/2 text-[20px] text-white text-center font-semibold tracking-[4px]'>{album.eventDate}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className='flex justify-end mt-[80px] sm:justify-center'>
          <Link href="/galeria" className='flex gap-3 fold:gap-0'>
            <p className="text-[18px] tracking-[4px] font-medium sm:w-full sm:text-center sm:text-[15px] sm:tracking-[1px] fold:text-[13px]">Przejdź do pełnej galerii</p>
            <Icon icon="la:angle-double-right" width="20" height="27" alt="Ikona strzałki" />
          </Link>
        </div>

      </article>
    </section>
  )
}

export default Galeria