import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Floating shapes */}
      <div className="absolute top-32 right-20 w-16 h-16 gradient-primary rounded-2xl rotate-12 animate-float opacity-20" />
      <div className="absolute top-48 left-32 w-12 h-12 gradient-secondary rounded-full animate-float-delayed opacity-30" />
      <div className="absolute bottom-40 left-20 w-20 h-20 gradient-accent rounded-3xl -rotate-12 animate-float opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Empowering Future Innovators</span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Girls in{" "}
          <span className="text-gradient-primary">STEM</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Inspiring young women to explore science, technology, engineering, and mathematics through hands-on programs, mentorship, and community.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="xl">
            Join Our Programs
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Support Our Mission
          </Button>
        </div>

        {/* Stats preview */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary">500+</div>
            <div className="text-sm text-muted-foreground mt-1">Girls Reached</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-secondary">12</div>
            <div className="text-sm text-muted-foreground mt-1">Programs</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl md:text-5xl font-bold gradient-accent bg-clip-text text-transparent">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Mentors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
