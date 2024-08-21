import Title from '@components/Title'
import Image from 'next/image'

import rlIcon from '@public/assets/icons/liturgical-calendar/bookmark.svg'
import orIcon from '@public/assets/icons/liturgical-calendar/open-book.svg'
import ckIcon from '@public/assets/icons/liturgical-calendar/book.svg'
import DayCard from './components/DayCard'

const Kalendarz = () => {
  return (
    <section id="kalendarz" className='my-[140px] flex flex-col gap-[70px] sm:my-[100px] sm:gap-0'>
      <Title title="Kalendarz" title2="Liturgiczny" subtitle="Czytania na każdy dzień"/>

      <article className='flex justify-between w-[1075px] gap-[25px] m-auto xl:w-[800px] lg:w-[100%] lg:px-[20px] xl:flex-col'>
        <div className='flex gap-[20px] bg-[#5A7889] rounded-[5px] items-center w-[275px] p-[15px] xl:w-full xl:flex-1'>
          <Image src={rlIcon} width={50} height={50} alt="Ikona do sekcji rok liturgiczny"/>
          <p className='text-white text-[17px]'>Rok liturgiczny: <span className='font-semibold'>B</span></p>
        </div>

        <div className='flex flex-1 gap-[20px] bg-[#5A7889] rounded-[5px] items-center p-[15px] xl:w-full xl:flex-1'>
          <Image src={orIcon} width={50} height={50} alt="Ikona do sekcji rok liturgiczny"/>
          <p className='text-white text-[17px]'>Okres roku liturgicznego: <span className='font-semibold'>Okres zwykły</span></p>
        </div>

        <div className='flex gap-[20px] bg-[#5A7889] rounded-[5px] items-center w-[275px] p-[15px] xl:w-full xl:flex-1'>
          <Image src={ckIcon} width={50} height={50} alt="Ikona do sekcji rok liturgiczny"/>
          <p className='text-white text-[17px]'>Cykl czytań: <span className='font-semibold'>II</span></p>
        </div>
      </article>

      <article className='flex flex-col gap-[30px] sm:mt-[30px]'>
        <DayCard/>
        <DayCard/>
        <DayCard/>
      </article>
    </section>
  )
}

export default Kalendarz