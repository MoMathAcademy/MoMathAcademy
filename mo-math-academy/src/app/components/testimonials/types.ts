export type Testimonial = {
  id: number;
  role: "parent" | "student";
  display_name: string;
  course: string;
  rating: number;
  review: string;
  photo_url: string | null;
  approved: boolean;
  featured: boolean;
  created_at: string;
};
