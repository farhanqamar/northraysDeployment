"use client"; // Ensure this is at the top for client-side components
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
// import Page from './home/page';
import dynamic from 'next/dynamic';
const Hoome = dynamic(() => import("@/app/home/page"), { ssr: false });


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
      <Hoome />
    </>
  );
}
