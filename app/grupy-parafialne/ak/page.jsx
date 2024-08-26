import GropusTopSection from '@components/groups/GropusTopSection'

import akLogo from '@public/assets/images/logos/akLogo.webp'
import patron1 from '@public/assets/images/patrons/sw-jan-pawel-II.webp'
import patron2 from '@public/assets/images/patrons/sw-wojciech.webp'
import patron3 from '@public/assets/images/patrons/bl-stanislaw-kostka.webp'

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

  return (
    <>
      <GropusTopSection logo={data.logo} name={data.name} name2={data.name2} info={data.info} link={data.link} patrons={data.patrons}/>
    </>
  )
}

export default ak