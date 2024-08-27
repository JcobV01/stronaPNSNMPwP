import Footer from '@components/Footer';
import '@styles/global.css';
import DynamicHeader from '@components/header/DynamicHeader'

import mainBgImage from '@public/assets/images/background-images/main-background-image.webp'
import { AuthProvider } from '@components/management/Providers';

export const metadata = {
    title: "Parafia Przybysławice",
    description: "Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="pl-PL">
            <body>
                <AuthProvider>
                    <DynamicHeader />
                    <main className='pb-[70px]' style={{ backgroundImage: `url(${mainBgImage.src})`, backgroundAttachment: 'fixed' }}>
                        {children}
                    </main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    )
}

export default RootLayout