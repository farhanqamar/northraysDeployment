import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Technology from "@/components/home/Technology";
import Featured from "@/components/home/Featured";
import Contacts from "@/components/home/Contacts";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Technology />
      <Featured />
      <Contacts />
      <Footer />
    </div>
  );
};

export default page;

