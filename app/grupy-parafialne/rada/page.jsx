import React from 'react'

import managementLogo from '@public/assets/images/logos/managementLogo.webp'
import GropusTopSection from '@components/groups/GropusTopSection'

const rada = () => {
  
  const data = {
    logo: managementLogo,
    name: 'Rada Parafialna',
    name2: 'Rady Parafialnej',
    info: [
      'Rada Parafialna – rada w parafii, do której należą osoby świeckie. Rada duszpasterska jest organem doradczym ks. Proboszcza. Jej zadaniem jest analiza działań pasterskich oraz formułowanie potrzebnych wniosków, pomoc ks. Proboszczowi za pomocą cennych wskazówek.',
    ],
    link: [],
    patrons: [] 
  }

  return (
    <>
      <GropusTopSection logo={data.logo} name={data.name} name2={data.name2} info={data.info} link={data.link} patrons={data.patrons}/>
    </>
  )
}

export default rada