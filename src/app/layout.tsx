import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sprite from "@/components/Sprite/Sprite"
import {AppProvider} from "@/context/AppContext"
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Mobile } from '@/components/Mobile/Mobile'
import { Overlay } from "@/components/Overlay/Overlay"

import '../scss/app.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Humoney Platform One-Box рішення для отримання платежів і аналізу бізнесу.',
  description: 'Humoney Platform ефективне рішення для підвищення конверсії, оптимізації витрат і мінімізації чарджбеків у різних індустріях.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppProvider>
                    <Sprite />
                    <Header/>
                    {children}
                    <Footer/>
                    <Mobile/>
                    <Overlay/>
                </AppProvider>
            </body>
        </html>
    )
}
