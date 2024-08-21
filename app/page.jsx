import Galeria from "@components/home/Galeria"
import Grupy from "@components/home/Grupy"
import Kalendarz from "@components/home/Kalendarz"
import Kontakt from "@components/home/Kontakt"
import Parafia from "@components/home/parafia/Parafia"
import Quote from "@components/quote"

const page = () => {
  return (
    <>
      <Parafia/>
      <Kalendarz/>
      <Grupy/>
      <Galeria/>
      <Kontakt/>
      <Quote text="test" author="św. Jan Paweł II"/>
    </>
  )
}

export default page