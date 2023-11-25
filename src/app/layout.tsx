import type { Metadata } from 'next'
import './globals.css'
import Navbar from './_components/navbar.component'
import Providers from './provides'
import Background from './background.component'

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
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}

          <Background />
        </Providers>
      </body>
    </html>
  )
}
