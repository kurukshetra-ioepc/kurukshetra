import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata = {
  title: 'Kurkshetra:1.0 - The Ultimate Robowar Showdown',
  description: 'Join the most exciting Robowar event of the year. Register now for Kurkshetra:1.0!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

