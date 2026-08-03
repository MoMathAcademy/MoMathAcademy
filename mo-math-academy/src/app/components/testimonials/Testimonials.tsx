"use client";

import { useEffect, useState } from "react";
import ReviewModal from "./ReviewModal";
import TestimonialCard from "./TestimonialCard";
import { supabase } from "@/lib/supabase";

import { Testimonial } from "./types";
import {
  sampleParentTestimonials,
  sampleStudentTestimonials,
} from "./sampleTestimonials";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"parents" | "students">("parents");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showReviewModal, setShowReviewModal] = useState(false);

  useEffect(() => {
    async function loadTestimonials() {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setTestimonials(data ?? []);
    }

    loadTestimonials();
  }, []);

  const parentTestimonials = testimonials.filter(
    (t) => t.role === "parent"
  );

  const studentTestimonials = testimonials.filter(
    (t) => t.role === "student"
  );

  const parentsToDisplay =
    parentTestimonials.length > 0
      ? parentTestimonials
      : sampleParentTestimonials;

  const studentsToDisplay =
    studentTestimonials.length > 0
      ? studentTestimonials
      : sampleStudentTestimonials;

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
            Hear directly from parents and students about their experience
            learning with Mo Math Academy.
          </p>
        </div>

        {/* Toggle */}

        <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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

          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
          >
            ✨ Share Your Experience
          </button>
        </div>

        {/* Testimonials */}

        <div
          key={activeTab}
          className="mt-16 animate-fade"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {(activeTab === "parents"
              ? parentsToDisplay
              : studentsToDisplay
            ).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.review}
                name={testimonial.display_name}
                role={
                  testimonial.role === "parent"
                    ? "Verified Parent"
                    : "Verified Student"
                }
                subject={testimonial.course}
              />
            ))}
          </div>
        </div>
      </div>

      <ReviewModal
        open={showReviewModal}
        onClose={() => setShowReviewModal(false)}
      />
    </section>
  );
}
