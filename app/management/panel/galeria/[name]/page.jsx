"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { name } = useParams()
    return (
        <div>{decodeURIComponent(name)}</div>
    )
}

export default page