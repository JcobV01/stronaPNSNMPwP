import Footer from '@components/Footer';
import '@styles/global.css';
import { headers } from 'next/headers';

export const metadata = {
    title: "Parafia Przybysławice",
    description: "Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów"
}

const RootLayout = ({ children }) => {
    const heads = headers()
    const pathname = heads.get("x-pathname")

    return (
        <html lang="pl-PL">
            <body>
                {pathname === "/" ? 
                <header>
                    Strona główna
                </header>
                :
                <header>
                    Strony poboczne
                </header>
                }
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}

export default RootLayout