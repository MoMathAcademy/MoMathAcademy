import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
<header className="sticky top-0 z-50 bg-white">   
     <div className="mx-auto flex h-[85px] max-w-[1600px] items-center justify-between px-8">
        {/* Logo */}
       <Link
  href="/"
  className="flex items-center bg-red-300"
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
        <nav className="hidden items-center gap-12 text-[17px] font-medium text-gray-800 lg:flex">

          <Link
            href="/"
            className="border-b-2 border-green-700 pb-1 text-green-700 transition hover:text-green-700"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-green-700"
          >
            About
          </Link>

          <Link
            href="/#services"
            className="transition hover:text-green-700"
          >
            Services
          </Link>

          <Link
  href="#testimonials"
  className="transition hover:text-green-700"
>
  Testimonials
</Link>

          <Link
            href="/#contact"
            className="transition hover:text-green-700"
          >
            Contact
          </Link>

        </nav>

        {/* Schedule Button */}
        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-full bg-green-700 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 lg:flex"
        >
          Schedule a Session
          <ArrowRight size={18} />
        </Link>

      </div>
    </header>
  );
}