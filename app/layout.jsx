import Footer from '@components/Footer';
import '@styles/global.css';
import DynamicHeader from '@components/header/DynamicHeader'

export const metadata = {
    title: "Parafia Przybysławice",
    description: "Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów"
}

const RootLayout = ({ children }) => {
    
    return (
        <html lang="pl-PL">
            <body>
                <DynamicHeader />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout