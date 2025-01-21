import React from 'react';
import { Countdown } from './components/CountDown';
import { CTA } from './components/CTA';
import About from './(1.0)/about/page';
import './globals.css';
import Contact from './(1.0)/contactus/page';
import OurTeam from './components/Team';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-900 text-white overflow-hidden">
        <div className="relative h-screen flex flex-col justify-center items-center">
          {/* Enhanced Background animation */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary rotating gears */}
            <div className="gear-animation absolute top-1/4 left-1/4 w-96 h-96 border-t-4 border-cyan-500 rounded-full animate-spin-slow"></div>
            <div className="gear-animation absolute bottom-1/4 right-1/4 w-64 h-64 border-t-4 border-red-500 rounded-full animate-spin-slow-reverse"></div>

            {/* Additional orbital circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/20 rounded-full animate-orbit"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full animate-orbit-reverse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-red-500/20 rounded-full animate-orbit-slow"></div>

            {/* Moving dots on orbits */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="orbital-dot w-4 h-4 bg-cyan-500 rounded-full animate-orbital-movement"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="orbital-dot w-3 h-3 bg-blue-500 rounded-full animate-orbital-movement-reverse"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="orbital-dot w-2 h-2 bg-red-500 rounded-full animate-orbital-movement-slow"></div>
            </div>

            {/* Pulsing circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/5 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 rounded-full animate-pulse-slower"></div>

            {/* Circuit pattern overlay */}
            <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
          </div>

          {/* Hero content with enhanced typography */}
          <div className="z-10 text-center px-4 space-y-6">
            <div className="container mx-auto px-4 pt-8 relative z-10">
              <div className="flex justify-center items-center gap-12 mb-12">
                <div className="w-24 h-24 bg-white flex items-center justify-center">
                  <Image
                    src="/images/Group 70.png"
                    alt="Delta Logo"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="w-24 h-24  rounded-lg flex items-center justify-center  hover:bg-white/20 transition-all">
                  <Image
                    src="/images/fsu-logo.jpg"
                    alt="FSU Logo"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/campus-logo.png"
                    alt="Campus Logo"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <h4 className="font-mono text-xl text-cyan-400 tracking-wider uppercase">
              Main Event
            </h4>
            <h1 className="font-tech text-6xl md:text-8xl font-black mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-red-600 animate-gradient-x">
              KURUKSHETRA:1.0
            </h1>
            <p className="font-mono text-xl md:text-2xl mb-8 text-gray-300 tracking-wide">
              The Ultimate Robowar Showdown
            </p>
            <div className="glowing-container p-6 rounded-lg">
              <Countdown targetDate="2025-01-30T23:59:59" />
            </div>
            <CTA />
          </div>

          {/* Gradient overlays */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-900 to-transparent"></div>
        </div>

        <div className="px-4 py-16">
          <About />
        </div>
        <OurTeam />
        <Contact />
      </main>
    </div>
  );
}