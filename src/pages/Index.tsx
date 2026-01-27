import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Gallery from "@/components/Gallery";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="about">
          <Mission />
        </section>
        <Gallery />
        <section id="impact">
          <Impact />
        </section>
        <section id="involved">
          <GetInvolved />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
