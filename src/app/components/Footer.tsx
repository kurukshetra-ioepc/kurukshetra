"use client";

import Link from "next/link";
import {
    Mail,
    MapPin,
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-cyan-400 mb-4">About Kurukshetra</h2>
                        <p className="text-sm leading-relaxed">
                            Kurukshetra: 1.0, a part of Delta 5.0, is Nepal&apos;s premier robotics competition.
                            Organized by Purwanchal Campus, we&apos;re dedicated to pushing the boundaries of innovation
                            and engineering excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold text-cyan-400 mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            {[
                                { name: "Purwanchal Campus", href: "https://ioepc.edu.np/" },
                                { name: "About Kurukshetra", href: "/about" },
                                { name: "Delta 5.0", href: "https://delta.ioepc.edu.np/" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        className="hover:text-cyan-400 transition-colors flex items-center"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-semibold text-cyan-400 mb-4">Contact Information</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2">
                                <Mail size={20} className="text-cyan-400" />
                                <span>kurukshetra@ioepc.edu.np</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin size={20} className="text-cyan-400" />
                                <span>Purwanchal Campus, Dharan-08, Nepal</span>
                            </li>
                        </ul>

                        {/* Social Media Links */}
                        <div className="mt-6 flex space-x-4">
                            {[
                                { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61571952838597" },
                                { icon: FaInstagram, href: "https://instagram.com/_kurukshetra1.0" },
                                { icon: FaYoutube, href: " https://www.youtube.com/channel/UC9J9Z" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    <social.icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-700" />

                {/* Footer Bottom */}
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Kurukshetra. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;