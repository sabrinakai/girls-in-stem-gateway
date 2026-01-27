import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop",
    alt: "Girls working on robotics project",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
    alt: "STEM workshop in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    alt: "Team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
    alt: "Mentoring session",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    alt: "Group learning",
  },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our <span className="text-gradient-primary">Moments</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Capturing the joy of learning, discovery, and empowerment.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="overflow-hidden rounded-2xl border border-primary/20">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-primary/20 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 bg-primary/20 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
