"use client"

import AnnNav from "@components/announcements/AnnNav"
import Title from "@components/Title"
import { useEffect, useState } from "react"

const ogloszenia = () => {

  const [actualAnn, setActualAnn] = useState({})
  const [prevAnn, setPrevAnn] = useState({})

  useEffect(() => {
    const getAnnouncement = async () => {
      const result = await fetch('/api/announcements/get', {method: "POST"})
      const data = await result.json()

      setActualAnn(data.announcements.actual)
      setPrevAnn(data.announcements.previous)
      console.log(data.announcements)
    }
    getAnnouncement()
  },[])

  return (
    <section className="pt-[50px] flex flex-col items-center px-[20px] gap-[70px] pb-[150px]">
      <Title title="Ogłoszenia" title2="" subtitle="Intencje"/>
      <AnnNav/>
      <article dangerouslySetInnerHTML={{__html: actualAnn.html}} className="w-[1200px] announcements-container"></article>
    </section>
  )
}

export default ogloszenia