import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
/**!
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = {
  title: {
    template: '%s | TQRico',
    default: 'TQRico',
  },
  description: 'Delicia a tu paladar',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Tequeños', 'comida', 'Fusión'],
  colorScheme: 'dark',
  creator: 'Giorgio Saud',
  publisher: 'Deanny Bruces',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  applicationName:'TQRico',
  authors: [
    {
      url:'https://instagram.com/itsdeannybruces',
      name:'Deanny Bruces'
    },
    {
      url:'https://blog.giorgiosaud.io',
      name:'Giorgio Saud'
    }
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
       {children}
      </body>
    </html>
    )
  }
  