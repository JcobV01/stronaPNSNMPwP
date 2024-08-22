import Image from 'next/image'
import React from 'react'

import ksjanczura from '@public/assets/images/priests/ks-wojciech.webp'
import ksbubula from '@public/assets/images/priests/ks-daniel.webp'
import ksbodziony from '@public/assets/images/priests/ks-piotr.webp'
import kspolek from '@public/assets/images/priests/ks-stanislaw.webp'
import kskopacz from '@public/assets/images/priests/sp-ks-roman.webp'
import ksdziedzic from '@public/assets/images/priests/sp-ks-michal.webp'
import PreviousPriest from '@components/priests/PreviousPriest'
import Title from '@components/Title'

const duszpasterze = () => {

  const prevPriests = [
    {
      image: ksbubula,
      name: "Ks. Daniel Bubula",
      dates: ["10 sierpnia 2019r.", "12 sierpnia 2023r."]
    },
    {
      image: ksbodziony,
      name: "Ks. Piotr Bodziony",
      dates: ["12 sierpnia 2013r.", "10 sierpnia 2019r."]
    },
    {
      image: kspolek,
      name: "Ks. Stanisław Polek",
      dates: ["25 marca 2006r.", "12 sierpnia 2013r."]
    },
    {
      image: kskopacz,
      name: "Śp. Ks. Roman Kopacz",
      dates: ["4 sierpnia 1999r.", "1 marca 2006r."]
    },
    {
      image: ksdziedzic,
      name: "Śp. Ks. Michał Dziedzic",
      dates: ["2 kwietnia 1985r.", "5 lipca 1999r."]
    }
  ]

  return (
    <section className='pt-[50px] flex flex-col items-center px-[20px]'>
      <Title title="Duszpasterze" title2="" subtitle="Księża proboszczowie"/>
      <h4 className='text-[25px] font-semibold tracking-[2.5px] text-center mt-[120px] mb-[60px] lg:text-[20px] lg:mt-[70px]'>Aktualny proboszcz</h4>
      
      <article className='flex lg:flex-col shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-r-[5px]'>
        <Image 
          src={ksjanczura}
          width={250}
          height={250}
          alt='Zdjęcie Ks. Wojciech Janczura'
          className='brightness-[0.8]'
        />
        <div className='bg-white px-[50px] py-[30px] w-[550px] flex flex-col gap-[17px] lg:w-[250px]'>
          <h5 className='text-[25px] font-bold tracking-[3px] lg:text-[20px]'>KSIĄDZ <br /> WOJCIECH JANCZURA</h5>
          <p className='text-[15px] font-light tracking-[1.7px] lg:text-[12px]'>proboszcz parafii Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach</p>
          <p className='text-[15px] tracking-[1.7px] lg:text-[12px]'>Od 13 sierpnia 2023r.</p>
        </div>
      </article>

      <h4 className='text-[25px] font-semibold tracking-[2.5px] text-center mt-[120px] mb-[60px] lg:text-[20px]'>Poprzedni proboszczowie</h4>

      <div className='flex flex-wrap gap-[30px] w-[1075px] justify-center xl:w-[900px] lg:w-[100%]'>
        {prevPriests.map((priest) => (
          <PreviousPriest image={priest.image} name={priest.name} dates={priest.dates} key={priest.name}/>
        ))}
      </div>
    </section>
  )
}

export default duszpasterze