import React from 'react'
import Link from 'next/link'

const TitleCard = ({subtitle, title, link}) => {
  return (
    <>
        <p>{subtitle}</p>
        <h4>{title}</h4>
        <Link href={link}>Dowiedz się więcej</Link>
    </>
  )
}

export default TitleCard