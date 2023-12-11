import { Providers } from "./providers";
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cammy\'s Neopets Dailies',
  description: 'A list of Neopets dailies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://use.typekit.net/dzu5adv.css"/>
        </head>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  )
}
