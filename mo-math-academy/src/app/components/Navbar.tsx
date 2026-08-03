import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo.png"
            alt="Mo Math Academy"
            width={185}
            height={70}
            priority
          />
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">

          <Link
            href="/"
            className="relative text-[17px] font-medium text-gray-700 transition-colors duration-300 hover:text-green-700"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="relative text-[17px] font-medium text-gray-700 transition-colors duration-300 hover:text-green-700"
          >
            About
          </Link>

          <Link
            href="/#services"
            className="relative text-[17px] font-medium text-gray-700 transition-colors duration-300 hover:text-green-700"
          >
            Services
          </Link>

          <Link
            href="/#testimonials"
            scroll
            className="relative text-[17px] font-medium text-gray-700 transition-colors duration-300 hover:text-green-700"
          >
            Testimonials
          </Link>

          <Link
            href="/#contact"
            className="relative text-[17px] font-medium text-gray-700 transition-colors duration-300 hover:text-green-700"
          >
            Contact
          </Link>

        </nav>

        {/* CTA */}

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

      </div>
    </header>
  );
}
