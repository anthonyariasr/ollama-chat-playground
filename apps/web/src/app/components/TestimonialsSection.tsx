export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Emily R.",
      quote: "AmberSky is magical. The sunset dinners were unforgettable!",
    },
    {
      name: "James M.",
      quote: "Perfect location for a relaxing getaway. The spa was incredible.",
    },
    {
      name: "Sofia L.",
      quote: "Best vacation ever. The staff made me feel like royalty.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#fdf6f0] text-center">
      <h2 className="text-3xl font-semibold mb-8 text-[var(--accent)]">What Our Guests Say</h2>
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-[var(--background)] text-[var(--foreground)] shadow-lg rounded-lg p-6 flex-1 border border-[var(--accent)]"
          >
            <p className="italic mb-4">“{item.quote}”</p>
            <p className="font-bold text-[var(--accent)]">– {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
