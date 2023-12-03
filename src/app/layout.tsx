import type { Metadata } from 'next'
import './globals.css'
import Navbar from './_components/navbar.component'
import Providers from './providers'
import Background from './_components/background.component'
import Footer from './_components/footer.component'

export const metadata: Metadata = {
  title: 'Edwin Lee',
  description: 'I build interactive applications that provide value to the users',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      style={{
        scrollBehavior: "smooth"
      }}>
      <head>
        <base target='_blank' />     
        <link rel='icon' href='/favicon.ico' sizes='any'/>   
      </head>
      <body>
        <Providers>
          <Background />

          <Navbar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
