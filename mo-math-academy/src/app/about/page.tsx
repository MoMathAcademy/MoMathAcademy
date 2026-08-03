import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-6xl px-8 py-24">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
            About Mr. Mo
          </p>

          <h1 className="mt-4 text-5xl font-black text-gray-900">
            Mr. Mo's Story
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            Welcome to my story. This page will eventually share my journey
            from engineering to becoming a mathematics educator and the
            inspiration behind founding Mo Math Academy.
          </p>

        </section>
      </main>
    </>
  );
}
