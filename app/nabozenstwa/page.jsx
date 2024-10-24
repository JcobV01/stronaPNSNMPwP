import Title from '@components/Title'
import Image from 'next/image'

import imgKrzyz from '@public/assets/images/services/krzyz.webp'
import imgLampion from '@public/assets/images/services/lampion.webp'
import imgMaryja from '@public/assets/images/services/maryja.webp'
import imgMonstrancja from '@public/assets/images/services/monstrancja.webp'
import imgMsze from '@public/assets/images/services/mszeswiete.webp'
import imgRozaniec from '@public/assets/images/services/rozaniec.webp'


const nabozenstwa = () => {
  return (
    <section className='pt-[50px] pb-[50px] px-[20px] flex items-center flex-col gap-[30px] text-center'>
      <Title title="Nabożeństwa" title2="" subtitle="Godziny Nabożeństw" />
      <article className='flex mt-[50px] shadow-[0px_4px_20px_#00000025] xl:flex-col'>
        <div className='flex sm:flex-col'> 
          <div className='bg-white w-[300px] p-[10px] flex-col flex-center gap-[5px] sm:py-[20px] fold:w-full'>
            <h4 className='text-[20px] font-semibold'>Msze święte</h4>
            <h5 className='text-[15px] font-light'>Niedziela i Święta obowiązujące</h5>
            <p className='text-[#5A7889] text-[15px] font-semibold'>8:00, 10:00 i 15:00</p>

            <h5 className='text-[15px] font-light'>Dni powszednie</h5>
            <p className='text-[#B0B0B0] text-[13px]'>Środa - Nowenna do MB Nieustającej Pomocy</p>
            <p className='text-[#B0B0B0] text-[13px]'>Piątek - Koronka do Bożego Miłosierdzia</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>17:00/18:00</p>

            <h5 className='text-[15px] font-light'>Pozostałe dni wg ustalenia</h5>
          </div>
          <Image src={imgMsze} width="300" height="auto" alt='Zjęcie do sekcji msze święte' className='fold:w-full'/>
        </div>

        <div className='flex xl:flex-row-reverse sm:flex-col'>
          <div className='bg-white w-[300px] p-[10px] flex-col flex-center gap-[5px] sm:py-[20px]'>
            <h4 className='text-[15px] font-light'>Różaniec - październik</h4>
            <p className='text-[#B0B0B0] text-[13px]'>Od poniedziałku do piątku</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>17:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>Sobota</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>7:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>Niedziela</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>15:00</p>

            <h4 className='text-[15px] font-light'>Zmiana tajemnic różańcowych</h4>
            <p className='text-[#B0B0B0] text-[13px]'>I Niedziela miesiąca</p>
            <p className='text-[#5A7889] text-[13px] font-semibold'>Różaniec dla kobiet - po Mszy o 8:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>II Niedziela miesiąca</p>
            <p className='text-[#5A7889] text-[13px] font-semibold'>Różaniec dla mężczyzn - po Mszy o 8:00</p>
          </div>
          <Image src={imgRozaniec} width="300" height="auto" alt='Zjęcie do sekcji rozaniec' />
        </div>
      </article>
      <article className='flex shadow-[0px_4px_20px_#00000025] xl:flex-col'>
        <div className='flex xl:flex-row-reverse sm:flex-col'>
          <Image src={imgLampion} width="300" height="auto" alt='Zjęcie do sekcji adwent' />
          <div className='bg-white w-[300px] p-[10px] flex-col flex-center gap-[5px] sm:py-[20px]'>
            <h4 className='text-[15px] font-light'>Roraty - adwent</h4>
            <p className='text-[#B0B0B0] text-[13px]'>Od poniedziałku do piątku</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>17:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>Sobota</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>7:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>Godzinki o Niepokalanym Poczęciu</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>6:30/17:30</p>
          </div>
        </div>

        <div className='flex sm:flex-col'>
          <Image src={imgKrzyz} width="300" height="auto" alt='Zjęcie do sekcji droga krzyżowa' />
          <div className='bg-white w-[300px] p-[10px] flex-col flex-center gap-[5px] sm:py-[20px]'>
            <h4 className='text-[15px] font-light'>Droga Krzyżowa - Wielki Post</h4>
            <p className='text-[#B0B0B0] text-[13px]'>Piątek</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>17:00/18:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>Wielki Piątek</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>9:00 i 17:30</p>
            <p className='text-[#B0B0B0] text-[13px]'>Niedziela Palmowa - Droga Krzyżowa ulicami parafii</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>19:00</p>

            <h4 className='text-[15px] font-light'>Gorzkie Żale - Wielki Post</h4>
            <p className='text-[#B0B0B0] text-[13px]'>Niedziela</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>14:30</p>
            <p className='text-[#B0B0B0] text-[13px]'>Wielki Piątek</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>Po Liturgii Męki Pańskiej</p>
          </div>
        </div>

      </article>
      <article className='flex shadow-[0px_4px_20px_#00000025] xl:flex-col'>
        <div className='flex sm:flex-col'>
          <div className='bg-white w-[300px] p-[10px] flex-col flex-center gap-[5px] sm:py-[20px]'>
            <h4 className='text-[15px] font-light'>Pierwsze dni miesiąca</h4>
            <p className='text-[#B0B0B0] text-[13px]'>I Czwartek</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>Adoracja - 16:00/17:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>I Piątek</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>Msza św. o Najświętszym Sercu Pana Jezusa - 7:00  i 17:00/18:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>I Sobota</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>Nabożeństwo wynagradzające Niepokalanemu Sercu NMP, Msza św. o Niepokalanym Sercu NMP – godz. 7.00</p>
          </div>
          <Image src={imgMonstrancja} width="300" height="auto" alt='Zjęcie do sekcji dni miesiaca' />
        </div>

        <div className='flex xl:flex-row-reverse sm:flex-col'>
          <div className='bg-white w-[300px] p-[10px] flex-col flex-center gap-[5px] sm:py-[20px]'>
            <h4 className='text-[15px] font-light'>Majówka - maj</h4>
            <p className='text-[#B0B0B0] text-[13px]'>Od poniedziałku do piątku</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>17:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>Sobota</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>7:00</p>
            <p className='text-[#B0B0B0] text-[13px]'>Niedziela</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>15:00</p>

            <h4 className='text-[15px] font-light'>Nabożeństwo Fatimskie</h4>
            <p className='text-[#B0B0B0] text-[13px]'>Od maja do października</p>
            <p className='text-[#5A7889] text-[15px] font-semibold'>Każdego 13-go dnia miesiąca</p>
          </div>
          <Image src={imgMaryja} width="300" height="auto" alt='Zjęcie do sekcji majówka' />
        </div>

      </article>
    </section>
  )
}

export default nabozenstwa