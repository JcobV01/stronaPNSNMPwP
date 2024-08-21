import Title from '@components/Title'
import TitleCard from '@components/home/parafia/components/TitleCard'

import mainBgImage from '@public/assets/images/background-images/main-background-image.webp'
import historyCard from '@public/assets/images/parish-cards/history-card.webp'

const Parafia = () => {
  return (
    <section id="parafia" style={{ backgroundImage: `url(${mainBgImage})` }}>
      <div className='pt-[70px] flex-center flex-col'>
        <Title title="Parafia" title2="" subtitle="Informacje ogólne" />
        <article className='grid grid-cols-4 grid-rows-3 gap-10 mt-[20px]'>
          <div className="col-span-2 row-span-1 w-[525px] h-[250px]" style={{ backgroundImage: `url(${historyCard})`}}>
            <TitleCard subtitle={'DZIEJE PARAFII'} title={'Historia'} link={'/historia'}/>
          </div>
          <div className="col-start-3 row-span-2">
            <h1>test</h1>
          </div>
          <div className="col-start-4 row-span-2">
            <h1>test</h1>
          </div>
          <div className="row-span-3">
            <h1>test</h1>
          </div>
          <div className="row-span-3">
            <h1>test</h1>
          </div>
          <div className="col-start-3 col-span-2 row-start-3">
            <h1>test</h1>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Parafia