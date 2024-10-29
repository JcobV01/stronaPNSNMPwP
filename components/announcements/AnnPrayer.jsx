import Image from 'next/image'

import annBg from '@public/assets/images/background-images/announcements-background-image.webp'

const AnnPrayer = () => {
  return (
    <article className='relative overflow-hidden w-full py-[70px] flex flex-col gap-[30px]'>
        <h4 className='text-white z-20 relative text-[25px] md:text-[20px] tracking-[2.5px] text-center'>Modlitwa za zmarłych</h4>
        <hr  className='w-[10%] border-[#5A7889] z-20 m-auto'/>
        <p className='text-white z-20 relative font-extralight text-[15px] tracking-[2px] w-[1000px] lg:w-[90%] m-auto text-center'>Pamiętajmy w naszych modlitwach o wszystkich tych, którzy odeszli z tego świata. Niech ich dusze spoczywają w wiecznym pokoju i niech znajdą zasłużony odpoczynek w Bożej obecności. Każda chwila wspomnienia, każda modlitwa, jaką składamy w ich intencji, niech będzie dla nich źródłem światła i pokoju. Prośmy o Boże miłosierdzie dla naszych zmarłych, aby mogli cieszyć się wiecznym szczęściem w niebie.</p>
        <Image src={annBg} width="auto" height={1000} className='object-cover object-center absolute top-[50%] translate-y-[-50%] left-0 w-full z-10 brightness-[0.25] sm:h-full sm:w-auto'/>
    </article>
  )
}

export default AnnPrayer