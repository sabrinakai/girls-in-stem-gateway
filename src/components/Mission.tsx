import { Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "We nurture natural curiosity and encourage questions that lead to discovery and innovation.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build supportive networks where girls can learn, grow, and inspire one another.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "We believe every girl has the potential to become a leader in STEM fields.",
  },
];

const Mission = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Girls in STEM is dedicated to breaking barriers and creating pathways for young women to thrive in science, technology, engineering, and mathematics. Through innovative programs and mentorship, we're building the next generation of female leaders in tech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-8 rounded-2xl bg-background shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
