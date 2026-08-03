"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 lg:h-[88px] lg:px-4">
        {/* Logo */}

        <Link
          href="/"
          onClick={closeMenu}
          className="transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo.png"
            alt="Mo Math Academy"
            width={185}
            height={70}
            priority
            className="h-auto w-[145px] lg:w-[185px]"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          <Link href="/" className="text-[17px] font-medium text-gray-700 hover:text-green-700 transition">
            Home
          </Link>

          <Link href="/about" className="text-[17px] font-medium text-gray-700 hover:text-green-700 transition">
            About
          </Link>

          <Link href="/#services" className="text-[17px] font-medium text-gray-700 hover:text-green-700 transition">
            Services
          </Link>

          <Link href="/#testimonials" className="text-[17px] font-medium text-gray-700 hover:text-green-700 transition">
            Testimonials
          </Link>

          <Link href="/#contact" className="text-[17px] font-medium text-gray-700 hover:text-green-700 transition">
            Contact
          </Link>
        </nav>

        {/* Desktop Button */}

        <Link
          href="/#contact"
          className="group hidden items-center gap-2 rounded-full bg-green-700 px-7 py-3.5 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl lg:flex"
        >
          Schedule a Session

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white shadow-xl">

          <nav className="flex flex-col px-6 py-5">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-medium text-gray-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-medium text-gray-700"
            >
              About
            </Link>

            <Link
              href="/#services"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-medium text-gray-700"
            >
              Services
            </Link>

            <Link
              href="/#testimonials"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-medium text-gray-700"
            >
              Testimonials
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="py-4 text-lg font-medium text-gray-700"
            >
              Contact
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3 text-white shadow-lg transition hover:bg-green-800"
            >
              Schedule a Session
              <ArrowRight size={18} />
            </Link>

          </nav>

        </div>
      </div>
    </header>
  );
}