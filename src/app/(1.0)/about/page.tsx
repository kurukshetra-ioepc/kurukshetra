import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
                    About Kurukshetra: 1.0
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300">Welcome to the Future of Robotics</h2>
                        <p className="mb-4 text-justify">
                            Kurukshetra: 1.0 is a groundbreaking robotics competition that brings together engineering minds and technology enthusiasts from across the nation! This event, hosted in Koshi Province for the first time, is a celebration of innovation, creativity, and the spirit of engineering excellence.
                        </p>
                        <p className='mb-4 text-justify'>
                            From intense robotic showdowns to interactive workshops and exhibitions, our event offers an unparalleled experience for participants and audiences alike. We are committed to building a community that encourages knowledge sharing, problem-solving, and the pursuit of engineering excellence.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-full">
                        <Image
                            src="/images/robo-bot.jpg"
                            alt="Robots in battle"

                            className="rounded-full shadow-lg "
                            height={400}
                            width={400}
                        />
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-red-300">Our Mission</h2>
                    <p className="mb-4">
                        Our mission is to provide a platform where students and professionals can showcase their technical skills, compete in exciting robotic battles, and inspire a new wave of technological advancements. Kurukshetra: 1.0 aims to ignite curiosity, foster collaboration, and push the boundaries of robotics engineering.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300">The Significance of Kurukshetra</h2>
                    <p className="mb-4 text-justify">
                        The name "Kurukshetra" draws inspiration from the ancient Indian epic, Mahabharata. Just as Kurukshetra was the battleground where great warriors showcased their skills and determined the course of history, our event serves as a modern-day arena for technological warriors to demonstrate their prowess in robotics.
                    </p>
                    <p className="mb-4 text-justify">
                        By choosing this name, we aim to evoke the spirit of healthy competition, strategic thinking, and the pursuit of excellence that the original Kurukshetra represents. Our event symbolizes the battlefield of ideas, where innovative concepts clash and the future of robotics is shaped.
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-xl mb-6">
                        Join us in this thrilling journey of innovation and be a part of shaping the future of technology. Together, let's create history in the world of robotics!
                    </p>
                    <Link href="https://forms.gle/dTSiuD7p5Xwe3rm89" target='_blank' className="inline-block bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Register Now
                    </Link>
                </div>
            </div>
        </main>
    )
}

