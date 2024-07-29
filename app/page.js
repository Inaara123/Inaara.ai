'use client';
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import Video from "./components/Video";
import Services from "./components/Services";
import OurApps from "./components/OurApps";
import TestimonialsCarousel from "./components/Testimonials";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
    }, [])

  return (
    <main>
      <Loader/>
      <Navbar/>
      <Hero/>
      <Video/>
      <Services/>
      <OurApps/>
      <TestimonialsCarousel/>
      <Contact/>
      <Footer/>
    </main>
  );
}
