import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-8 px-8 py-20 lg:grid-cols-[46%_54%] lg:px-12">

        {/* LEFT */}
        <div className="max-w-[620px]">

          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-green-700">
            Personalized Math Tutoring
          </p>

          <h1 className="text-[64px] font-black leading-[0.95] tracking-[-2px] text-gray-900 xl:text-[76px]">
            Building
            <br />
            <span className="text-green-700">Confidence</span> in Math,
            <br />
            One Student
            <br />
            at a Time.
          </h1>

          <p className="mt-8 max-w-[560px] text-lg leading-8 text-gray-600">
            Professional tutoring for Elementary Math, Middle School Math,
            Algebra I (Honors), Geometry (Honors), Algebra II (Honors),
            Trigonometry, Pre-Calculus, Calculus I, SAT, ACT,
            Placement Tests and EOC preparation.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <button className="rounded-full bg-green-700 px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-green-800">
              Schedule a Session
            </button>

            <button className="rounded-full border-2 border-green-700 px-8 py-4 text-lg font-semibold text-green-700 transition hover:bg-green-50">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative h-[720px] overflow-visible">

          {/* Organic Background */}
          <div
            className="
              absolute
              -right-80
              top-1/2
              h-[1050px]
              w-[1150px]
              -translate-y-1/2
              rounded-l-[1000px]
              bg-[#0F8A42]
            "
          />

          {/* Hero Image */}
          <Image
            src="/hero.png"
            alt="Mo Math Academy"
            fill
            priority
            className="
              object-contain
              object-right
              scale-[1.25]
              translate-x-40
              rounded-[24px]
            "
          />

        </div>

      </div>
    </section>
  );
}