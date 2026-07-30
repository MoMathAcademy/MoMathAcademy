import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="uppercase tracking-[0.35em] text-green-700 font-semibold mb-5">
              Personalized Math Tutoring
            </p>

            <h1 className="text-6xl font-black leading-tight">
              Building
              <span className="text-green-700"> Confidence </span>
              in Math,
              <br />
              One Student
              <br />
              at a Time.
            </h1>

            <p className="text-xl text-gray-600 mt-8 leading-8 max-w-xl">
              Professional tutoring for Elementary Math,
              Middle School Math, Algebra I,
              Geometry, IB MYP,
              Honors Mathematics,
              and EOC Preparation.
            </p>

            <div className="flex gap-4 mt-12 flex-wrap">

              <button className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition flex items-center gap-2">

                Schedule a Session

                <ArrowRight size={20} />

              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-full hover:bg-white hover:shadow-lg transition">

                Learn More

              </button>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="rounded-[40px] bg-white shadow-2xl p-10">

              <img
  src="/logo.png"
  alt="Mo Math Academy Logo"
  className="w-full max-w-md mx-auto"
 />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
