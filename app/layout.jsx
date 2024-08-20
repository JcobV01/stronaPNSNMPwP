import Footer from '@components/Footer';
import '@styles/global.css';
import { headers } from 'next/headers';
import Logo from '@components/Logo'

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
                        <div className="w-full h-full bg-[#00000030]">
                            <section className='z-10 relative'>
                                <Logo width="200" height="200" />
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