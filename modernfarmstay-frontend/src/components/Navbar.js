"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </Head>
      <nav className="bg-[#54b435] shadow-md border-b border-[#459a2d] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/whitelogo.png"
                alt="Green Valley Farm logo"
                width={120}
                height={120}
                className="rounded-full object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
              <Link href="/" className="text-white hover:text-gray-200 font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/rooms" className="text-white hover:text-gray-200 font-medium transition-colors duration-200">
                Rooms
              </Link>
              <Link href="/gallery" className="text-white hover:text-gray-200 font-medium transition-colors duration-200">
                Gallery
              </Link>
              <Link href="/about" className="text-white hover:text-gray-200 font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-200 font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>

            {/* Book Now and Mobile menu button */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden md:block bg-white hover:bg-gray-100 text-[#54b435] hover:text-[#459a2d] px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Book Now
              </Link>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-white hover:text-gray-200 transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-4 space-y-1 bg-[#459a2d] border-t border-[#54b435] shadow-md">
                <Link
                  href="/"
                  className="block px-3 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/rooms"
                  className="block px-3 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rooms
                </Link>
                <Link
                  href="/gallery"
                  className="block px-3 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-white hover:bg-gray-100 text-[#54b435] hover:text-[#459a2d] px-4 py-2 rounded-lg font-medium text-sm text-center transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
