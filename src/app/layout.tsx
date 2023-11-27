import type { Metadata } from 'next'
import './globals.css'
import Navbar from './_components/navbar.component'
import Providers from './providers'
import Background from './_components/background.component'
import Footer from './_components/footer.component'

export const metadata: Metadata = {
  title: 'Edwin Lee',
  description: 'Edwin Lee Web Developer Portfolio',
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
