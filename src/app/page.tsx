import ServiceCategories from "@/components/home/ServiceCategories";
import SearchBar from "@/components/home/SearchBar";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import WhyChoose from "@/components/home/WhyChoose";
import Services from "@/components/home/Services";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
   <>
  <Navbar />
<Hero />
<SearchBar />
<ServiceCategories />
<Services />
<WhyChoose />
<Stats />
<Testimonials />
</>
  );
}