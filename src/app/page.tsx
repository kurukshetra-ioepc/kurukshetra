import Image from 'next/image'
import { Countdown } from './components/CountDown'
import { CTA } from './components/CTA'
import About from './(1.0)/about/page'
import './globals.css'
import Contact from './(1.0)/contact/page'
import Navbar from './components/Navbar'
import OurTeam from './components/Team'

export default function Home() {
  return (
    <div>
      <Navbar/>
    <main className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="relative h-screen flex flex-col justify-center items-center">
        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="gear-animation absolute top-1/4 left-1/4 w-96 h-96 border-t-4 border-blue-500 rounded-full"></div>
          <div className="gear-animation absolute bottom-1/4 right-1/4 w-64 h-64 border-t-4 border-red-500 rounded-full"></div>
        </div>

        {/* Hero content */}
        <div className="z-10 text-center px-4">
          <h4 className=''>Main Event</h4>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
            KURUKSHETRA:1.0
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            The Ultimate Robowar Showdown
          </p>
          <Countdown targetDate="2025-01-30T23:59:59" />
          <CTA />
        </div>

      </div>

      <About />
      <OurTeam/>
      <Contact />
    </main>
    </div>
  )
}