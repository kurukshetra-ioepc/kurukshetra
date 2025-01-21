'use client'

import { MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden mt-9">
            {/* Background elements */}
            <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <h1 className="font-tech text-4xl md:text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-red-600 animate-gradient-x">
                    Contact Us
                </h1>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Location Card */}
                        <div className="glowing-container p-8 rounded-lg backdrop-blur-sm bg-gray-800/30 hover:bg-gray-800/40 transition-all">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-cyan-500/10 rounded-full">
                                    <MapPin className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-tech text-xl font-semibold text-cyan-300 mb-2">Visit Us</h3>
                                    <p className="font-mono text-gray-300">
                                        Koshi Province <br />
                                        Purwanchal Campus <br />
                                        Dharan-8, Nepal
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="glowing-container p-8 rounded-lg backdrop-blur-sm bg-gray-800/30 hover:bg-gray-800/40 transition-all">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-red-500/10 rounded-full">
                                    <Mail className="h-6 w-6 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="font-tech text-xl font-semibold text-red-300 mb-2">Email Us</h3>
                                    <a
                                        href="mailto:contact@kurukshetra.com"
                                        className="font-mono text-gray-300 hover:text-cyan-400 transition-colors"
                                    >
                                        kurukshetra@ioepc.edu.np
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-center space-y-8">
                        <h2 className="font-tech text-2xl text-cyan-300">Connect With Us</h2>
                        <div className="flex justify-center space-x-8">
                            <a
                                href="https://www.facebook.com/profile.php?id=61571952838597"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-all group"
                            >
                                <Facebook className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                            </a>
                            {/* <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-pink-500/10 rounded-full hover:bg-pink-500/20 transition-all group"
                            >
                                <Instagram className="h-6 w-6 text-pink-400 group-hover:text-pink-300" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-blue-400/10 rounded-full hover:bg-blue-400/20 transition-all group"
                            >
                                <Twitter className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                            </a> */}


                            {/* write for mail */}
                            <a
                                href="mailto:kurukshetra@ioepc.edu.np"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-red-500/10 rounded-full hover:bg-red-500/20 transition-all group"
                            >
                                <Mail className="h-6 w-6 text-red-400 group-hover:text-red-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}