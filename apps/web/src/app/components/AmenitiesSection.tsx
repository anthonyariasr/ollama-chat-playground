export default function AmenitiesSection() {
  const amenities = [
    { title: "Infinity Pool", desc: "Swim under the sky as the sun sets." },
    { title: "Spa & Wellness", desc: "Relax your body and mind with our signature treatments." },
    { title: "Sunset Dining", desc: "Enjoy gourmet meals with panoramic views." },
    { title: "Yoga Deck", desc: "Rebalance yourself each morning in our open-air space." },
    { title: "Private Beach", desc: "Crystal-clear waters and golden sands just for you." },
    { title: "Cozy Suites", desc: "Luxury and comfort in every detail." },
  ];

  return (
    <section className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)] text-center">
      <h2 className="text-3xl font-semibold mb-8">Amenities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {amenities.map((item, idx) => (
          <div key={idx} className="p-6 border border-[var(--accent)] rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-[var(--accent)]">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
