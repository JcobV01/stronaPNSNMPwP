"use client"

import React from 'react'
import Title from '@components/Title'
import useIntersectionObserver from '@hooks/useObserver';

const cmentarz = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  return (
    <section className='flex-center pb-[100px]'>
      <article className='mt-[65px] w-[1400px] 2xl:w-[90%]'>
        <Title title="Cmentarz" title2="" subtitle="Regulamin"/>
        <div>
          <h4 className='text-center text-[25px] font-semibold tracking-[3px] mt-[70px] md:text-[20px] sm:text-[18px] sm:mt-[40px]'>Regulamin cmentarza parfii pw. Niepokalanego Serca NMP w Przybysławicach</h4>
          <ol ref={ref} className={`mt-[45px] list-decimal text-[18px] tracking-[2.5px] space-y-[40px] md:text-[15px] md:px-[20px] transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
            <li>Cmentarz jest miejscem świętym, miejscem wiecznego spoczynku naszych Zmarłych i miejscem modlitwy za nich. Ma charakter sakralny. Powinien być otoczony religijną czcią i szacunkiem oraz szczególną troską. Na cmentarzu należy zachowywać powagę, ciszę i porządek.</li>
            <li>Cmentarz jest własnością Parafii Rzymskokatolickiej pw. Niepokalanego Serca NMP w Przybysławicach i służy Parafianom.</li>
            <li>Cmentarz zarządza Proboszcz Parafii (KANCELARIA PARAFIALNA czynna po Mszach Świętych z wyjątkiem Niedziel i Świąt). Bezpośrednio w jego imieniu porządku na cmentarzu oraz nadzór sprawuje Pan Kościelny oraz Firma Usługowa p. Ryszard Cierniak 14 67 151 16. Pan Kościelny ma nadzór nad pracami kamieniarskimi, przygotowaniem grobu do pochówku i udostępnieniem wjazdu na cmentarz. Nikomu bez zgody ks. Proboszcza nie można wjechać pojazdem na cmentarz.</li>
            <li>Sprawy związane z pochówkiem zmarłych oraz innymi czynnościami wykonywanymi na cmentarzu należy załatwić na kancelarii parafialnej.</li>
            <li>Na niżej wymienione prace prowadzone na cmentarzu należy uzyskać zgodę Zarządcy cmentarza:</li>
            <ul>
              <li>- budowa nowego grobu lub pomnika,</li>
              <li>- remont pomnika, np. wymiana płyty,</li>
              <li>- ekshumacja zwłok bądź przeniesienie do innego grobu, po przedstawieniu koniecznych zezwoleń (zezwolenie Głównego Inspektora Sanitarnego).</li>
            </ul>
            <li>Prawo do grobu oznacza prawo do terenu o wymiarach:</li>
            <ul>
              <li>- grób pojedynczy: 2,5m x 1,5m</li>
              <li>- grób podwójny: 2,5m x 2,3m</li>
              <li>- teren powyższy wyznacza Zarządca cmentarza</li>
            </ul>
            <p>Inny wymiar grobu należy uzgodnić z Zarządcą.</p>
            <p>Z wydzielonego terenu należy pozostawić przejście minimum 30 cm z każdej strony. Grobu nie można umieścić w pasie wydzielonym na alejki cmentarne. Grób nie może być użyty do ponownego pochówku przed upływem 20 lat ( nie dotyczy grobów murowanych przeznaczonych dla więcej niż jednej osoby).</p>
            <li>Pochówek osób spoza Parafii wymaga opłaty ustalonej przez Radę Parafialną, którą należy uiścić w Kancelarii Parafialnej.</li>
            <li>Na cmentarzu zabrania się:</li>
            <ul>
              <li>- zakłócania ciszy, porządku i powagi miejsca,</li>
              <li>- wywieszania reklam,</li>
              <li>- wjazdu pojazdami mechanicznymi bez zgody Zarządcy,</li>
              <li>- jazdy rowerem,</li>
              <li>- zanieczyszczania terenu wokół grobów, niszczenia zieleni, nagrobków i urządzeń  cmentarnych,</li>
              <li>- samowolnego sadzenia i usuwania drzew oraz ustawiania ławek i innych elementów ozdobnych bez zgody Zarządcy,</li>
              <li>- wprowadzania zwierząt.</li>
            </ul>
            <li>Odpady i śmieci mogą być składowane jedynie w wyznaczonych do tego celu pojemnikach (kontenerach).</li>
            <li>Pozostałych po remoncie lub rozbiórce gruz ze starego pomnika należy wywieźć z cmentarza. Zabrania się składowania tych odpadów w kontenerach znajdujących się na cmentarzu!</li>
            <li>Ziemię pozostałą po wykopaniu grobu należy wywieźć lub zagospodarować dla wyrównania zagłębień na cmentarzu.</li>
            <li>Zabrania się wyrzucania do kontenerów odpadów, które nie pochodzą z cmentarza (prywatne odpady, gruz).</li>
            <li>Sztuczne kwiaty i znicze wrzucamy do kontenerów, odpady organiczne zaś umieszczamy w wydzielonym obok kontenerów miejscu.</li>
            <li>Opiekun cmentarza parafialnego odpowiada za koszenie trawy i jej utylizację oraz dba o utrzymanie porządku na cmentarzu.</li>
            <li>Parafianie zobowiązani są wykupić miejsce pochówku na cmentarzu (tzw. Placowe) w wysokości ustalonej przez Radę Parafialną.</li>
            <li>Zarządca nie ponosi odpowiedzialności za szkody wynikłe z dewastacji lub klęsk żywiołowych. Groby podlegają indywidualnemu ubezpieczeniu.</li>
            <li>Wszystkie sprawy związane z ustaleniem terminu pogrzebu, załatwiamy w kancelarii parafialnej.</li>
            <li>W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie powszechnie obowiązujące przepisy, a w szczególności Ustawa z dnia 31 stycznia 1956 r. o cmentarzach i pochówku zmarłych (tekst jednolity Dz.U. z 2000 r. Nr 23, poz. 295 z późn. Zm.) oraz Rozporządzenie Ministra Infrastruktury z dnia 7 marca 2008 r. w sprawie wymagań, jakie muszą spełniać cmentarze, groby i inne miejsca pochówku zwłok i szczątków (Dz.U. z 2008 r. Nr 48, poz. 284).</li>
          </ol>
          <p className="text-[20px] font-semibold tracking-[2.5px] mt-[40px] md:text-[18px] sm:text-center">Przybysławice, dn. 23 września 2019 r.</p>
        </div>
      </article>
    </section>
  )
}

export default cmentarz