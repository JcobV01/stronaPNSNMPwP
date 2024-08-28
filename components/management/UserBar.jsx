"use client"

import { signOut, useSession } from "next-auth/react"
import Image from "next/image"


import userImg from '@public/assets/icons/mamagement/user.svg'
import logoutImg from '@public/assets/icons/mamagement/logout.png'


const UserBar = () => {

    const session = useSession()
    console.log(session);

    const role = session.data?.user?.role
    const name = session.data?.user?.name

    const handleLogout = () => {
        signOut({callbackUrl: '/management'})
    }
    

    return (
        <div className="flex gap-[12px] items-center">
            <Image src={userImg.src} height={50} width={50} alt="Zdjęcie profilowe" className="rounded-full"/>
            <div>
                <p className="text-[15px] font-medium">{name}</p>
                <p className="text-[10px] font-light">{role === 'user' ? 'Użytkownik' : role === 'editor' ? "Redaktor" : "Administrator"}</p>
            </div>
            <div onClick={handleLogout} className="cursor-pointer">
                <Image src={logoutImg} width={21} height={21} alt="Ikona strzałki w dół" className="hover:scale-110 duration-500 hover:opacity-60"/>
            </div>
        </div>
    )
}

export default UserBar