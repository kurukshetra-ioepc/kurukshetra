'use client'

import { MapPin, Mail, Facebook, Instagram, Twitter, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your server
        console.log('Form submitted:', formData)
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
                    Contact Us
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-300">Get in Touch</h2>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <MapPin className="text-red-400" />
                                <p>Koshi Province, Purwanchal Campus, Dharan-9</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="text-red-400" />
                                <a href="mailto:contact@kurukshetra.com" className="hover:text-blue-300 transition-colors">
                                    contact@kurukshetra.com
                                </a>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-300">Follow Us on Social Media</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <Facebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                                <Instagram />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <Twitter />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-red-300">Have Questions?</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold py-2 px-4 rounded-full text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <Send className="mr-2 h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

