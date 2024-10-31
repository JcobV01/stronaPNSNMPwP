"use client"

import AnnNav from "@components/announcements/AnnNav"
import AnnPrayer from "@components/announcements/AnnPrayer"
import IntentionsElements from "@components/announcements/IntentionsElements"
import Title from "@components/Title"
import { useEffect, useState } from "react"

const ogloszenia = () => {

  const [actualAnn, setActualAnn] = useState({})
  const [prevAnn, setPrevAnn] = useState({})

  const [actualIntentions, setActualIntentions] = useState([])
  const [prevIntentions, setPrevIntentions] = useState([])

  const [clicked, setClicked] = useState("actual")

  useEffect(() => {
    const getAnnouncement = async () => {
      const result = await fetch('/api/announcements/get', { method: "POST" })
      const data = await result.json()

      setActualAnn(data.announcements.actual)
      setPrevAnn(data.announcements.previous)

      const intentions = await fetch('/api/intentions/get', { method: "POST" })
      const intentionsRaw = await intentions.json()

      setActualIntentions(intentionsRaw.intentions.actual)
      setPrevIntentions(intentionsRaw.intentions.previous)
    }
    getAnnouncement()
  }, [])

  return (
    <section className="pt-[50px] flex flex-col items-center gap-[70px] pb-[150px]">
      <Title title="Ogłoszenia" title2="" subtitle="Intencje" />
      <AnnNav clicked={clicked} changeCliked={setClicked} />
      {clicked == 'actual' ?
        <article dangerouslySetInnerHTML={{ __html: actualAnn.html }} className={`w-[1200px] xl:w-[90%] announcements-container announcement-red ${actualAnn.color}`}></article>
        :
        <article dangerouslySetInnerHTML={{ __html: prevAnn.html }} className={`w-[1200px] xl:w-[90%] announcements-container announcement-red ${prevAnn.color}`}></article>
      }

      <AnnPrayer/>
      <IntentionsElements intentions={actualIntentions}/>

    </section>
  )
}

export default ogloszenia