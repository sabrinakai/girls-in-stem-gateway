import { Code, Cpu, FlaskConical, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Code,
    title: "Code Camp",
    age: "Ages 10-14",
    description: "Introduction to programming through fun, project-based learning with Python and Scratch.",
    color: "gradient-primary",
  },
  {
    icon: Cpu,
    title: "Robotics Lab",
    age: "Ages 12-16",
    description: "Build and program robots while learning engineering principles and problem-solving skills.",
    color: "gradient-secondary",
  },
  {
    icon: FlaskConical,
    title: "Science Explorers",
    age: "Ages 8-12",
    description: "Hands-on experiments that make chemistry, physics, and biology exciting and accessible.",
    color: "gradient-accent",
  },
  {
    icon: Rocket,
    title: "Tech Leaders",
    age: "Ages 14-18",
    description: "Advanced mentorship program preparing high schoolers for STEM careers and college.",
    color: "gradient-primary",
  },
];

const Programs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-secondary">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From coding to robotics, our programs are designed to spark curiosity and build confidence in young women pursuing STEM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative p-8 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center`}>
                    <program.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {program.age}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
