"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionOne from "@/components/SectionOne";
import StatSection from "@/components/StatSection";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <SectionOne />
      <StatSection />
      <Footer />

    </div>
  );
};

export default Home;
