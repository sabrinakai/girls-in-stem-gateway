import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Calendar } from "lucide-react";

const options = [
  {
    icon: Heart,
    title: "Donate",
    description: "Your contribution helps us provide scholarships, supplies, and expand our reach to more young women.",
    buttonText: "Make a Donation",
    buttonVariant: "hero" as const,
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Share your expertise as a mentor, workshop leader, or event volunteer. Every hour makes an impact.",
    buttonText: "Join as Volunteer",
    buttonVariant: "secondary" as const,
  },
  {
    icon: Calendar,
    title: "Partner",
    description: "Schools, businesses, and organizations can partner with us to bring STEM education to their communities.",
    buttonText: "Become a Partner",
    buttonVariant: "outline" as const,
  },
];

const GetInvolved = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Get <span className="text-gradient-primary">Involved</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our mission to inspire the next generation of female leaders in STEM. There are many ways you can help make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {options.map((option) => (
            <div
              key={option.title}
              className="flex flex-col p-8 rounded-2xl bg-background shadow-soft hover:shadow-medium transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <option.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">{option.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">{option.description}</p>
              <Button variant={option.buttonVariant} size="lg" className="w-full">
                {option.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
