import React from 'react'
import '@styles/global.css';

export const metadata = {
    title: "Parafia Przybysławice",
    description: "Parafia Niepokalanego Serca Najświętszej Maryi Panny w Przybysławicach – parafia rzymskokatolicka, znajdująca się w diecezji tarnowskiej, w dekanacie Radłów"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="pl-PL">
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout