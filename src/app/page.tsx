import { Metadata } from 'next'

import Image from 'next/image'

export const metadata: Metadata = {
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
}

export default function Home() {
  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="TQRco.cl Logo"
          width={180}
          height={37}
          priority
        />
   

     

    </main>
  )
}
