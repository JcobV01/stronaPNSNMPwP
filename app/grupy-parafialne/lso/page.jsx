import lsoLogo from '@public/assets/images/logos/lsoLogo.webp'
import patron1 from '@public/assets/images/patrons/sw-dominik-savio.webp'
import patron2 from '@public/assets/images/patrons/sw-tarsycjusz.webp'
import patron3 from '@public/assets/images/patrons/sw-jan-berchmans.webp'

import GropusTopSection from '@components/groups/GropusTopSection'

import bgTeam from '@public/assets/images/background-images/lso-background-image.webp'
import GroupsLSOList from '@components/groups/GroupsLSOList'

const lso = () => {

  const data = {
    logo: lsoLogo,
    name: 'Liturgiczna Służba Ołtarza',
    name2: 'Liturgicznej Służby Ołtarza',
    info: [
      'Liturgiczna służba ołtarza jest nie tylko zaszczytnym zadaniem, ale również istotnym elementem, który wpływa na piękno i głębię przeżywania liturgii w naszej parafii. To właśnie dzięki zaangażowaniu i oddaniu ministrantów oraz osób odpowiedzialnych za organizację, nasze Msze Święte nabierają wyjątkowego charakteru, który pozostawia niezatarte wrażenie na wszystkich uczestnikach.',
      'Nasza parafia wyróżnia się również dbałością o szczegóły liturgiczne. Liturgia jest starannie planowana, a każdy element – od przygotowania ołtarza, przez śpiew, aż po modlitwy – jest dopracowany w najmniejszych detalach. Dzięki temu, każda Msza Święta jest niepowtarzalnym przeżyciem, które odzwierciedla zarówno piękno tradycji kościelnej, jak i współczesne potrzeby duchowe wspólnoty.',
      'Wysoki poziom liturgii w naszej parafii nie jest efektem przypadku, lecz owocem ciężkiej pracy wielu osób. Rola liturgicznej służby ołtarza jest nieoceniona. Dzięki zaangażowaniu ministrantów i dbałości o szczegóły liturgiczne, każda Msza Święta w naszej parafii staje się prawdziwym doświadczeniem duchowym i estetycznym. Jesteśmy dumni z poziomu naszej liturgii, który odzwierciedla zarówno piękno tradycji, jak i żywą wiarę naszej wspólnoty. Wspólnie tworzymy przestrzeń, w której każdy może spotkać się z Bogiem i odnaleźć głębokie, duchowe przeżycie.'
    ],
    link: [
      'Strona internetowa LSO Dziecezji Tarnowskiej: ',
      'https://lso.tarnow.pl'
    ],
    patrons: [
      {
        name: 'Św. Dominik Savio',
        image: patron1,
        wiki: "https://pl.wikipedia.org/wiki/Dominik_Savio"
      },
      {
        name: 'Św. Tarsycjusz',
        image: patron2,
        wiki: "https://pl.wikipedia.org/wiki/Święty_Tarsycjusz"
      },
      {
        name: 'Św. Jan Berchmans',
        image: patron3,
        wiki: "https://pl.wikipedia.org/wiki/Jan_Berchmans"
      }
    ] 
  }

  const people = {
    ceremoniarze: [
      "Artur Plebańczyk",
      "Jakub Baran",
      "Jakub Wadycki",
      "Kacper Wielbłąd"
    ],
    lektorzy: [
      "Jakub Wielbłąd",
      "Kacper Ostrowski",
      "Kacper Tarchała",
      "Krzysztof Wielbłąd",
      "Maksymilian Konop",
      "Marcel Bocoń",
      "Michał Wadycki",
      "Mikołaj Czosnyka",
      "Patryk Gucwa",
      "Piotr Tarchała"
    ],
    ministranci: [
      "Bartosz Bratko",
      "Dominik Bocoń",
      "Kacper Kądzielawski",
      "Krystian Niedziela",
      "Maksymilan Baran",
      "Marcin Piątek",
      "Roman Kusior",
      "Tomasz Kania",
    ]
  }

  return (
    <>
      <GropusTopSection logo={data.logo} name={data.name} name2={data.name2} info={data.info} link={data.link} patrons={data.patrons}/>

      <section style={{backgroundImage: `url(${bgTeam.src})`}} className='w-full relative bg-center py-[30px] my-[50px] bg-cover'>
        <h4 className='text-[30px] tracking-[3px] text-center my-[30px] text-white relative z-10 xl:text-[25px] lg:text-[20px] '>Skład Liturgicznej Służby Ołtarza</h4>
        <article className='relative z-10 flex gap-[50px] flex-center lg:flex-col'>
          
          <GroupsLSOList title="Ceremoniarze" height="400" team={people.ceremoniarze}>
            <h5 className='text-white text-[30px] tracking-[4px] font-extralight mt-[20px]'>Zasłużeni</h5>
            <div className='h-[2px] w-[50%] bg-[#D9D9D9] m-auto mb-[25px] mt-[5px]'></div>
            <p className='text-white text-[20px] tracking-[2.3px] font-light'>Szymon Mikos</p>
          </GroupsLSOList>

          <GroupsLSOList title="Ministranci Słowa Bożego" height="500" team={people.lektorzy} />
          <GroupsLSOList title="Ministranci" height="400" team={people.ministranci} />
          
        </article>
        <div className='absolute w-full h-full top-0 left-0 backdrop-brightness-[0.2] z-0'></div>
      </section>

      <section>
        <h4 className='text-[30px] tracking-[3px] font-medium text-center my-[30px] relative z-10 xl:text-[25px] lg:text-[20px]'>Zdjęcia z wybranych celebracji</h4>
      </section>
    </>
  )
}

export default lso