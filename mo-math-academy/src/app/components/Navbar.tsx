export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b">
<h1
  className="text-4xl font-bold"
  style={{
    fontFamily: "'Cinzel', serif",
    color: "#14532d",
    textShadow: "0 2px 8px rgba(0,0,0,0.15)",
  }}
>
        Mo Math Academy
      </h1>

      <div className="hidden md:flex gap-8 font-medium">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}