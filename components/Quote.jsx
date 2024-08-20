import React from 'react'

const Quote = ({text, author}) => {
  return (
    <section>
        <p>{text}</p>
        <p>{author}</p>
    </section>
  )
}

export default Quote