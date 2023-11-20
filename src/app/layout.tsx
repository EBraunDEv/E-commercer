import clsx from 'clsx'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata= {
  title: 'E-Commerce',
  description: 'E-Commerce- feito em Next.js + Typescript + TailwindCSS,', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
       <Navbar/>
        <main className=' h-screen p-16'>
        {children}
        </main>
        </body>
    </html>
  )
}
