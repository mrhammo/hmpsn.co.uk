import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import WorkProjects from "@/components/WorkProjects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <SocialLinks />
      <WorkProjects />
      <Services />
      <Footer />
    </div>
  );
}
