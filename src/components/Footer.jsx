import React from "react";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const digitalServices = [
    "SEO",
    "Social Media",
    "PPC",
    "Web Development",
    "Email Marketing",
    "Analytics",
  ];
  return (
    <footer className="bg-black border-t border-yellow-500/20 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Click Agency
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Tech-first digital marketing agency in Bangalore, blending
              full-stack development with performance marketing.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <MapPin size={16} className="text-yellow-400" />
              <span>Indiranagar, Bangalore, India</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
              <Mail size={16} className="text-yellow-400" />
              <span>clickcontact00@gmail.com</span>
            </div>
            {/* <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
              <Phone size={16} className="text-yellow-400" />
              <span>+91 98765 43210</span>
            </div> */}
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Digital Services</h4>
            <ul className="space-y-2">
              {digitalServices.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 text-sm hover:text-yellow-400 cursor-pointer transition"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact & Connect</h4>
            <p className="text-gray-400 text-sm mb-3">
              Let's grow your business online
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/click_contact00?igsh=MW9rbHQ5ZHp3cmFrZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 cursor-pointer transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/click"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 cursor-pointer transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/click"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 cursor-pointer transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://wa.me/?text=Hi%20click%2C%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 cursor-pointer transition"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="italic text-gray-300 text-sm">
              "The best marketing doesn't feel like marketing. It feels like a
              solution." — Click Agency
            </p>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 pt-6 text-center text-gray-500 text-sm">
          <p>
            © 2026 Click Agency. All rights reserved — we do things differently.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
