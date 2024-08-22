import Galeria from "@components/home/Galeria"
import Grupy from "@components/home/Grupy"
import Kalendarz from "@components/home/kalendarz/Kalendarz"
import Kontakt from "@components/home/Kontakt"
import Parafia from "@components/home/parafia/Parafia"
import Quote from "@components/Quote"

const page = () => {
  return (
    <>
      <Parafia/>
      <Kalendarz/>
      <Grupy/>
      <Galeria/>
      <Kontakt/>
      <Quote text="Bez Maryi Ewangelia staje się bezcielesna i bezkształtną, przemienia się w ideologię, w duchowy racjonalizm." author="~ św. Jan Paweł II"/>
    </>
  )
}

export default page