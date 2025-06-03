export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/sunset-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to AmberSky</h1>
        <p className="text-xl max-w-xl mx-auto">
          A peaceful sunset escape where elegance meets nature. Enjoy your perfect stay with breathtaking views and warm hospitality.
        </p>
      </div>
    </section>
  );
}
