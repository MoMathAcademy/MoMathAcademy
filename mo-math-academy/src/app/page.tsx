import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Families Choose Mo Math Academy
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Combining engineering, classroom experience, and personalized
          instruction to help students build confidence and achieve lasting
          success in mathematics.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-5xl mb-6">👨‍🏫</div>
            <h3 className="text-3xl font-bold mb-3">10+ Years</h3>
            <p className="text-gray-600 text-lg">
              Teaching & Tutoring Experience
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-5xl mb-6">🎓</div>
            <h3 className="text-3xl font-bold mb-3">B.S. Engineering</h3>
            <p className="text-gray-600 text-lg">
              Industrial & Systems Engineering
              <br />
              University of South Florida
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-5xl mb-6">🌍</div>
            <h3 className="text-3xl font-bold mb-3">IB MYP</h3>
            <p className="text-gray-600 text-lg">
              International Baccalaureate Mathematics Educator
            </p>
          </div>

<div className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
  <div className="text-5xl mb-6">📝</div>
  <h3 className="text-3xl font-bold mb-3">
    SAT & ACT
  </h3>
  <p className="text-gray-600 text-lg">
    Test Preparation
  </p>
</div>

          <div className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-5xl mb-6">📈</div>
            <h3 className="text-3xl font-bold mb-3">+90%</h3>
            <p className="text-gray-600 text-lg">
              Algebra-Geometry EOC Passing Rate
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-5xl mb-6">🥇</div>
            <h3 className="text-3xl font-bold mb-3">Algebra Bowl Coach</h3>
            <p className="text-gray-600 text-lg">
              Championship Team Coach
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}