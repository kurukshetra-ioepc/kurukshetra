import Link from 'next/link';

export default function About() {
    return (
        <main className="min-h-screen mt-9 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

            {/* Content Container */}
            <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
                {/* Title Section */}
                <h1 className="font-tech text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-red-600 animate-gradient-x">
                    About Kurukshetra: 1.0
                </h1>

                {/* Introduction Section */}
                <div className="glowing-container p-6 md:p-8 rounded-lg text-center mb-12">
                    <h2 className="font-tech text-2xl md:text-3xl font-semibold mb-4 text-cyan-300">
                        Part of Delta 5.0
                    </h2>
                    <p className=" text-gray-300 leading-relaxed md:leading-loose w-1/2 mx-auto">
                        Kurukshetra: 1.0, the flagship event of Delta 5.0, is Nepal’s premier robotics competition. Hosted at Purwanchal Campus, it showcases engineering innovation and excellence.
                    </p>

                    <div className="mt-20 space-y-4 md:space-y-6">
                        <h2 className=" text-2xl md:text-3xl font-semibold text-cyan-300">
                            Welcome to the Future of Robotics
                        </h2>
                        <p className=" text-gray-300 leading-relaxed">
                            Experience the thrill of robotic battles, interactive workshops, and exhibitions, all while fostering a community of innovators and problem-solvers.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <p className="font-tech text-lg md:text-xl text-cyan-300 mb-6">
                        Join us to experience the pinnacle of robotics innovation. Be a part of history in the making!
                    </p>
                    <Link
                        href="https://forms.gle/dTSiuD7p5Xwe3rm89"
                        target="_blank"
                        className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-tech font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </main>
    );
}
