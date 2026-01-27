const stats = [
  { value: "20+", label: "Girls Empowered", description: "Young women who've participated in our programs" },
  { value: "20+", label: "Workshops Completed", description: "Hands-on learning experiences" },
  { value: "40+", label: "Industry Mentors", description: "Professionals guiding the next generation" },
];

const Impact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Since 2019, we've been making a difference in our community, one future scientist, engineer, and innovator at a time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-heading text-xl font-semibold text-primary-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
