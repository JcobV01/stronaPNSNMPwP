'use client'

import Title from '@components/Title'
import background from '@public/assets/images/background-images/groups-background-image.webp'

import lsoIcon from '@public/assets/icons/groups/lso.svg'
import akIcon from '@public/assets/icons/groups/ak.svg'
import dsmIcon from '@public/assets/icons/groups/dsm.svg'
import menagementIcon from '@public/assets/icons/groups/management.svg'
import rosesIcon from '@public/assets/icons/groups/roses.svg'
import scholaIcon from '@public/assets/icons/groups/schola.svg'
import GroupsCard from '@components/GroupsCard'
import useIntersectionObserver from '@hooks/useObserver'

const Grupy = () => {

  const data = [
    {
      icon: lsoIcon,
      name: "Liturgiczna Służba Ołtarza",
      desc: "Liturgiczna Służba Ołtarza skupia ministrantów i lektorów, którzy z zaangażowaniem służą podczas Mszy Świętych i innych nabożeństw. Dzięki ich posłudze liturgia staje się jeszcze bardziej uroczysta i pełna skupienia.",
      link: "lso",
    },
    {
      icon: scholaIcon,
      name: "Schola Młodzieżowa",
      desc: "Schola to grupa parafialna biorąca udział we Mszy w szczególny sposób. Członkowie scholi prowadzą śpiew na wybranych Mszach. Mocą Ducha Świętego i muzyki wielbią Boga.",
      link: "schola"
    },
    {
      icon: akIcon,
      name: "Akcja Katolicka",
      desc: "Akcja Katolicka to grupa ludzi w naszej oraz innych parafiach, której celem jest pogłębianie formacji chrześcijańskiej jej członków a także współpraca ludzi świeckich z hierarchią w celu realizacji misji Kościoła na Ziemi.",
      link: "ak"
    },
    {
      icon: dsmIcon,
      name: "Akcja Katolicka",
      desc: "Dziewczęca Służba Maryjna jest to wspólnota parafialna w Kościele. Należą do niej dziewczęta, zazwyczaj w wieku szkoły podstawowej lub starsze, które zgłosiły chęć przynależenia do tej grupy i zawierzenia swojego życia Maryi.",
      link: "dsm"
    },
    {
      icon: rosesIcon,
      name: "Róże Różańcowe",
      desc: "W naszej parafii istnieje 6 Róż Różańcowych kobiet oraz 1 Róża Różańcowa Mężczyzn. W jednej Róży znajduje się 20 osób, które codziennie odmawiają dziesiątkę różańca. W ten sposób codziennie każda Róża odmawia cały różaniec.",
      link: "roze"
    },
    {
      icon: menagementIcon,
      name: "Rada Parafialna",
      desc: "Rada w parafii, do której należą osoby świeckie. Rada duszpasterska jest organem doradczym ks. Proboszcza. Jej zadaniem jest analiza działań pasterskich oraz formułowanie potrzebnych wniosków, pomoc ks. Proboszczowi za pomocą cennych wskazówek.",
      link: "rada"
    }
  ]

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  return (
    <section id="grupy" ref={ref} className={`bg-cover bg-center md:bg-left transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`} style={{backgroundImage: `url(${background.src})`}}>
      <div className='w-full h-full bg-[#00000050] p-[47px] flex flex-col items-center gap-[50px] fold:px-[10px]'>
        <Title title="Grupy" title2="Parafialne" subtitle="Opis grup" color="#FFF"/>
        <p className='text-[#ECECEC] w-[80%] text-[15px] tracking-[3px] font-medium text-center lg:text-[13px] sm:tracking-[1px] sm:w-[95%] fold:text-[10px]'>Nasza parafia to miejsce, gdzie każdy może znaleźć swoją duchową ścieżkę i zaangażować się w życie wspólnoty. Wierzymy, że każda osoba ma wyjątkowy dar do zaoferowania i chcemy wspólnie wzrastać w wierze i miłości. Funkcjonują u nas: Liturgiczna Służba Ołtarza, Dziewczęca Służba Maryjna, Schola, Akcja Katolicka, Róże Różańcowe oraz Rada Parafialna, które działają na rzecz wspólnoty i Kościoła.</p>
        <article className='flex flex-wrap justify-center gap-[30px]'>
          {
            data.map((card) => (
              <GroupsCard icon={card.icon} name={card.name} desc={card.desc} link={`/grupy-parafialne/${card.link}`} key={card.name}/>
            ))
          }
        </article>
      </div>
    </section>
  )
}

export default Grupy