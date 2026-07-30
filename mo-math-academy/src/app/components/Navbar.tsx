import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[90px] max-w-[1600px] items-center justify-between px-8">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Mo Math Academy"
            width={185}
            height={70}
            priority
          />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 text-[17px] font-medium text-gray-800 lg:flex">
          <a
            href="#"
            className="border-b-2 border-green-700 pb-1 text-green-700"
          >
            Home
          </a>

          <a href="#" className="transition hover:text-green-700">
            About
          </a>

          <a href="#" className="transition hover:text-green-700">
            Services
          </a>

          <a href="#" className="transition hover:text-green-700">
            Testimonials
          </a>

          <a href="#" className="transition hover:text-green-700">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="hidden items-center gap-2 rounded-full bg-green-700 px-8 py-4 text-white shadow-lg transition hover:bg-green-800 lg:flex">
          Schedule a Session
          <ArrowRight size={18} />
        </button>
      </div>
    </header>
  );
}