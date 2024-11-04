'use client'

import React from 'react'
import useIntersectionObserver from '@hooks/useObserver';

const Confirmation = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0
  });

  return (
    <article ref={ref} className={`w-[1400px] 2xl:w-[90%] pb-[100px] transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
      <div>
        <h4 className='text-[40px] font-medium tracking-[8px] text-center sm:text-[20px]'>Bierzmowanie</h4>
        <div className='mt-[15px]'>
          <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>W naszej parafii</h5>
          <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Przygotowanie do sakramentu bierzmowania dokonuje się w ciągu trzech lat szkoły podstawowej. Polega na formacji duchowo-intelektualnej kandydata do bierzmowania. Spotkania w naszej parafii odbywają się co miesiąc po wcześniejszym ustaleniu terminu.</p>
        </div>
        <div className='mt-[50px]'>
          <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Czym jest sakrament bierzmowania?</h5>
          <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Sakrament bierzmowania jest dopełnieniem sakramentu chrztu św. Bierzmowanie wraz z chrztem i Eucharystią należy do “sakramentów wtajemniczenia chrześcijańskiego”, którego jedność powinna być zachowywana (Katechizm Kościoła Katolickiego 1285).</p>
        </div>
        <div className='text-center mt-[50px]'>
          <h5 className='text-[25px] tracking-[10px] sm:text-[18px] sm:tracking-[5px]'>Co jest znakiem widzialnym sakramentu bierzmowania?</h5>
          <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Jest włożenie rąk biskupa, namaszczenie krzyżmem św. i modlitwa.</p>
        </div>
        <div className='mt-[50px]'>
          <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Co sprawia Duch św. w sakramencie bierzmowania?</h5>
          <ul className='mt-[30px] tracking-[1.8px] text-[18px] sm:text-[14px]'>
            <li>- zakorzenia nas głębiej w Bożym synostwie, tak że możemy mówić “Abba, Ojcze!”,</li>
            <li>- ściślej jednoczy nas z Chrystusem,</li>
            <li>- pomnaża w nas Swoje dary,</li>
            <li>- udoskonala naszą więź z Kościołem,</li>
            <li>- udziela nam, jako prawdziwym świadkom Chrystusa, Swojej mocy do szerzenia i obrony wiary słowem i czynem, do mężnego wyznawania imienia Chrystusa oraz do tego, by nigdy nie wstydzić się Krzyża (Katechizm Kościoła Katolickiego 1303).</li>
          </ul>
        </div>
        <div className='text-center mt-[50px]'>
          <h5 className='text-[25px] tracking-[10px] sm:text-[18px] sm:tracking-[5px]'>Co znaczy apostołować?</h5>
          <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>To troszczyć się nie tylko o swoje zbawienie, ale i zbawienie drugich.</p>
        </div>
        <div className='text-center mt-[50px]'>
          <h5 className='text-[25px] tracking-[10px] sm:text-[18px] sm:tracking-[5px]'>W jaki sposób chrześcijanin może apostołować?</h5>
          <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>To troszczyć się nie tylko o swoje zbawienie, ale i zbawienie drugich.</p>
        </div>
        <div className='text-center mt-[50px]'>
          <h5 className='text-[25px] tracking-[10px] sm:text-[18px] sm:tracking-[5px]'>Gdzie chrześcijanin powinien apostołować?</h5>
          <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Wszędzie, gdzie spotyka się z ludźmi.</p>
        </div>
        <p className='text-[18px] tracking-[1.8px] mt-[50px] text-center sm:text-[14px]'>Warto przeczytać: Katechizm Kościoła Katolickiego dla Młodych/Youcat/ nr 203 i następne oraz KKK nr 1285-1314.</p>
      </div>
      <div>
        <h4 className='text-[40px] font-medium tracking-[8px] text-center mt-[60px] sm:text-[20px]'>Przygotowanie i kryteria dopuszczenia do sakramentu bierzmowania</h4>
        <div className='mt-[15px]'>
          <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Przygotowanie do bierzmowania</h5>
          <div className='text-[18px] tracking-[1.8px] sm:text-[14px]'>
            <p className='mt-[30px]'>Przygotowanie do przyjęcia sakramentu bierzmowania trwa przez trzy lata i ma miejsce w szkole podstawowej. Rozpoczyna się w klasie szóstej. Przygotowanie to zwieńczone jest przyjęciem sakramentu bierzmowania w klasie ósmej szkoły podstawowej.</p>
            <p className='mt-[30px]'>Przez cały czas trwania przygotowania kandydaci do sakramentu bierzmowania uczestniczą w katechizacji szkolnej oraz w katechezach organizowanych przy parafii. Miejscem katechez parafialnych są parafialne salki katechetyczne. Ponadto kandydaci powinni uczestniczyć w specjalnych celebracjach, które mogą być organizowane tylko w kościołach lub kaplicach na terenie parafii. Katechezy parafialne powinny być prowadzone przez duszpasterzy we współpracy z odpowiednio przygotowanymi animatorami świeckimi. Tematykę oraz częstotliwość spotkań i celebracji określa program zatwierdzony przez Biskupa Tarnowskiego, natomiast właściwe pomoce w formie konspektów do spotkań w grupach i celebracji zostały wydane przez Wydział Katechetyczny Kurii Diecezjalnej w Tarnowie. Dopuszcza się przygotowanie do bierzmowania poprzez udział kandydatów, którzy wyrażą taką wolę, w programie formacyjnym „Młodzi na progu”.</p>
            <p className='mt-[30px]'>W klasie siódmej szkoły podstawowej należy przygotować uczniów do egzaminu z wiedzy religijnej, składanym przez uczniów przed dekanalnym lub diecezjalnym wizytatorem nauki religii w obecności swojego katechety, rodziców i księdza proboszcza. Za przygotowanie uczniów do egzaminu odpowiada katecheta uczący kandydatów do bierzmowania w szkole. Podstawą wiedzy religijnej jest „Katechizm bierzmowanych” wydany przez Wydawnictwo Biblos.</p>
            <p className='mt-[30px]'>Zaleca się podkreślenie ścisłego związku pomiędzy chrztem świętym a bierzmowaniem poprzez zachowanie imienia chrzcielnego jako imienia z bierzmowania. Uzasadnieniem zmiany imienia z chrztu świętego na inne jest przede wszystkim brak związku tego imienia z chrześcijańskim patronem. Kryterium wyboru imienia nie może być jego atrakcyjność, lecz świadectwo życia oraz wartości, które propagowali wybrani święci lub błogosławieni. Kandydaci powinni dobrze zapoznać się z życiorysem swojego patrona oraz zatwierdzić swój wybór u katechety szkolnego.</p>
            <p className='mt-[30px]'>Zaleca się, aby świadkiem bierzmowania był ktoś z rodziców chrzestnych, przy czym powinny to być osoby w dalszym ciągu wierzące i praktykujące. Świadkiem może być osoba, która ukończyła 16. rok życia, jest katolikiem wierzącym i praktykującym oraz przyjęła sakramenty inicjacji chrześcijańskiej. Świadek, który nie jest znany proboszczowi kandydata do bierzmowania jest zobligowany do dostarczenia stosownego zaświadczenia z parafii, z której pochodzi.</p>
          </div>
        </div>
        <div className='mt-[50px]'>
          <h5 className='text-[25px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Krtyeria dopuszczenia do bierzmowania</h5>
          <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Bierzmowanie jest sakramentem wiary, stąd wiara kandydata jest podstawowym kryterium dopuszczenia do bierzmowania. Wiara ta wyraża się:</p>
          <ul className='mt-[30px] tracking-[1.8px] text-[18px] sm:text-[14px]'>
            <li>- w deklaracji przyjęcia sakramentu,</li>
            <li>- w systematycznym uczestnictwie w lekcjach religii w szkole i spotkaniach formacyjnych przy parafii,</li>
            <li>- w spełnianiu praktyk religijnych (m.in. uczestnictwo w niedzielnej i świątecznej Mszy świętej, przystępowanie z okazji pierwszych piątków miesiąca do sakramentu pokuty i pojednania oraz przyjmowanie w tym dniu Komunii świętej),</li>
            <li>- w udziale w rekolekcjach lub dniach skupienia,</li>
            <li>- w uczestnictwie w nowennie przed bierzmowaniem,</li>
            <li>- w nienagannej postawie religijno-moralnej,</li>
            <li>- w pozytywnie zdanym egzaminie.</li>
          </ul>
          <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Zaleca się, aby Księża Proboszczowie i Katecheci z pasterska miłością zaangażowali się w dzieło przygotowania młodych do sakramentu bierzmowania i w to przygotowanie włączyli rodziców. Cała zaś wspólnota parafialna niech otoczy modlitewną troską dzieło przygotowania do bierzmowania.</p>
        </div>
      </div>
    </article>
  )
}

export default Confirmation