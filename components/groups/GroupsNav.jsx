import React from 'react'
import GroupsMenuCard from './GroupsMenuCard'

import lsoIcon from '@public/assets/icons/groups/lso.svg'
import scholaIcon from '@public/assets/icons/groups/schola.svg'
import akIcon from '@public/assets/icons/groups/ak.svg'
import dsmIcon from '@public/assets/icons/groups/dsm.svg'
import rosesIcon from '@public/assets/icons/groups/roses.svg'
import menIcon from '@public/assets/icons/groups/management.svg'

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
    return (
        <nav className='flex rounded-[7px] relative top-[-107px] items-center lg:flex-wrap lg:w-[450px] lg:top-[-150px] sm:w-[90%] sm:justify-center'>
            {menu.map((item, index) => (
                <GroupsMenuCard icon={item.icon} name={item.name} link={item.link} key={item.name} rounded={index === 0 ? 'left' : index === 5 ? 'right' : 'none'}/>
                
            ))}
        </nav>
    )
}

export default GroupsNav