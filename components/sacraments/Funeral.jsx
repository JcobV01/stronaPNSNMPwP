'use client'

import React from 'react'
import useIntersectionObserver from '@hooks/useObserver';

const Funeral = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0
  });

  return (
    <article ref={ref} className={`w-[1400px] 2xl:w-[90%] pb-[100px] transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
      <h4 className='text-[40px] font-medium tracking-[8px] text-center sm:text-[20px]'>Chrześcijański pogrzeb</h4>
      <div className='mt-[15px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>W naszej parafii</h5>
        <div className='text-[18px] tracking-[1.8px] sm:text-[14px]'>
          <p className='mt-[30px]'>Pogrzeby urządzane są w kościele pw. Niepokalanego Serca NMP w Przybysławicach. Różaniec za zmarłych odbywa się w kaplicy cmentarnej (w zimie możliwe jest odmawianie Różańca w kościele).</p>
          <p className='mt-[30px]'>Kancelaryjne wymogi: akt zgonu, zaświadczenie o udzieleniu sakramentu chorych i wiatyku (Komunii świętej), jeśli zgon nastąpił poza parafią lub w szpitalu (wystawia je kapelan szpitala).</p>
          <p className='mt-[30px]'>Wypominki za zmarłych odbywają się w III i IV niedzielę miesiąca przed Mszą św. o godz. 10:00 oraz w listopadzie/różaniec za zmarłych (w środę i piątek o godz. 16:30).</p>
        </div>
      </div>
      <div className='mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Jaki związek istnieje między sakramentami i śmiercią chrześcijanina?</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Dzień śmierci jest dla chrześcijanina, po zakończeniu jego życia, dopełnieniem jego nowego życia rozpoczętego na chrzcie, wzmocnionego przez bierzmowanie i karmionego Eucharystią, będącą antycypacją uczty niebieskiej. Chrześcijański sens śmierci ukazuje się w świetle Śmierci i Zmartwychwstania Chrystusa, naszą jedyną nadzieją; chrześcijanin, który umiera w Chrystusie Jezusie, “opuszcza ciało i staje w obliczu Pana” (2Kor 5,8). 1680-1683</p>
      </div>
      <div className='mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Co wyraża pogrzeb chrześcijański?</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Obrzędy pogrzebu, mimo że uwzględniają sytuacje i tradycje różnych regionów, wyrażają paschalny charakter śmierci chrześcijańskiej w nadziei zmartwychwstania i sens łączności ze zmarłym, szczególnie przez modlitwę o oczyszczenie jego duszy. Kompendium KKK 1684-1685.</p>
      </div>
      <div className='mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Jakie są główne momenty celebracji pogrzebu?</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Obrzędy pogrzebu zawierają zazwyczaj cztery główne momenty: pozdrowienie wspólnoty słowami pocieszenia i nadziei, liturgia słowa, Ofiara eucharystyczna i pożegnanie zmarłego, w którym jego dusza polecana jest Bogu - źródle życia wiecznego, podczas gdy jego ciało zostaje złożone do grobu w oczekiwaniu na zmartwychwstanie. Kompendium KKK 1686-1690.</p>
      </div>
      <div className='mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Jaki charakter ma chrześcijański pogrzeb?</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Chrześcijański pogrzeb jest posługą wspólnoty swoim zmarłym. Usuwa smutek tych, którzy pozostają. Zawsze wyraża paschalny charakter śmierci chrześcijańskiej. Umieramy ostatecznie w Chrystusie, aby razem z Nim świętować zmartwychwstanie. 1686-1690.</p>
      </div>
      <div className='mt-[50px]'>
        <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Z Kodeksu Prawa kanonicznego (1983) Kanony 1176 - 1185. Kan. 1184.</h5>
        <ul className='mt-[30px] tracking-[1.8px] text-[18px] space-y-[30px] sm:text-[14px]'>
          <li>“§ 1. Jeśli przed śmiercią nie dali żadnych oznak pokuty, pogrzebu kościelnego powinni być pozbawieni:</li>
          <ol className='list-decimal pl-[75px] sm:pl-[40px]'>
            <li>notoryczni apostaci, heretycy i schizmatycy;</li>
            <li>osoby, które wybrały spalenie swojego ciała z motywów przeciwnych wierze chrześcijańskiej;</li>
            <li>inni jawni grzesznicy, którym nie można przyznać pogrzebu bez publicznego zgorszenia wiernych.</li>
          </ol>
          <li>§ 2. Gdy powstaje jakaś wątpliwość, należy się zwrócić do miejscowego ordynariusza, do którego decyzji należy się dostosować.</li>
        </ul>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Pozbawienie pogrzebu zawiera w sobie także odmowę odprawienia jakiejkolwiek Mszy świętej pogrzebowej.”</p>
      </div>
      <h5 className='text-center text-[25px] tracking-[10px] mt-[50px] sm:text-[18px] sm:tracking-[5px]'>Więcej: YOUCAT - Katechizm Kościoła Katolickiego dla młodych (2011)</h5>
    </article>
  )
}

export default Funeral