"use client";

import { Star, X } from "lucide-react";
import { Testimonial } from "./types";

interface ReviewPopupProps {
  testimonial: Testimonial | null;
  open: boolean;
  onClose: () => void;
}

export default function ReviewPopup({
  testimonial,
  open,
  onClose,
}: ReviewPopupProps) {
  if (!open || !testimonial) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl animate-in fade-in zoom-in duration-200"
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 transition hover:bg-gray-100"
        >
          <X size={22} />
        </button>

        {/* Stars */}

        <div className="mb-6 flex gap-1 text-green-600">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={22}
              fill={i < testimonial.rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        {/* Review */}

        <blockquote className="whitespace-pre-wrap text-xl italic leading-9 text-gray-700">
          "{testimonial.review}"
        </blockquote>

        <div className="my-8 h-px bg-gray-200" />

        {/* Footer */}

        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700">
            {testimonial.display_name.charAt(0)}
          </div>

          <div>
            <h3 className="text-xl font-bold">
              {testimonial.display_name}
            </h3>

            <p className="mt-1 text-green-700 font-semibold">
              ✓{" "}
              {testimonial.role === "parent"
                ? "Verified Parent"
                : "Verified Student"}
            </p>

            <p className="mt-1 text-gray-500">
              {testimonial.course}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
