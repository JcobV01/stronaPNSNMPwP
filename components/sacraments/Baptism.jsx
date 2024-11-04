'use client'

import React from 'react'
import useIntersectionObserver from '@hooks/useObserver';

const Baptism = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0
  });

  return (
    <article ref={ref} className={`w-[1400px] 2xl:w-[90%] pb-[100px] transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
      <h4 className='text-[40px] font-medium tracking-[8px] text-center sm:text-[20px]'>Chrzest</h4>
      <div>
        <h5 className='text-[25px] mt-[15px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>W naszej parafii</h5>
        <ol className='mt-[30px] list-decimal space-y-[30px] tracking-[1.8px] text-[18px] sm:text-[14px] sm:pl-[20px]'>
          <li>Sakrament Chrztu udzielany jest w III niedzielę miesiąca, oraz w drugi dzień świąt Bożego Narodzenia i Wielkiej Nocy podczas Mszy Świętej o godz. 10:00. Z uzasadnionych przyczyn może być udzielony w każdym innym terminie.</li>
          <li>Chrzest należy zgłosić najpóźniej na początku tygodnia przed niedzielą chrzcielną. Należy przy tym okazać akt urodzenia z USC. W przypadku dzieci spoza parafii wymagana jest pisemna zgoda własnego proboszcza.</li>
          <li>Rodzice i chrzestni zobowiązani są przystąpić do sakramentu pokuty i pojednania oraz uczestniczyć w katechezie (konferencji) przedchrzcielnej – w naszej parafii konferencje dla rodziców i chrzestnych odbywają się w piątek przed III niedzielą o godz. 19.00.</li>
          <li>Gdy chrzest odbywa się w innym terminie rodzice i chrzestni są zobowiązani uczestniczyć w katechezie przedchrzcielnej w sobotę przed II niedzielą miesiąca.</li>
          <li>Rodzicami chrzestnymi mogą być praktykujący katolicy, którzy przyjęli sakrament bierzmowania. Powinni okazać stosowne zaświadczenie od proboszcza własnej parafii. Z funkcji rodziców chrzestnych wykluczone są osoby:</li>
          <ul>
            <li>- niepraktykujące,</li>
            <li>- pozostające w cywilnych związkach małżeńskich,</li>
            <li>- uczniowie objęci obowiązkiem katechezy a nie uczestniczący w niej.</li>
          </ul>
          <li>Akt chrztu jest spisywany i podpisywany przez rodziców i rodziców chrzestnych w ciągu tygodnia przed niedzielą chrzcielną w godzinach pracy kancelarii. W wyjątkowych wypadkach rodzice chrzestni spoza parafii mogą złożyć podpisy w dniu chrztu (przed liturgią w zakrystii).</li>
          <li>Prosimy o punktualne przybycie na Mszę Świętą chrzcielną oraz zabranie ze sobą białej szaty i świecy chrzcielnej.</li>
          <li>Chrzest jest włączeniem do Kościoła i powinien być dniem radości całej rodziny. Najpiękniejszym darem dla dziecka jest modlitwa i przyjęcie Komunii Świętej w jego intencji przez wszystkich najbliższych.</li>
          <li>W przypadku uzasadnionych wątpliwości, czy dziecko zostanie wychowane w duchu wiary katolickiej, chrzest może zostać odłożony.</li>
        </ol>
      </div>
      <div>
        <h5 className='text-[25px] mt-[50px] tracking-[10px] text-center sm:text-[18px] sm:tracking-[5px]'>Ustanowienie sakramentu chrztu</h5>
        <p className='text-[18px] tracking-[1.8px] mt-[30px] sm:text-[14px]'>Sakrament Chrztu ustanowił Pan Jezus po Zmartwychwstaniu, kiedy powiedział do Apostołów: “Idąc tedy nauczajcie wszystkie narody, chrzcząc je w imię Ojca i Syna i Ducha Świętego”. Chrzest jest pierwszym i najpotrzebniejszym Sakramentem, ponieważ bez niego nie można się zbawić, ani przyjąć żadnego innego Sakramentu. Sakrament chrztu daje po raz pierwszy człowiekowi łaskę uświęcającą, a tym samym gładzi grzech pierworodny. Jeśli człowiek dorosły przyjmuje Chrzest, to wówczas gładzi wszystkie grzechy przed chrztem popełnione. Przez Chrzest stajemy się członkami Kościoła katolickiego. Chrzest święty jest fundamentem całego życia chrześcijańskiego, bramą życia w Duchu (vitae spiritualis ianua) i bramą otwierającą dostęp do innych sakramentów. Przez chrzest zostajemy wyzwoleni od grzechu i odrodzeni jako synowie Boży, stajemy się członkami Chrystusa oraz zostajemy wszczepieni w Kościół i stajemy się uczestnikami jego posłania: “Chrzest jest sakramentem odrodzenia przez wodę i w słowie” (Katechizm Kościoła Katolickiego 1213).</p>
      </div>
    </article>
  )
}

export default Baptism