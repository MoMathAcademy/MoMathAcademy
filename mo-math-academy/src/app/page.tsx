import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import {
  Users,
  GraduationCap,
  Globe,
  ClipboardList,
  TrendingUp,
  Trophy,
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
            Combining engineering, classroom experience, and personalized
            instruction to help students build confidence and achieve lasting
            success in mathematics.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {/* Card 1 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <Users className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight">
              10+ Years
            </h3>

            <p className="mt-3 text-gray-500">
              Teaching Experience
            </p>

          </div>

          {/* Card 2 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <GraduationCap className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight">
              B.S. Engineering
            </h3>

            <p className="mt-3 text-gray-500">
              University of South Florida
            </p>

          </div>

          {/* Card 3 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <Globe className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight">
              IB MYP
            </h3>

            <p className="mt-3 text-gray-500">
              IB Mathematics Educator
            </p>

          </div>

          {/* Card 4 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <ClipboardList className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight">
              SAT & ACT
            </h3>

            <p className="mt-3 text-gray-500">
              College Test Prep
            </p>

          </div>

          {/* Card 5 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <TrendingUp className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight">
              90%+
            </h3>

            <p className="mt-3 text-gray-500">
              EOC Pass Rate
            </p>

          </div>

          {/* Card 6 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <Trophy className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight">
              Algebra Bowl
            </h3>

            <p className="mt-3 text-gray-500">
              Winning Coach
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}