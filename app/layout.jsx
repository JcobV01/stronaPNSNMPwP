import Footer from '@components/Footer';
import '@styles/global.css';
import DynamicHeader from '@components/header/DynamicHeader'

import mainBgImage from '@public/assets/images/background-images/main-background-image.webp'
import { AuthProvider } from '@components/management/Providers';
import Head from 'next/head';

export const metadata = {
    title: "Parafia Przybysławice",
    description: "Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="pl-PL">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <AuthProvider>
                    <DynamicHeader />
                    <main style={{ backgroundImage: `url(${mainBgImage.src})`, backgroundAttachment: 'fixed' }}>
                        {children}
                    </main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    )
}

export default RootLayout