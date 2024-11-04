'use client'

import Title from '@components/Title'
import useIntersectionObserver from '@hooks/useObserver'
import { Icon } from '@iconify/react'

import Link from "next/link"

const Galeria = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  return (
    <section id="galeria" ref={ref} className={`flex-center transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
      <article className='mt-[70px] mb-[30px] w-[1400px] 2xl:w-[90%]'>
        <Title title="Galeria" title2="" subtitle="Najnowsze albumy" />
        <p className='text-[15px] font-medium tracking-[3px] text-center mt-[50px] sm:text-[13px]'>Nasza parafia jest miejscem żywego świadectwa wiary, gdzie odbywa się wiele różnorodnych wydarzeń i uroczystości. W Galerii Parafialnej prezentujemy fotografie, które oddają atmosferę tych wyjątkowych chwil. Zdjęcia są publikowane po każdym wydarzeniu, aby umożliwić wszystkim parafianom ponowne przeżycie ważnych momentów naszej wspólnoty oraz by dać okazję do zapoznania się z tym, co dzieje się w naszym kościele. Zapraszamy do regularnego odwiedzania galerii i dzielenia się wspomnieniami!</p>

        <div className='flex justify-end mt-[80px] sm:justify-center'>
          <Link href="/galeria" className='flex gap-3 fold:gap-0'>
            <p className="text-[18px] tracking-[4px] font-medium sm:w-full sm:text-center sm:text-[15px] sm:tracking-[1px] fold:text-[13px]">Przejdź do pełnej galerii</p>
            <Icon icon="la:angle-double-right" width="20" height="27" alt="Ikona strzałki"/>
          </Link>
        </div>

      </article>
    </section>
  )
}

export default Galeria