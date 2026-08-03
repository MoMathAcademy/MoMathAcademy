"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ParentReviewForm() {
  const [displayName, setDisplayName] = useState("");
  const [course, setCourse] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.from("testimonials").insert([
      {
        role: "parent",
        display_name: displayName,
        course,
        rating,
        review,
        photo_url: photoUrl || null,
        approved: false,
        featured: false,
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(true);

    setDisplayName("");
    setCourse("");
    setRating(5);
    setReview("");
    setPhotoUrl("");
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-green-600">
          Thank you!
        </h3>

        <p className="mt-3 text-gray-600">
          Your review has been submitted and will appear after approval.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        required
        className="w-full rounded-xl border p-3"
      />

      <input
        type="text"
        placeholder="Course (Algebra, Geometry...)"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
        className="w-full rounded-xl border p-3"
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full rounded-xl border p-3"
      >
        <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
        <option value={4}>⭐⭐⭐⭐ (4)</option>
        <option value={3}>⭐⭐⭐ (3)</option>
        <option value={2}>⭐⭐ (2)</option>
        <option value={1}>⭐ (1)</option>
      </select>

      <textarea
        rows={5}
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        className="w-full rounded-xl border p-3"
      />

      <input
        type="url"
        placeholder="Photo URL (optional)"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
        className="w-full rounded-xl border p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
