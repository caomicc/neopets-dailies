import { Providers } from "./providers";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neopets Dailies',
  description: 'Cam\'s Neopets Dailies :)',
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
