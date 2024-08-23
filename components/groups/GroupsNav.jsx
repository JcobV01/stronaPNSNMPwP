"use client"

import React, { useEffect, useState } from 'react'
import GroupsMenuCard from './GroupsMenuCard'

import lsoIcon from '@public/assets/icons/groups/lso.svg'
import scholaIcon from '@public/assets/icons/groups/schola.svg'
import akIcon from '@public/assets/icons/groups/ak.svg'
import dsmIcon from '@public/assets/icons/groups/dsm.svg'
import rosesIcon from '@public/assets/icons/groups/roses.svg'
import menIcon from '@public/assets/icons/groups/management.svg'
import { usePathname } from 'next/navigation'

const menu = [
    {
        icon: lsoIcon,
        name: "Liturgniczna Służba Ołtarza",
        link: "/grupy-parafialne/lso"
    },
    {
        icon: scholaIcon,
        name: "Schola Młodzieżowa",
        link: "/grupy-parafialne/schola"
    },
    {
        icon: akIcon,
        name: "Akcja Katolicka",
        link: "/grupy-parafialne/ak"
    },
    {
        icon: dsmIcon,
        name: "Dziewczęca Służba Maryjna",
        link: "/grupy-parafialne/dsm"
    },
    {
        icon: rosesIcon,
        name: "Róże Różańcowe",
        link: "/grupy-parafialne/roze"
    },
    {
        icon: menIcon,
        name: "Rada Parafialna",
        link: "/grupy-parafialne/rada"
    }
]

const GroupsNav = () => {
    const [selected, setSelected] = useState('/grupy-parafialne/lso')
    const pathname = usePathname()

    useEffect(() => {
        setSelected(pathname)
    },[])

    return (
        <nav className='flex rounded-[7px] relative top-[-107px] items-center'>
            {menu.map((item) => (
                <GroupsMenuCard icon={item.icon} name={item.name} link={item.link} key={item.name} setActive={setSelected} isActive={selected === item.link} />
                
            ))}
        </nav>
    )
}

export default GroupsNav