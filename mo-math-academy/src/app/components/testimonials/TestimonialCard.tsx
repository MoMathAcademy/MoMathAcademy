import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  subject: string;
  rating?: number;
  onClick?: () => void;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  subject,
  rating = 5,
  onClick,
}: TestimonialCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Stars */}

      <div className="mb-5 flex gap-1 text-green-600">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? "currentColor" : "none"}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        ))}
      </div>

      {/* Quote */}

      <div className="flex-1">
        <p
          className="overflow-hidden text-[15px] leading-7 font-medium italic text-gray-700"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          "{quote}"
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="mt-4 text-sm font-semibold text-green-700 transition hover:text-green-800"
        >
          Read Full Story →
        </button>
      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-gray-100" />

      {/* Footer */}

      <div className="flex items-center gap-3">
        {/* Avatar */}

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
          {name.charAt(0)}
        </div>

        <div className="flex flex-col">
          <h4 className="text-base font-bold text-gray-900">
            {name}
          </h4>

          <div className="mt-1.5">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700">
              ✓ {role}
            </span>
          </div>

          <div className="mt-1.5">
            <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
              {subject}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
