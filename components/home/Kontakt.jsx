'use client'

import { useState } from "react"
import Link from "next/link"
import Title from "@components/Title"
import KontaktInfo from "./KontaktInfo"

import Image from "next/image"
import bgImage from "@public/assets/images/background-images/contact-background-image.webp"
import { Icon } from "@iconify/react"

const Kontakt = () => {

    const contactInfo = [
        {
            icon: 'ic:outline-alternate-email',
            title: 'E-mail parafialny',
            desc: 'przybyslawice@diecezja.tarnow.pl',
        },
        {
            icon: 'ic:baseline-phone',
            title: 'Telefon',
            desc: '+48 14 645 25 46',
        },
        {
            icon: 'mdi:bank',
            title: 'Konto parafialne',
            desc: '58858900060130038852190001',
        },
    ]

    return (
        <section id="kontakt" className="flex-center mt-[100px] pb-[100px] relative">
            <Image src={bgImage} width="1920" height="1000" alt="Obrazek tła w sekcji kontakt" className="w-full absolute h-[1000px] object-cover brightness-[0.15]" />
            <div className="mt-[65px] h-[1000px]">
                <Title title="Kontakt" title2="" subtitle="Skontaktuj się z nami" color="#FFF" />
                <div className="flex gap-[200px] mt-[65px]">
                    <div className="z-10 relative flex flex-col mt-[80px]">

                        <div className="flex items-center gap-[10px]">
                            <Icon icon="heroicons:map-pin-16-solid" width="30" height="30" className="text-[#5A7889]" />
                            <p className="text-[#B0B0B0] text-[17px]">Znajdziesz nas tutaj</p>
                        </div>
                        <p className="text-[#ECECEC] text-[18px] tracking-[1.8px] font-medium mt-[5px] pl-[40px]">Parafia rzymskokatolicka<br />pw.&nbsp;<span className="text-[#5A7889]">Niepokalanego Serca NMP</span><br />Przybysławice 157<br />33-273 Marcinkowice</p>

                        {
                            contactInfo.map((info, index) => (
                                <KontaktInfo icon={info.icon} title={info.title} desc={info.desc} key={index} />
                            ))
                        }

                        <div className="flex gap-[10px] mt-[30px]">
                            <Link href="https://www.facebook.com/parafiaprzybyslawice" aria-label="Przejdź do facebooka">
                                <Icon icon="ic:baseline-facebook" width="30" height="30" className="text-[#5A7889]" />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UC-YVjtMoqxUwkuZKdJvoZUw" aria-label="Przejdź do youtube">
                                <Icon icon="fa6-brands:youtube" width="30" height="30" className="text-[#5A7889]" />
                            </Link>
                        </div>
                    </div>
                    <div className="z-10 relative flex flex-col">
                        <h4 className="text-[25px] text-white font-medium tracking-[5px]">Formularz kontaktowy</h4>

                        <div className="bg-[rgba(18,39,43,0.70)] w-[550px] h-[75px] rounded-[18px] flex items-center pl-[25px] mt-[15px]">
                            <p className="text-[20px] text-[#B0B0B0] tracking-[4px]">Kontakt z:</p>
                            <label className="radio-label">
                                <input type="radio" name="role" value="administracja" className="radio-input" />
                                <span className="radio-custom"></span>
                                Administracja
                            </label>

                            <label className="radio-label">
                                <input type="radio" name="role" value="proboszcz" className="radio-input" />
                                <span className="radio-custom"></span>
                                ks. Proboszcz
                            </label>
                        </div>

                        <div className="bg-[rgba(18,39,43,0.70)] w-[550px] h-[75px] rounded-[18px] mt-[15px] pl-[25px] flex items-center relative contact-form">
                            <Icon icon="clarity:email-solid" width="40px" height="40px" className="text-[#B0B0B0] absolute right-[15px]" />
                            <input type="text" name="" className="absolute w-[450px] outline-none text-[20px] text-white tracking-[4px] bg-transparent duration-500 z-[11]" required />
                            <span className="absolute text-[20px] text-[#B0B0B0] tracking-[4px] duration-500">E-mail</span>
                        </div>
                        <div className="bg-[rgba(18,39,43,0.70)] w-[550px] h-[75px] rounded-[18px] mt-[15px] pl-[25px] flex items-center relative contact-form">
                            <Icon icon="mdi:user" width="40px" height="40px" className="text-[#B0B0B0] absolute right-[15px]" />
                            <input type="text" name="" className="absolute w-[450px] outline-none text-[20px] text-white tracking-[4px] bg-transparent duration-500 z-[11]" required />
                            <span className="absolute text-[20px] text-[#B0B0B0] tracking-[4px] duration-500">Imię i Nazwisko</span>
                        </div>
                        <div className="bg-[rgba(18,39,43,0.70)] w-[550px] h-[250px] rounded-[18px] mt-[15px] pl-[25px] pt-[15px] relative contact-form">
                            <Icon icon="dashicons:text-page" width="40px" height="40px" className="text-[#B0B0B0] absolute right-[15px]" />
                            <textarea name="" className="absolute w-[450px] h-[200px] outline-none text-[20px] text-white tracking-[4px] bg-transparent duration-500 z-[11]" style={{ resize: 'none' }} required></textarea>
                            <span className="absolute text-[20px] text-[#B0B0B0] tracking-[4px] duration-500">Wiadomość</span>
                        </div>
                        <button className="w-[200px] h-[50px] border-[1px] border-solid border-[#5A7889] bg-[rgba(18,39,43,0.70)] rounded-[5px] text-white tracking-[4px] text-[20px] font-light mt-[35px] ml-auto">Wyślij</button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Kontakt