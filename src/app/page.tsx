"use client"; // Ensure this is at the top for client-side components
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Technology from "@/components/home/Technology";
import Featured from "@/components/home/Featured";
import Contacts from "@/components/home/Contacts";
import Footer from "@/components/Footer";


export default function Home() {


  useEffect(() => {
    // Initialize AOS on the client side
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
      });
      AOS.refreshHard(); // Refresh animations
    }
  }, []);


  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Technology />
      <Featured />
      <Contacts />
      <Footer />
    </>
  );
}
