'use client'

import Title from '@components/Title'
import TitleCard from '@components/home/parafia/components/TitleCard'
import useIntersectionObserver from '@hooks/useObserver';

import historyCard from '@public/assets/images/parish-cards/history-card.webp'
import eventCard from '@public/assets/images/parish-cards/event-card.webp'
import nationalsCard from '@public/assets/images/parish-cards/nationals-card.webp'
import priestsCard from '@public/assets/images/parish-cards/priests-card.webp'
import cemeteryCard from '@public/assets/images/parish-cards/cemetery-card.webp'
import sacramentsCard from '@public/assets/images/parish-cards/sacraments-card.webp'

const Parafia = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  return (
    <section id="parafia" ref={ref} className={`transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
      <div className='pt-[70px] flex-center flex-col sm:pt-[40px]'>
        <Title title="Parafia" title2="" subtitle="Informacje ogólne" />
        <article className='grid grid-cols-4 gap-[25px] mt-[70px] xl:grid-cols-2 sm:grid-cols-1 sm:mt-[40px] sm:w-full'>

          <div className="col-span-2 row-span-1 w-[525px] h-[250px] rounded-[15px] xl:col-span-2 sm:mx-auto sm:w-[250px] sm:col-span-1 sm:row-span-1 sm:bg-center" style={{ backgroundImage: `url(${historyCard.src})` }}>
            <TitleCard subtitle={'DZIEJE PARAFII'} title={'Historia'} link={'/historia'} />
          </div>

          <div className="col-start-3 row-span-2 w-[250px] h-[400px] rounded-[15px] xl:col-span-1 sm:mx-auto sm:h-[250px] sm:row-span-1" style={{ backgroundImage: `url(${eventCard.src})` }}>
            <TitleCard subtitle={'GODZINY NABOŻEŃSTW'} title={'Nabożeństwa'} link={'/nabozenstwa'} />
          </div>

          <div className="col-start-4 row-span-2 w-[250px] h-[400px] rounded-[15px] xl:col-span-1 sm:mx-auto sm:h-[250px] sm:row-span-1" style={{ backgroundImage: `url(${nationalsCard.src})` }}>
            <TitleCard subtitle={'KSIĘŻA I SIOSTRY ZAKONNE'} title={'Rodacy'} link={'/rodacy'} />
          </div>

          <div className="row-span-3 w-[250px] h-[400px] rounded-[15px] xl:col-span-1 sm:mx-auto sm:h-[250px] sm:row-span-1" style={{ backgroundImage: `url(${priestsCard.src})` }}>
            <TitleCard subtitle={'KSIĘŻA W NASZEJ PARAFII'} title={'Duszpasterze'} link={'/duszpasterze'} />
          </div>

          <div className="row-span-3 w-[250px] h-[400px] rounded-[15px] xl:col-span-1 sm:mx-auto sm:h-[250px] sm:row-span-1" style={{ backgroundImage: `url(${cemeteryCard.src})` }}>
            <TitleCard subtitle={'REGULAMIN'} title={'Cmentarz'} link={'/cmentarz'} />
          </div>

          <div className="col-start-3 col-span-2 row-start-3 w-[525px] h-[250px] rounded-[15px] xl:col-span-2 xl:row-start-7 sm:col-span-1 sm:mx-auto sm:w-[250px] sm:row-span-1" style={{ backgroundImage: `url(${sacramentsCard.src})` }}>
            <TitleCard subtitle={'INFORMACJE'} title={'Sakramenty'} link={'/sakramenty'} />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Parafia