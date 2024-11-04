'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import Title from "@components/Title"
import KontaktInfo from "./KontaktInfo"
import { toast } from 'react-toastify';

import Image from "next/image"
import bgImage from "@public/assets/images/background-images/contact-background-image.webp"
import { Icon } from "@iconify/react"
import { getCurrentDataTime } from "@utils/datatime"
import useIntersectionObserver from "@hooks/useObserver"

const Kontakt = () => {
    const [objective, setObjective] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const currentDate = getCurrentDataTime();
        setDate(currentDate);
    }, [isSubmitting]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!objective || !email || !name || !message) {
            setError('Wypełnij wszystkie pola!');
            return;
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            setError('Podaj poprawny adres email!');
            setIsSubmitting(false);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact/', {
                method: 'POST',
                body: JSON.stringify({
                    Objective: objective,
                    Email: email,
                    Name: name,
                    Message: message,
                    Date: date,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                toast.success('Wysłano wiadomość!');
                setEmail('');
                setName('');
                setMessage('');
                setDate('');
            }
        } catch (error) {
            setError('Wystąpił nieoczekiwany błąd.');
        } finally {
            setIsSubmitting(false);
        }
    }

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

    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1 // 10% widoczności sekcji wystarczy do uruchomienia animacji
    });

    return (
        <section id="kontakt" ref={ref} className={`flex-center mt-[100px] pb-[100px] relative transition-all duration-1000 ease-in-out ${isVisible ? 'animation-visible' : 'animation-hidden'}`}>
            <Image src={bgImage} width="1920" height="1000" alt="Obrazek tła w sekcji kontakt" className="w-full absolute h-[1000px] object-cover brightness-[0.15] lg:h-[1425px] aspect-[1920/1000]" />
            <div className="mt-[65px] h-[1000px] lg:h-[1425px]">
                <Title title="Kontakt" title2="" subtitle="Skontaktuj się z nami" color="#FFF" />
                <div className="flex gap-[200px] mt-[65px] xl:gap-[25px] lg:flex-col lg:mt-[25px]">
                    <div className="z-10 relative flex flex-col mt-[80px] lg:mt-0 sm:px-[15px]">

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

                        <div className="flex gap-[10px] mt-[30px] sm:justify-center">
                            <Link href="https://www.facebook.com/parafiaprzybyslawice" title="Przejdź do facebooka" aria-label="Facebook">
                                <Icon icon="ic:baseline-facebook" width="30" height="30" className="text-[#5A7889]" />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UC-YVjtMoqxUwkuZKdJvoZUw" title="Przejdź do youtube" aria-label="Youtube">
                                <Icon icon="fa6-brands:youtube" width="30" height="30" className="text-[#5A7889]" />
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="z-10 relative flex flex-col lg:mt-[25px]">
                        <h4 className="text-[25px] text-white font-medium tracking-[5px] lg:text-center sm:text-[20px]">Formularz kontaktowy</h4>
                        {error && <span className='text-red-700 font-semibold tracking-[2px] xl:text-[15px] lg:text-center'>{error}</span>}

                        <div className="bg-[rgba(18,39,43,0.70)] w-[550px] h-[75px] rounded-[18px] flex items-center pl-[25px] mt-[15px] gap-[10px] sm:w-[90%] sm:mx-auto sm:flex-col sm:items-start sm:h-[110px]">
                            <p className="text-[20px] text-[#B0B0B0] tracking-[4px] sm:text-[16px] sm:pt-[5px]">Kontakt z:</p>

                            <input type="radio" id="administracja" name="objective" value="Administracja" onChange={() => setObjective('Administracja')} className="radio-input hidden" />
                            <label htmlFor="administracja" className="radio-label">
                                <span className="pl-[10px] text-[15px] text-[#B0B0B0] tracking-[3px] flex items-center gap-[5px] circle">Administracja</span>
                            </label>

                            <input type="radio" id="proboszcz" name="objective" value="ks. Proboszcz" onChange={() => setObjective('ks. Proboszcz')} className="radio-input hidden" />
                            <label htmlFor="proboszcz" className="radio-label">
                                <span className="pl-[10px] text-[15px] text-[#B0B0B0] tracking-[3px] flex items-center gap-[5px] circle">ks. Proboszcz</span>
                            </label>
                        </div>

                        <div className="bg-[rgba(18,39,43,0.70)] w-[550px] h-[75px] rounded-[18px] mt-[15px] pl-[25px] flex items-center relative contact-form sm:w-[90%] sm:mx-auto">
                            <Icon icon="clarity:email-solid" width="40px" height="40px" className="text-[#B0B0B0] absolute right-[15px]" />
                            <input type="text" onFocus={() => setIsFocused(true)} placeholder={!isFocused ? "E-mail" : ""} value={email} onChange={(e) => setEmail(e.target.value)} className="w-[450px] outline-none text-[18px] text-white tracking-[4px] bg-transparent duration-500 z-[11] sm:text-[16px] sm:w-[100%] sm:pr-[85px]" required />
                            <span className="absolute text-[18px] text-[#B0B0B0] tracking-[4px] duration-500 sm:text-[16px]">E-mail</span>
                        </div>

                        <div className="bg-[rgba(18,39,43,0.70)] w-[550px] h-[75px] rounded-[18px] mt-[15px] pl-[25px] flex items-center relative contact-form sm:w-[90%] sm:mx-auto">
                            <Icon icon="mdi:user" width="40px" height="40px" className="text-[#B0B0B0] absolute right-[15px]" />
                            <input type="text" onFocus={() => setIsFocused(true)} placeholder={!isFocused ? "Imię i Nazwisko" : ""} value={name} onChange={(e) => setName(e.target.value)} className="w-[450px] outline-none text-[18px] text-white tracking-[4px] bg-transparent duration-500 z-[11] sm:text-[16px] sm:w-[100%] sm:pr-[85px]" required />
                            <span className="absolute text-[18px] text-[#B0B0B0] tracking-[4px] duration-500 sm:text-[16px]">Imię i Nazwisko</span>
                        </div>

                        <div className="bg-[rgba(18,39,43,0.70)] w-[550px] h-[250px] rounded-[18px] mt-[15px] pl-[25px] pt-[15px] relative contact-form sm:w-[90%] sm:mx-auto">
                            <Icon icon="dashicons:text-page" width="40px" height="40px" className="text-[#B0B0B0] absolute right-[15px]" />
                            <textarea onFocus={() => setIsFocused(true)} placeholder={!isFocused ? "Wiadomość" : ""} value={message} onChange={(e) => setMessage(e.target.value)} className="absolute w-[450px] h-[200px] outline-none text-[18px] text-white tracking-[4px] bg-transparent duration-500 z-[11] sm:text-[16px] sm:w-[100%] sm:pr-[85px]" style={{ resize: 'none' }} required />
                            <span className="absolute text-[18px] text-[#B0B0B0] tracking-[4px] duration-500 sm:text-[16px]">Wiadomość</span>
                        </div>

                        <button disabled={isSubmitting} className="w-[200px] h-[50px] border-[1px] border-solid border-[#5A7889] bg-[rgba(18,39,43,0.70)] rounded-[5px] text-white tracking-[4px] text-[20px] font-light mt-[35px] ml-auto sm:text-[16px] sm:mr-[25px]">Wyślij</button>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Kontakt