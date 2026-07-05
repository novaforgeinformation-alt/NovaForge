import type { Metadata } from 'next'
import './globals.css'
import { fontVariables } from '@/lib/fonts'
import { ContactProvider } from '@/lib/contact-context'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import ContactForm from '@/components/ContactForm'
import ModalTrigger from '@/components/ModalTrigger'

export const metadata: Metadata = {
  metadataBase: new URL('https://novaforge.dev'),
  title: 'NovaForge | Software Built Around Your Business',
  description:
    'NovaForge helps businesses grow through custom software, automation, and modern digital solutions. Precision engineering for high-growth enterprises.',
  openGraph: {
    title: 'NovaForge | Software Built Around Your Business',
    description:
    'NovaForge helps businesses grow through custom software, automation, and modern digital solutions.',
    type: 'website',
    siteName: 'NovaForge',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://novaforge.dev',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NovaForge',
  description:
    'NovaForge helps businesses grow through custom software, automation, and modern digital solutions.',
  url: 'https://novaforge.dev',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-555-012-3456',
      email: 'hello@novaforge.dev',
      contactType: 'sales',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontVariables} light`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-surface">
        <ContactProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <ModalTrigger />
        </ContactProvider>
      </body>
    </html>
  )
}
