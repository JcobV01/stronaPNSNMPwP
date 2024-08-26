import lsoLogo from '@public/assets/images/logos/lsoLogo.webp'
import patron1 from '@public/assets/images/patrons/sw-dominik-savio.webp'
import patron2 from '@public/assets/images/patrons/sw-tarsycjusz.webp'
import patron3 from '@public/assets/images/patrons/sw-jan-berchmans.webp'

import GropusTopSection from '@components/groups/GropusTopSection'

import bgTeam from '@public/assets/images/background-images/lso-background-image.webp'

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

  return (
    <>
      <GropusTopSection logo={data.logo} name={data.name} name2={data.name2} info={data.info} link={data.link} patrons={data.patrons}/>

      <section style={{backgroundImage: `url(${bgTeam})`}}>
        <h4 className='text-[30px] font-medium tracking-[3px] text-center my-[50px] xl:text-[25px] lg:text-[20px] text-white'>Skład Liturgicznej Służby Ołtarza</h4>
      </section>
    </>
  )
}

export default lso