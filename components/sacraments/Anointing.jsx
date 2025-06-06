'use client'

import React from 'react'
import useIntersectionObserver from '@hooks/useObserver';

const Anointing = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0
  });
  return (
    <article ref={ref} className={`w-[1400px] 2xl:w-[90%] pb-[100px] transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
      <h4 className='text-[40px] font-medium tracking-[8px] text-center sm:text-[20px]'>Sakrament namaszczenia chorych</h4>
      <div className='text-center mt-[15px]'>
        <h5 className='text-[25px] tracking-[10px] sm:text-[18px] sm:tracking-[5px]'>W naszej parafii</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Sakrament chorych sprawowany jest w każdy I piątek miesiąca, a w razie potrzeby w każdej chwili.</p>
      </div>
      <div className='mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Co Bóg objawił o sakramencie Namaszczenia Chorych przez Jakuba Apostoła?</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>„Choruje ktoś wśród was? Niech sprowadzi kapłanów Kościoła, by się modlili nad nim i namaścili go olejem w imię Pana. A modlitwa pełna wiary będzie dla chorego ratunkiem i Pan go podźwignie, a jeśli popełniłby grzechy, będą mu odpuszczone: (Jk 5,14-15).</p>
      </div>
      <div className='text-center mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] sm:text-[18px] sm:tracking-[5px]'>Jaki jest znak sakramentu Namaszczenia Chorych?</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Jest namaszczenie olejem świętym, któremu towarzyszy specjalna modlitwa.</p>
      </div>
      <div className='mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Co sprawia Chrystus w Sakramencie Namaszczenia Chorych?</h5>
        <ul className='mt-[30px] tracking-[1.8px] text-[18px] sm:text-[14px]'>
          <li>- pomnaża łaskę uświęcającą, albo ją przywraca,</li>
          <li>- odpuszcza grzechy powszednie, a gdy chory nie może się wyspowiadać, również grzechy ciężkie,</li>
          <li>- gładzi karę doczesną za grzechy,</li>
          <li>- pociesza i umacnia chorego,</li>
          <li>- przynosi ulgę e chorobie, a nawet przywraca zdrowie.</li>
        </ul>
      </div>
      <div className='text-center mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] sm:text-[18px] sm:tracking-[5px]'>Kto udziela Sakramentu Namaszczenia Chorych?</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Udziela go kapłan.</p>
      </div>
      <div className='text-center mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] sm:text-[18px] sm:tracking-[5px]'>Co to jest Wiatyk?</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Jest to Komunia św. podawana choremu znajdującemu się w obliczu śmierci.</p>
      </div>
      <div className='mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Co przygotować na przyjście kapłana do chorego?</h5>
        <ul className='mt-[30px] tracking-[1.8px] text-[18px] sm:text-[14px]'>
          <li>- nakryć stół biały obrusem,</li>
          <li>- na stole umieścić: krzyż, świece, wodę święconą, watę, wodę w szklance i łyżeczkę,</li>
          <li>- uczestniczyć w obrzędach.</li>
        </ul>
      </div>
      <h5 className='text-center text-[25px] tracking-[10px] mt-[50px] sm:text-[18px] sm:tracking-[5px]'>Więcej: Katechizm Kościoła Katolickiego dla Młodych /Youcat/ nr. 240-247; KKK nr. 1502-1525</h5>
    </article>
  )
}

export default Anointing