"use client";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-6">
                {/* Footer Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
                        <p className="text-sm">
                            Kurukshetra: 1.0, a part of Delta 5.0, is Nepal’s premier robotics competition organized by Purwanchal Campus. Join us to experience the pinnacle of innovation and creativity in engineering.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="https://ioepc.edu.np/"
                                    target="_blank"
                                    className="hover:text-cyan-400 transition"
                                >
                                    Purwanchal Campus
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-cyan-400 transition"
                                >
                                    About Kurukshetra
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://delta.ioepc.edu.np/"
                                    target="_blank"
                                    className="hover:text-cyan-400 transition"
                                >
                                    Delta 5.0
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-cyan-400 transition"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                        <ul className="space-y-2">
                            <li>Email: kurukshetra@ioepc.edu.np</li>
                            <li>Address: Purwanchal Campus, Dharan-08, Nepal</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-700" />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Kurukshetra. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
