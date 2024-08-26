import React from 'react'

import dsmLogo from '@public/assets/images/logos/dsmLogo.webp'
import patron1 from '@public/assets/images/patrons/maryja.webp'
import patron2 from '@public/assets/images/patrons/sw-maria-goretti.webp'
import GropusTopSection from '@components/groups/GropusTopSection'


const dsm = () => {

  const data = {
    logo: dsmLogo,
    name: 'Dziewczęca Służba Maryjna',
    name2: 'Dziewczęcej Służby Maryjnej',
    info: [
      'DSM – Dziewczęca Służba Maryjna jest to wspólnota parafialna w Kościele. Należą do niej dziewczęta, zazwyczaj w wieku szkoły podstawowej lub starsze, które zgłosiły chęć przynależenia do tej grupy i zawierzenia swojego życia Maryi. W naszej parafii DSM bierze udział w różnego rodzaju procesjach, niosąc feretron, w każdą środę uczestniczą w nowennie do Matki Bożej Nieustającej Pomocy oraz w różnych nabożeństwach maryjnych.',
      'Ich głównym zadaniem jest służba Maryi, czyli głoszenie i rozpowszechnianie Jej życia i postawy. Robią to poprzez swoje przykładne życie, dając wzór rówieśnikom. W kościele dziewczyny z DSM można rozpoznać po specjalnym stroju. W naszej parafii noszą one niebieskie pelerynki z naszytą, białą literą “M”. Patronami Dziewczęcej Służby Maryjnej są Najświętsza Maryja Panna oraz Maria Goretti.',
    ],
    link: [
      'Strona internetowa DSM: ',
      'https://dsm.diecezja.tarnow.pl'
    ],
    patrons: [
      {
        name: 'Maryja Panna',
        image: patron1,
        wiki: "https://pl.wikipedia.org/wiki/Najświętsza_Maryja_Panna_Królowa_Polski"
      },
      {
        name: 'Św. Maria Goretii',
        image: patron2,
        wiki: "https://pl.wikipedia.org/wiki/Maria_Goretti"
      }
    ] 
  }

  return (
    <>
      <GropusTopSection logo={data.logo} name={data.name} name2={data.name2} info={data.info} link={data.link} patrons={data.patrons}/>
    </>
  )
}

export default dsm