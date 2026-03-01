
export default function Hero() {
  return (
    <section className="relative h-[200vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_70%)]"></div>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <img
          src="/assets/guardian-logo.png"
          alt="Guardian"
          className="w-[420px] opacity-0 animate-logo-reveal"
        />
      </div>
    </section>
  );
}
