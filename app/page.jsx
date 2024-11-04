import dynamic from 'next/dynamic'

const Parafia = dynamic(() => import('@components/home/parafia/Parafia'), {ssr: false, loading: () => <div className='w-full mt-[10px]'><div className='loader-main mx-auto'></div></div>});
const Kalendarz = dynamic(() => import('@components/home/kalendarz/Kalendarz'), {ssr: false, loading: () => <div className='w-full mt-[10px]'><div className='loader-main mx-auto'></div></div>});
const Grupy = dynamic(() => import('@components/home/Grupy'), {ssr: false, loading: () => <div className='w-full mt-[10px]'><div className='loader-main mx-auto'></div></div>});
const Galeria = dynamic(() => import('@components/home/Galeria'),{ssr: false, loading: () => <div className='w-full mt-[10px]'><div className='loader-main mx-auto'></div></div>});
const Kontakt = dynamic(() => import('@components/home/Kontakt'), {ssr: false, loading: () => <div className='w-full mt-[10px]'><div className='loader-main mx-auto'></div></div>});
const Quote = dynamic(() => import('@components/Quote'), {ssr: false, loading: () => <div className='w-full mt-[10px]'><div className='loader-main mx-auto'></div></div>});


const page = () => {
  return (
    <>
      <Parafia />
      <Kalendarz />
      <Grupy />
      <Galeria />
      <Kontakt />
      <Quote text="Bez Maryi Ewangelia staje się bezcielesna i bezkształtną, przemienia się w ideologię, w duchowy racjonalizm." author="~ św. Jan Paweł II" />
    </>
  )
}

export default page