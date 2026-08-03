"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"parents" | "students">("parents");

  return (
    <section
  id="testimonials"
  className="bg-white py-28 scroll-mt-28"
>
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl font-black tracking-tight text-gray-900">
            What Families Are Saying
          </h2>

          <p className="mx-auto mt-6 max-w-5xl text-xl leading-8 text-gray-600">
            Hear directly from parents and students about their experience learning with Mo Math Academy.
          </p>

        </div>

        {/* Toggle */}

        <div className="mt-14 flex justify-center">

          <div className="inline-flex rounded-full bg-gray-100 p-1 shadow-inner">

            <button
              onClick={() => setActiveTab("parents")}
              className={`rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                activeTab === "parents"
                  ? "bg-green-700 text-white shadow-lg"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              Parents
            </button>

            <button
              onClick={() => setActiveTab("students")}
              className={`rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                activeTab === "students"
                  ? "bg-green-700 text-white shadow-lg"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              Students
            </button>

          </div>

        </div>

        {/* Temporary Content */}

<div
  key={activeTab}
  className="mt-16 animate-fade"
>
  {activeTab === "parents" ? (

    <div className="grid gap-8 lg:grid-cols-3">

      <TestimonialCard
        quote="Mr. Mo helped my daughter go from struggling in Algebra to earning an A. His patience and ability to explain concepts made all the difference."
        name="Sarah M."
        role="Verified Parent"
        subject="Algebra I Honors"
      />

      <TestimonialCard
        quote="We immediately noticed a huge boost in our son's confidence. He actually enjoys math now and looks forward to tutoring every week."
        name="Michael T."
        role="Verified Parent"
        subject="Geometry"
      />

      <TestimonialCard
        quote="Professional, knowledgeable, and genuinely cares about every student's success. We couldn't be happier with the results."
        name="Lisa R."
        role="Verified Parent"
        subject="SAT Math"
      />

    </div>

  ) : (

    <div className="grid gap-8 lg:grid-cols-3">

      <TestimonialCard
        quote="Mr. Mo made Geometry finally click for me. I actually started looking forward to math class."
        name="Emily"
        role="Verified Student"
        subject="Geometry Honors"
      />

      <TestimonialCard
        quote="I improved my Algebra grade from a C to an A. Mr. Mo explains everything in a way that actually makes sense."
        name="James"
        role="Verified Student"
        subject="Algebra I"
      />

      <TestimonialCard
        quote="The SAT strategies were incredibly helpful. I felt much more confident going into the exam."
        name="Sophia"
        role="Verified Student"
        subject="SAT Prep"
      />

    </div>

  )}

</div>

      </div>
    </section>
  );
}