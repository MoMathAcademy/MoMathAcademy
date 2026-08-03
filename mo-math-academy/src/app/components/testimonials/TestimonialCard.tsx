import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  subject: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  subject,
}: TestimonialCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Stars */}

      <div className="mb-6 flex gap-1 text-green-600">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill="currentColor"
            className="transition group-hover:scale-110"
          />
        ))}
      </div>

      {/* Quote */}

      <p className="min-h-[120px] text-lg leading-8 text-gray-700 italic">
        "{quote}"
      </p>

      {/* Divider */}

      <div className="my-6 h-px bg-gray-100" />

      {/* Avatar */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-700">
          {name.charAt(0)}
        </div>

  <div className="flex flex-col">

  <h4 className="text-lg font-bold text-gray-900">
    {name}
  </h4>

  <div className="mt-2 h-7">
    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
      ✓ {role}
    </span>
  </div>

  <div className="mt-2 h-7">
    <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
      {subject}
    </span>
  </div>

</div>

      </div>

    </div>
  );
}