import './globals.css'
import type { Metadata } from 'next'
import AppContext from '@/appContext/AppContext'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppContext>
        <body>{children}</body>
      </AppContext>
    </html>
  );
}