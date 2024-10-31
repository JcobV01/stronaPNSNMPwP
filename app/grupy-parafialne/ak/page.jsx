"use client"

import GropusTopSection from '@components/groups/GropusTopSection'

import akLogo from '@public/assets/images/logos/akLogo.webp'
import patron1 from '@public/assets/images/patrons/sw-jan-pawel-II.webp'
import patron2 from '@public/assets/images/patrons/sw-wojciech.webp'
import patron3 from '@public/assets/images/patrons/bl-stanislaw-kostka.webp'

import bgTeam from '@public/assets/images/background-images/ak-background-image.webp'
import GropusAKHistoryPost from '@components/groups/GropusAKHistoryPost'
import { useEffect, useState } from 'react'

const ak = () => {

  const data = {
    logo: akLogo,
    name: 'Akcja Katolicka',
    name2: 'Akcji Katolickiej',
    info: [
      'Akcja Katolicka to grupa ludzi w naszej oraz innych parafiach, której celem jest pogłębianie formacji chrześcijańskiej jej członków a także współpraca ludzi świeckich z hierarchią w celu realizacji misji Kościoła na Ziemi. W naszej wspólnocie parafialnej Akcja Katolicka jest odpowiedzialna za różnego rodzaju akcje, często jest proszona o poprowadzenie poszczególnych nabożeństw, takich jak Droga Krzyżowa, Różaniec, itd.',
      'Akcja Katolicka to grupa ludzi w naszej oraz innych parafiach, której celem jest pogłębianie formacji chrześcijańskiej jej członków a także współpraca ludzi świeckich z hierarchią w celu realizacji misji Kościoła na Ziemi. W naszej wspólnocie parafialnej Akcja Katolicka jest odpowiedzialna za różnego rodzaju akcje, często jest proszona o poprowadzenie poszczególnych nabożeństw, takich jak Droga Krzyżowa, Różaniec, itd.',
    ],
    link: [
      'Strona internetowa Akcji katolickiej: ',
      'http://ak.org.pl'
    ],
    patrons: [
      {
        name: 'Św. Jan Paweł II',
        image: patron1,
        wiki: "https://pl.wikipedia.org/wiki/Jan_Paweł_II"
      },
      {
        name: 'Św. Wojciech',
        image: patron2,
        wiki: "https://pl.wikipedia.org/wiki/Wojciech_Sławnikowic"
      },
      {
        name: 'Bł. Stanisław Kostka Starowieyski',
        image: patron3,
        wiki: "https://pl.wikipedia.org/wiki/Stanisław_Kostka_Starowieyski"
      }
    ]
  }

  const people = [
    "Bratko Stanisław",
    "Burzawa Józef",
    "Burzawa Teresa",
    "Chłoń Krystyna",
    "Czosnyka Barbara",
    "Czosnyka Piotr",
    "Daniel Wiesław",
    "Głowa Aleksandra",
    "Gołas Maria",
    "Kuc Barbara",
    "Kuczek Dorota",
    "Liro Danuta",
    "Mika Maria",
    "Pochroń Dorota",
    "Wrona Bożena"
  ]

  const history = [
    {
      date: "Wrzesień 1997r.",
      title: "Organizacja jubileuszu",
      desc: "40 – lecia kapłaństwa ks. Michała Dziedzica – budowniczego kościoła, pierwszego proboszcza parafii.",
      color: "#5A7889",
    },
    {
      date: "1998",
      title: "Posługa lektorska",
      desc: "",
      color: "#394C57",
    },
    {
      date: "od 2000r.",
      title: "Droga Krzyżowa w terenie",
      desc: "Organizowana w każdą Niedziele Palmową.",
      color: "#7CA5BD",
    },
    {
      date: "od 2007r.",
      title: "Życzenia oraz modlitwy",
      desc: "W każdy Wielki Czwartek organizowane są życzenia dla kapłana oraz modlitwy wobec wszystkich kapłanów przez 30dni od Wielkiego Czwartku.",
      color: "#4A6270",
    },
    {
      date: "od 2013r.",
      title: "Nabożeństwa",
      desc: "Cykliczne nabożeństwa pierwszego czwartku, piątku oraz pierwszej soboty miesiąca.",
      color: "#6B8FA3",
    },
    {
      date: "od 2014r.",
      title: "Radosne kolędowanie",
      desc: "Konkurs kolęd organizowany dla dzieci, młodzieży i całych rodzin.",
      color: "#28363D",
    },
    {
      date: "od 2014r.",
      title: "Nabożeństwo Fatimskie",
      desc: "Organizowane od maja do października 13 dnia miesiąca.",
      color: "#394C57",
    },
    {
      date: "od kliku lat",
      title: "Dzień Babci i Dziadka",
      desc: "",
      color: "#4A6270",
    },
    {
      date: "od 2014r.",
      title: "Duchowa adopcja dziecka poczętego",
      desc: "",
      color: "#6B8FA3",
    },
    {
      date: "od kliku lat",
      title: "Dzień Matki dla całej parafii",
      desc: "",
      color: "#7CA5BD",
    },
    {
      date: "od kliku lat",
      title: "Wieniec żniwny",
      desc: "Przygotowywany na Matkę Boską Zielną wraz we współpracy z sołtysami.",
      color: "#7CA5BD",
    },
    {
      date: "czerwiec 2013 r.",
      title: "Jubileusz 25 – lecia kapłaństwa",
      desc: "Zorganizowany dla ks. proboszcza Stanisława Polka i ks. Ireneusza Stolarczyka.",
      color: "#171F24",
    },
    {
      date: "lipiec 2018 r.",
      title: "Tablica pamiątkowa",
      desc: "Tablica została wykonana na pamiątkę pierwszego proboszcza parafii ks. Michała Dziedzica przez jego bratanka – misjonarza ks. Mateusza Dziedzica. Poświęcona została przez bp. Stanisława Salaterskiego.",
      color: "#5A7889",
    },
    {
      date: "czerwiec 2018 r.",
      title: "Jubileusz kapłaństwa",
      desc: "Zorganizowany został jubileusz 25 – lecia kapłaństwa dla proboszcza ks. Piotra Bodzionego.",
      color: "#8DBCD6",
    },
    {
      date: "sierpień 2016 r.",
      title: "Pogrzeb śp. Ks. kanonika Michała Dziedzica",
      desc: "Zorganizowany został wyjazd do Szalowej na pogrzeb byłego proboszcza.",
      color: "#6B8FA3",
    },
    {
      date: "od kilku lat",
      title: "Organizacja Święta Niepodległości",
      desc: "Każdego roku 11 listopada organizowana jest Msza św. za Ojczyznę, akademia oraz biesiada pieśni patriotycznych.",
      color: "#4A6270",
    },
    {
      date: "czerwiec 2018 r.",
      title: "Spotkanie parafian",
      desc: "Zorganizowane zostało spotkanie z ks. prof. Ireneuszem Stolarczykiem, który zaprezentował slajdy na temat Afryki oraz opowiadał o podróży na sakrę biskupią ks. Mirosława Gucwy",
      color: "#171F24",
    },
    {
      date: "14 października 2018 r.",
      title: "Odsłonięcie oraz poświęcenie obelisku",
      desc: "Współorganizowane zostało uroczyste odsłonięcie oraz poświęcenie obelisku na pamiątkę 100 – lecia Odzyskania Niepodległości przez Polskę w Pasiece Otfinowskiej. Poświęcenia dokonali ks. prof. Ireneusz Stolarczyk i ks. proboszcz Piotr Bodziony.",
      color: "#28363D",
    },
    {
      date: "od kilku lat",
      title: "Droga Krzyżowa",
      desc: "Cyklicznie nasi członkowie uczestniczą w Drodze Krzyżowej szlakiem męczeństwa śmierci bł. Karoliny Kózkówny w Wał-Rudzie.",
      color: "#5A7889",
    }
  ]

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <GropusTopSection logo={data.logo} name={data.name} name2={data.name2} info={data.info} link={data.link} patrons={data.patrons} />

      <section style={{ backgroundImage: `url(${bgTeam.src})` }} className='w-full relative bg-center py-[30px] my-[50px] bg-cover px-[30px]'>
        <h4 className='text-[30px] tracking-[3px] text-center my-[30px] text-white relative z-10 xl:text-[25px] lg:text-[20px] '>Skład Akcji Katolickiej</h4>

        <article className='flex gap-[60px] justify-center z-10 sm:flex-col sm:items-center'>
          <div className='z-10'>
            <h5 className='text-white text-[20px] font-bold tracking-[2.5px] mb-[30px] sm:text-center'>Prezes</h5>
            <p className='text-white text-[18px] font-medium tracking-[2.3px] lg:text-[15px] sm:text-center'>Helena Sowa</p>
          </div>

          <div className='h-[200px] w-[3px] bg-white z-10 sm:h-[3px] sm:w-[70%]'></div>

          <div className='relative z-10'>
            <h5 className='text-white text-[20px] font-bold tracking-[2.5px] mb-[30px] sm:text-center'>Członkowie</h5>
            <div className='flex flex-wrap flex-col gap-[15px] h-[190px] gap-x-[40px] xl:h-[350px] md:h-auto sm:text-center'>
              {people.map((person) => (
                <p className='text-white text-[18px] font-medium tracking-[2.3px] lg:text-[15px]'>{person}</p>
              ))}
            </div>
          </div>
        </article>

        <div className='absolute w-full h-full top-0 left-0 backdrop-brightness-[0.2] z-0'></div>
      </section>

      <section className='pb-[50px]'>
        <h4 className='text-[30px] tracking-[3px] text-center my-[30px] font-medium relative z-10 xl:text-[25px] lg:text-[20px]'>Historia</h4>
        <div className='h-[3px] bg-[#B9B9B9] w-[300px] m-auto sm:w-[80%] fold:w-[90%]'></div>

        {windowWidth > 767 ?
          <article className='flex gap-[40px] lg:gap-[20px]'>
            <div className='flex flex-col gap-[30px] pt-[50px]'>
              {history.map((post, index) => {
                if (index % 2 == 0) {
                  return (
                    <GropusAKHistoryPost color={post.color} title={post.title} date={post.date} desc={post.desc} key={index}/>
                  )
                }
              })}
            </div>

            <div className='w-[3px] bg-[#B9B9B9]'></div>

            <div className='flex flex-col gap-[30px] pt-[200px]'>
              {history.map((post, index) => {
                if (index % 2 != 0) {
                  return (
                    <GropusAKHistoryPost color={post.color} title={post.title} date={post.date} desc={post.desc} key={index}/>
                  )
                }
              })}
            </div>
          </article>
          :
          <article className='flex gap-[40px] lg:gap-[20px]'>
            <div className='flex flex-col gap-[30px] pt-[50px] sm:items-center'>
              {history.map((post, index) => {

                return (
                  <GropusAKHistoryPost color={post.color} title={post.title} date={post.date} desc={post.desc} key={index}/>
                )

              })}
            </div>
          </article>
        }

      </section>

    </>
  )
}

export default ak