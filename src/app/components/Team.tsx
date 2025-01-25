"use client";

import Image from "next/image";
import { Mail, Facebook, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Binam Sherstha",
    position: "Mentor",
    email: "binam9800961247@gmail.com",
    image: "/images/binam-shrestha.jpg",
    facebook: "https://www.facebook.com/BinamShrestha7890",
    linkedin: ""
  },
  {
    name: "Rohan Acharya",
    position: "Event Coordinator",
    email: "rohanacharyaperso@gmail.com",
    image: "/images/rohan-acharya.jpg",
    facebook: "https://www.facebook.com/rohan.acharya.733",
    linkedin: ""
  },
  {
    name: "Nabin Yadav",
    position: "Technical Coordinator",
    email: "nabiny501@gmail.com",
    image: "/images/Nabin yadav.jpg",
    facebook: "https://www.facebook.com/nabin.yadav.376695",
    linkedin: ""
  },
  {
    name: "Sushant Niraula",
    position: 'Advisor',
    email: "sushantniraula01@gmail.com",
    image: "/images/sushant-niraula.jpg",
    facebook: "https://www.facebook.com/profile.php?id=100009263130473",
    linkedin: ""
  },
  {
    name: "Suman Khatri",
    position: "Member",
    email: "sumankc043@gmail.com",
    image: "/images/suman-khatri.jpg",
    facebook: "https://www.facebook.com/profile.php?id=100080660887017",
    linkedin: ""
  },
  {
    name: "Roshan Khatri",
    position: "Member",
    email: "roshankhatri456@gmail.com",
    image: "/images/Roshan-khatri.jpeg",
    facebook: "https://www.facebook.com/RoshanKhatri7.8",
    linkedin: ""
  },
  {
    name: "Nitesh Paudel",
    position: "Member",
    email: "niteshpaudel2004@gmail.com",
    image: "/images/nitesh-paudel.jpg",
    facebook: "https://www.facebook.com/neetesh.poudel.7",
    linkedin: ""
  },
  {
    name: "Sagar Ghimire",
    position: "Member",
    email: "",
    image: "/images/sagar-ghimire.jpg",
    facebook: "https://www.facebook.com/sagar.ghimire.58367",
    linkedin: ""
  }
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Member Image */}
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Optional: Add member description if available */}
                  </p>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {member.position}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Mail size={24} />
                    </a>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;