"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionOne from "@/components/SectionOne";

const Home = () => {
  return (
    <div className="relative">
    <Navbar />
    <Hero />
    <SectionOne />
    <Footer />

    </div>
  );
};

export default Home;
