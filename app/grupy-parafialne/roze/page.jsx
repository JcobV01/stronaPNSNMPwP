import GropusTopSection from '@components/groups/GropusTopSection'

import rosesLogo from '@public/assets/images/logos/rosesLogo.webp'
import patron1 from '@public/assets/images/patrons/matka-boza-rozancowa.webp'


const roze = () => {

  const data = {
    logo: rosesLogo,
    name: 'Róże Różańcowe',
    name2: 'Róż Różańcowych',
    info: [
      'W naszej parafii istnieje 6 Róż Różańcowych kobiet oraz 1 Róża Różańcowa Mężczyzn. W jednej Róży znajduje się 20 osób, które codziennie odmawiają dziesiątkę różańca. W ten sposób codziennie każda Róża odmawia cały różaniec. Członkowie tej grupy parafialnej gromadzą się w niedzielę na zmianie tajemnic, często również są proszeni o poprowadzenie nabożeństwa różańcowego w październiku.',
      'Róże różańcowe modlą się w różnych intencjach, jednak mają jedną ogólną, która zmienia się co miesiąc',
    ],
    link: [],
    patrons: [
      {
        name: 'Matka Boża Różańcowa',
        image: patron1,
        wiki: "https://pl.wikipedia.org/wiki/Najświętsza_Maryja_Panna_Różańcowa"
      }
    ] 
  }

  return (
    <>
      <GropusTopSection logo={data.logo} name={data.name} name2={data.name2} info={data.info} link={data.link} patrons={data.patrons}/>
    </>
  )
}

export default roze