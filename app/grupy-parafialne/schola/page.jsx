import GropusTopSection from '@components/groups/GropusTopSection'

import scholaLogo from '@public/assets/images/logos/scholaLogo.webp'
import patron1 from '@public/assets/images/patrons/sw-cecylia.webp'
import patron2 from '@public/assets/images/patrons/sw-grzegorz-wielki.webp'
import patron3 from '@public/assets/images/patrons/sw-hildegerda.webp'

const schola = () => {

  const data = {
    logo: scholaLogo,
    name: 'Schola Młodzieżowa',
    name2: 'Szcholi Młodzieżowej',
    info: [
      'Schola to grupa parafialna biorąca udział we Mszy w szczególny sposób. Członkowie scholi prowadzą śpiew na wybranych Mszach. Mocą Ducha Świętego i muzyki wielbią Boga. W naszej parafii schola działa od niedawna (od 2020r.), od czasu do czasu ubogacając liturgię oraz niektóre nabożeństwa śpiewem. Grupa ta ciągle się rozwija i poszerza, ze względu na to, że działa od bardzo niedługiego czasu.',
      'Zazwyczaj członkowie scholi spotykają się na próbach, podczas których przygotowują repertuar pieśni, zgodny z kalendarzem liturgicznym. Ich śpiew ma na celu wprowadzenie uczestników w nastrój modlitwy i skupienia, tworząc harmonijne tło dla celebracji liturgii. Schola może mieć stały lub zmieniający się skład, często angażując nowych członków, którzy pragną uczestniczyć w życiu parafii poprzez muzykę.',
    ],
    link: [
      'Strona scholi na facebooku: ',
      'https://www.facebook.com/profile.php?id=100087777166453&locale=pl_PL',
    ],
    patrons: [
      {
        name: 'Św. Cecylia',
        image: patron1,
        wiki: "https://pl.wikipedia.org/wiki/Cecylia_z_Rzymu"
      },
      {
        name: 'Św. Grzegorz Wielki',
        image: patron2,
        wiki: "https://pl.wikipedia.org/wiki/Grzegorz_I"
      },
      {
        name: 'Św. Hildegerda z Bingen',
        image: patron3,
        wiki: "https://pl.wikipedia.org/wiki/Hildegarda_z_Bingen"
      }
    ] 
  }

  return (
    <>
      <GropusTopSection logo={data.logo} name={data.name} name2={data.name2} info={data.info} link={data.link} patrons={data.patrons}/>
    </>
  )
}

export default schola