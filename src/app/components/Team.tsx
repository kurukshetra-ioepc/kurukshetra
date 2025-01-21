"use client";

import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Binam Sherstha",
    email: "",
    image: "/images/binam-shrestha.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Rohan Acharya",
    email: "",
    image: "/images/rohan-acharya.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Nabin Yadav",
    email: "nabiny501@gmail.com",
    image: "/images/Nabin yadav.jpg",
    linkedin: "#",
    twitter: "#",
    github: "github.com/nabinyd",
  },
  {
    name: "Sushant Niraula",
    email: "sushantniraula01@gmail.com",
    image: "/images/sushant-niraula.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Suman Khatri",
    email: "zainab@uikit.com",
    image: "/images/suman-khatri.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },

];

const OurTeam = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#0f172a] to-[#1e2433] text-white min-h-screen flex items-center justify-center px-6"
      id="our-team"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#5294ff] to-[#ff3e52]">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1e2433] rounded-lg overflow-hidden flex flex-col items-center text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl shadow-[0px_4px_15px_rgba(0,0,0,0.5)]"
            >
              {/* Updated photo design */}
              <div className="w-full h-48 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-110"
                  // fill
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#5294ff]">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.email}</p>
                <p className="text-gray-300 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* Centered social media icons */}
                <div className="flex mt-4 space-x-4 justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077b5] hover:text-[#5294ff] transition duration-300 ease-in-out"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1da1f2] hover:text-[#5294ff] transition duration-300 ease-in-out"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#5294ff] transition duration-300 ease-in-out"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
