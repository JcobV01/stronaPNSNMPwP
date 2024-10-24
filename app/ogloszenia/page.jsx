"use client"

import Title from "@components/Title"
import { useEffect } from "react"

const ogloszenia = () => {

  useEffect(() => {
    const result = fetch('/api/announcements/get', {method: "POST"})
    console.log(result.json());
  },[])

  return (
    <section>
      <Title title="Ogłoszenia" title2="" subtitle="Intencje"/>
    </section>
  )
}

export default ogloszenia