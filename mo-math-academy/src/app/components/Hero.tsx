import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-2 sm:pt-4">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-10 sm:px-8 sm:py-16 lg:grid-cols-[52%_48%] lg:gap-14 lg:px-10">

        {/* LEFT */}
        <div className="relative z-10 max-w-[650px] lg:-ml-16">

          {/* Small Heading */}
          <p className="relative left-0 mb-5 text-center text-xs font-bold uppercase tracking-[0.35em] text-green-700 sm:left-[-48px]">
            Personalized Math Tutoring
          </p>

          {/* Main Heading */}
          <h1 className="text-center text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-gray-900 sm:text-[42px] lg:text-left xl:text-[52px]">
            <span className="block">
              Building Confidence in
            </span>

            <span className="relative left-0 block text-center text-[46px] font-black uppercase tracking-[0.12em] text-green-700 sm:left-[-50px] sm:text-[54px] xl:text-[64px]">
              MATH
            </span>

            <span className="block">
              "One Student at a Time"
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[560px] px-2 text-center text-[17px] leading-8 text-gray-600 sm:px-0 sm:text-[19px] sm:leading-9 lg:-ml-2">
            Personalized tutoring for Elementary, Middle, and High School
            Mathematics, including Algebra, Geometry, SAT/ACT,
            Placement Tests, and EOC preparation.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:-ml-34">

            <Link
              href="/contact"
              className="rounded-full bg-green-700 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
            >
              Schedule a Session
            </Link>

            <Link
              href="/about"
              className="rounded-full border-2 border-green-700 bg-white px-7 py-3.5 text-[15px] font-semibold text-green-700 transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative h-[340px] overflow-visible sm:h-[500px] lg:h-[640px]">

          {/* Background Glow */}
          <div className="absolute right-16 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-green-200/30 blur-3xl" />

          {/* Green Shape */}
          <div
            className="
              absolute
              -right-56
              top-1/2
              h-[800px]
              w-[980px]
              -translate-y-1/2
              rounded-l-[900px]
              bg-[#0F8A42]
            "
          />

          {/* Hero Image */}
          <Image
            src="/hero.png"
            alt="Mo Math Academy"
            fill
            priority
            sizes="(max-width:1024px) 100vw, 52vw"
            className="
              object-contain
              object-right
              scale-[1.08]
              translate-x-12
              select-none
            "
          />

        </div>

      </div>
    </section>
  );
}