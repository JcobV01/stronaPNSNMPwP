'use client'

import Title from '@components/Title'

import ksKozyra from '@public/assets/images/priests/ks-kazimierz.webp'
import ksBak from '@public/assets/images/priests/ks-andrzej.webp'
import ksIcon from '@public/assets/icons/nationals/priest.svg'
import sIcon from '@public/assets/icons/nationals/sister.svg'
import NPriestsCard from '@components/nationals/NPriestsCard'
import NSistersCard from '@components/nationals/NSistersCard'
import useIntersectionObserver from '@hooks/useObserver'

const rodacy = () => {

  const priests = [
    {
      image: ksKozyra,
      name: "Kaniemierz Kozyra",
      desc: "aktualny rezydent parafii Najświętszego Serca Pana Jezusa w Dębicy.",
      alive: true,
      dimensions: 200
    },
    {
      image: ksBak,
      name: "Andrzej Bąk",
      desc: "aktualny proboszcz parafii św. Jana Ewangelisty w Pisarzowej.",
      alive: true,
      dimensions: 200
    },
    {
      image: ksIcon,
      name: "Edwin Rzeszuto",
      desc: "spoczywa na cmentarzu parafialnym w Przybysławicach w rodzinnym grobowcu.",
      alive: false,
      dimensions: 150,
    },
    {
      image: ksIcon,
      name: "Stanisław Mękarski",
      desc: "spoczywa na cmentarzu parafialnym w Przybysławicach",
      alive: false,
      dimensions: 150,
    },
  ]

  const sisters = [
    {
      image: sIcon,
      name: "Pulcheria Was",
      desc: "Stara Wieś – służebniczka starowiejska",
      alive: true,
    },
    {
      image: sIcon,
      name: "Celestyna Czosnyka",
      desc: "Rzym – Nazaretanki",
      alive: true,
    },
    {
      image: sIcon,
      name: "Daniela Czosnyka",
      desc: "Kraków",
      alive: true,
    },
    {
      image: sIcon,
      name: "Elżbieta Kozyra",
      desc: "Krościenko nad Dunajcem",
      alive: true,
    },
  ]

  const [refOne, isVisibleOne] = useIntersectionObserver({
    threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  const [refTwo, isVisibleTwo] = useIntersectionObserver({
    threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
  });

  return (
    <section className='pt-[50px] flex flex-col items-center px-[20px] pb-[100px]'>
      <Title title="Rodacy" title2="" subtitle="Księża i siostry zakonne"/>

      <h4 className='text-[25px] font-semibold tracking-[2.5px] text-center mt-[70px] mb-[60px] lg:text-[20px]'>Księża</h4>

      <div ref={refOne} className={`flex flex-wrap w-[1250px] justify-center gap-[30px] transition-all duration-1000 ease-in-out ${isVisibleOne ? 'animation-visible' : 'animation-hidden'} xl:w-full`}>
        {priests.map((priest, index) => (
          <NPriestsCard key={index} image={priest.image} name={priest.name.toUpperCase()} desc={priest.desc} alive={priest.alive} dimensions={priest.dimensions}/>
        ))}
      </div>

      <h4 className='text-[25px] font-semibold tracking-[2.5px] text-center mt-[70px] mb-[60px] lg:text-[20px]'>Siostry zakonne</h4>

      <div ref={refTwo} className={`flex flex-wrap w-[1250px] justify-center gap-[30px] transition-all duration-1000 ease-in-out ${isVisibleTwo ? 'animation-visible' : 'animation-hidden'} xl:w-full`}>
        {sisters.map((sister, index) => (
          <NSistersCard key={index} image={sister.image} name={sister.name.toUpperCase()} desc={sister.desc} alive={sister.alive}/>
        ))}
      </div>

    </section>
  )
}

export default rodacy