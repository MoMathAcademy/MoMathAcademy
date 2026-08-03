"use client";

import { useEffect, useState } from "react";
import ParentReviewForm from "./ParentReviewForm";
import StudentReviewForm from "./StudentReviewForm";
import { X } from "lucide-react";

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ReviewModal({
  open,
  onClose,
}: ReviewModalProps) {
  const [role, setRole] = useState<"parent" | "student" | null>(null);

  useEffect(() => {
    if (!open) {
      setRole(null);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md p-6">

      <div className="relative mx-auto my-12 w-full max-w-xl rounded-[32px] bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.18)]">

        {/* Close Button */}

        <button
          onClick={() => {
            setRole(null);
            onClose();
          }}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {!role ? (
          <>
            <div className="text-center">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                ⭐
              </div>

              <h2 className="text-4xl font-black tracking-tight text-gray-900">
                Share Your Experience
              </h2>

              <p className="mx-auto mt-5 max-w-md text-lg leading-7 text-gray-600">
                Thank you for choosing Mo Math Academy.
                Your feedback helps future students and families
                make confident decisions.
              </p>

            </div>

            <div className="mt-10 space-y-4">

              <button
                onClick={() => setRole("parent")}
                className="w-full rounded-2xl border-2 border-green-700 p-5 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg"
              >
                👨‍👩‍👧 I am a Parent
              </button>

              <button
                onClick={() => setRole("student")}
                className="w-full rounded-2xl border-2 border-green-700 p-5 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg"
              >
                🎓 I am a Student
              </button>

            </div>
          </>
        ) : role === "parent" ? (
          <ParentReviewForm />
        ) : (
          <StudentReviewForm />
        )}

      </div>

    </div>
  );
}