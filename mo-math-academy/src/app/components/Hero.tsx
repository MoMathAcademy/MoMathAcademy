import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-8 py-16 lg:grid-cols-[48%_52%] lg:px-10">

        {/* LEFT */}
        <div className="max-w-[560px]">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-green-700">
            Personalized Math Tutoring
          </p>

          <h1 className="text-[46px] font-black leading-[1.02] tracking-[-1.2px] text-gray-900 xl:text-[54px]">
            Building
            <br />
            <span className="text-green-700">Confidence</span> in Math,
            <br />
            One Student
            <br />
            at a Time.
          </h1>

          <p className="mt-6 max-w-[520px] text-[18px] leading-8 text-gray-600">
            Professional tutoring for Elementary Math, Middle School Math,
            Algebra I (Honors), Geometry (Honors), Algebra II (Honors),
            Trigonometry, Pre-Calculus, Calculus I, SAT, ACT,
            Placement Tests, and EOC preparation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <button className="rounded-full bg-green-700 px-6 py-3 text-[15px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-800">
              Schedule a Session
            </button>

            <button className="rounded-full border-2 border-green-700 px-6 py-3 text-[15px] font-semibold text-green-700 transition duration-300 hover:bg-green-50">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative h-[620px] overflow-visible">

          {/* Green Background */}
          <div
            className="
              absolute
              -right-56
              top-1/2
              h-[900px]
              w-[950px]
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
              scale-[1.06]
              translate-x-16
            "
          />

        </div>

      </div>
    </section>
  );
}