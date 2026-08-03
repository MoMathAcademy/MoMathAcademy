import Testimonials from "./components/testimonials/Testimonials";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import {
  Users,
  GraduationCap,
  Globe,
  ClipboardList,
  TrendingUp,
  Handshake,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-24">

        {/* Heading */}

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-black tracking-tight">
            Why Families Choose{" "}
            <span className="text-green-700">
              Mo Math Academy
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-gray-600">
            Combining engineering, classroom expertise, and personalized
            instruction to help students build confidence, master mathematics,
            and achieve lasting academic success.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {/* Card 1 */}

          <div className="flex h-[220px] flex-col justify-center rounded-3xl border border-gray-100 bg-white px-8 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <Users className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-xl font-bold tracking-tight">
              10+ Years Teaching Experience
            </h3>

            <p className="mt-3 text-gray-500">
              Classroom & Private Tutoring
            </p>

          </div>

          {/* Card 2 */}

          <div className="flex h-[220px] flex-col justify-center rounded-3xl border border-gray-100 bg-white px-8 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <GraduationCap className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-xl font-bold tracking-tight">
              USF Engineering Graduate
            </h3>

            <p className="mt-3 text-gray-500">
              Bachelor's Degree in Industrial Engineering
            </p>

          </div>

          {/* Card 3 */}

          <div className="flex h-[220px] flex-col justify-center rounded-3xl border border-gray-100 bg-white px-8 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <Globe className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-xl font-bold tracking-tight">
              IB MYP Mathematics Teacher
            </h3>

            <p className="mt-3 text-gray-500">
              Experienced Middle & High School Educator
            </p>

          </div>
                    {/* Card 4 */}

          <div className="flex h-[220px] flex-col justify-center rounded-3xl border border-gray-100 bg-white px-8 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <ClipboardList className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-xl font-bold tracking-tight">
              SAT & ACT Test Prep
            </h3>

            <p className="mt-3 text-gray-500">
              College Admissions Preparation
            </p>

          </div>

          {/* Card 5 */}

          <div className="flex h-[220px] flex-col justify-center rounded-3xl border border-gray-100 bg-white px-8 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <TrendingUp className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-xl font-bold tracking-tight">
              90%+ EOC Pass Rate
            </h3>

            <p className="mt-3 text-gray-500">
              Helping Students Achieve Excellence
            </p>

          </div>

          {/* Card 6 */}

          <div className="flex h-[220px] flex-col justify-center rounded-3xl border border-gray-100 bg-white px-8 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <Handshake className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-xl font-bold tracking-tight">
              100+ Students Tutored
            </h3>

            <p className="mt-3 text-gray-500">
              Building Confidence Since 2013
            </p>

          </div>

        </div>

      </section>
<Testimonials />
    </main>
  );
}