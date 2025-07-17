import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/whitelogo.png"
              alt="Green Valley Farm logo"
              width={160}
              height={160}
            />
           
          </div>
          <p className="text-sm mb-4">
            Experience authentic farm life in the heart of nature. Your perfect
            countryside getaway awaits.
          </p>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF className="hover:text-primary cursor-pointer" />
            <FaInstagram className="hover:text-primary cursor-pointer" />
            <FaTwitter className="hover:text-primary cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/rooms">Rooms & Suites</Link></li>
  
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Farm Tours</li>
            <li>Organic Dining</li>
            <li>Event Hosting</li>
            <li>Cooking Classes</li>
            <li>Nature Walks</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Bandipur (Near Cable Car Lower Station), Tanahun</li>
            <li>📞 +977 9841362697</li>
            <li>✉️ modernfarmstaydumre@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-12 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Modern Farm Stay. All rights reserved.
      </div>
    </footer>
  );
}
