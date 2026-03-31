import AboutSection from "@/components/AboutSection";
import CardSection from "@/components/CardSection";
import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CardSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
