import Link from 'next/link';
import { Award, Users, Zap } from 'lucide-react';
import { FaRobot } from 'react-icons/fa';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-50"></div>

                {/* Content Container */}
                <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
                    {/* Title and Subtitle */}
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                            Kurukshetra: 1.0
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                            Nepal&apos;s Premier Robotics Competition - Where Innovation Meets Inspiration
                        </p>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            {
                                icon: <FaRobot className="w-12 h-12 text-red-400" />,
                                title: "Cutting-Edge Robotics",
                                description: "Experience the latest innovations in robotic technology and engineering."
                            },
                            {
                                icon: <Award className="w-12 h-12 text-blue-400" />,
                                title: "Competitive Excellence",
                                description: "Showcase your skills in high-stakes robotic challenges and competitions."
                            },
                            {
                                icon: <Users className="w-12 h-12 text-purple-400" />,
                                title: "Community of Innovators",
                                description: "Connect with like-minded engineers and robotics enthusiasts."
                            },
                            {
                                icon: <Zap className="w-12 h-12 text-green-400" />,
                                title: "Learning Opportunities",
                                description: "Participate in Robotics and gain insights from industry experts."
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-cyan-300">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="bg-gray-800/60 rounded-xl p-8 max-w-2xl mx-auto mb-12 border border-gray-700/50">
                            <h2 className="text-3xl font-bold mb-4 text-cyan-300">
                                Be Part of the Robotic Revolution
                            </h2>
                            <p className="text-gray-300 mb-8">
                                Kurukshetra: 1.0 is more than a competition - it&apos;s a platform for pushing the boundaries of robotics and technology.
                            </p>
                            <Link
                                href="https://forms.gle/dTSiuD7p5Xwe3rm89"
                                target="_blank"
                                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-10 rounded-full text-lg 
                  transition-all duration-300 
                  hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30
                  focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>

                    {/* Event Details */}
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                            Event Details
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                            <div>
                                <strong className="text-cyan-400">Location:</strong> Purwanchal Campus
                            </div>
                            <div>
                                <strong className="text-cyan-400">Date:</strong> Jan 31st- Feb-2nd, 2025
                            </div>
                            <div>
                                <strong className="text-cyan-400">Hosted By:</strong> Delta 5.0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}