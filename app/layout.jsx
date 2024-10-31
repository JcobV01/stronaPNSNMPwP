import Footer from '@components/Footer';
import '@styles/global.css';
import DynamicHeader from '@components/header/DynamicHeader'

import mainBgImage from '@public/assets/images/background-images/main-background-image.webp'
import { AuthProvider } from '@components/management/Providers';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: "Parafia Przybysławice",
    description: "Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów",
    icon: '/favicon.ico',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="pl-PL">
            <body>
                <AuthProvider>
                    <DynamicHeader />
                    <main style={{ backgroundImage: `url(${mainBgImage.src})`, backgroundAttachment: 'fixed' }}>
                        {children}
                    </main>
                    <Footer />
                    <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                </AuthProvider>
            </body>
        </html>
    )
}

export default RootLayout