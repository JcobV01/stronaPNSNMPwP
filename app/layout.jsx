import Footer from '@components/Footer';
import '@styles/global.css';
import { headers } from 'next/headers';

import Logo from '@components/Logo'
import Icon from '@components/header/Icon'
import Navbar from '@components/navbar';

import mainImage from '@public/assets/images/header-images/main-image.webp';
import cemetery from '@public/assets/images/header-images/cemetery.webp';
import priests from '@public/assets/images/header-images/priests.webp';
import gallery from '@public/assets/images/header-images/main-image.webp';
import groups from '@public/assets/images/header-images/groups.webp';
import history from '@public/assets/images/header-images/history.webp';
import liturgicalCalendar from '@public/assets/images/header-images/liturgical-calendar.webp';
import messages from '@public/assets/images/header-images/messages.webp';
import events from '@public/assets/images/header-images/events.webp';
import announcements from '@public/assets/images/header-images/announcements.webp';
import nationals from '@public/assets/images/header-images/nationals.webp';
import sacraments from '@public/assets/images/header-images/sacraments.webp';

import fbIcon from '@public/assets/icons/facebook.svg'
import ytIcon from '@public/assets/icons/youtube.svg'

export const metadata = {
    title: "Parafia Przybysławice",
    description: "Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów"
}

const RootLayout = ({ children }) => {
    const heads = headers()
    const pathname = heads.get("x-pathname")

    const headerImages = {
        "/cmentarz": cemetery,
        "/duszpasterze": priests,
        "/galeria": gallery,
        "/grupy-parafialne": groups,
        "/historia": history,
        "/kalendarz": liturgicalCalendar,
        "/komunikaty": messages,
        "/nabozenstwa": events,
        "/ogloszenia": announcements,
        "/rodacy": nationals,
        "/sakramenty": sacraments,
    }

    const headerImage = headerImages[pathname];

    return (
        <html lang="pl-PL">
            <body>
                {pathname === "/" ?
                    <header className="w-full h-screen bg-cover" style={{ backgroundImage: `url(${mainImage.src})` }}>
                        <div className="w-full h-full bg-[rgba(0,0,0,0.30)] flex-center">
                            <section className='w-[960px] h-full flex items-center flex-col backdrop-blur-[5px] bg-[rgba(0,0,0,0.30)]'>
                                <div className='pt-[40px] flex-center'>
                                    <Logo width="200" height="200" />
                                </div>
                                <div className='flex-center flex-col text-center'>
                                    <p className='text-[20px] text-[#B0B0B0] mt-[25px]'>Rzymskokatolicka</p>
                                    <h1 className='text-white text-[80px] font-bold tracking-[4px] leading-[80px] mt-[30px]'>PARAFIA PRZYBYSŁAWICE</h1>
                                    <p className='text-white text-[25px] w-[550px] mt-[90px]'>Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów</p>
                                    <div className='flex-center gap-[30px] mt-[55px]'>
                                        <Icon imgSource={ytIcon} destination="https://www.youtube.com/channel/UC-YVjtMoqxUwkuZKdJvoZUw" />
                                        <Icon imgSource={fbIcon} destination="https://www.facebook.com/parafiaprzybyslawice" />
                                    </div>
                                </div>
                                <div className='mt-auto mb-[40px]'>
                                    <Navbar bold={false} uppercase={false}/>
                                </div>
                            </section>
                        </div>
                    </header>
                    :
                    <header className="w-full h-[605px] bg-cover bg-center" style={{ backgroundImage: `url(${headerImage.src})` }}>
                        <div className="w-full h-full bg-[#00000090]">
                            <section className='z-10 relative'>

                            </section>
                        </div>
                    </header>
                }
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout