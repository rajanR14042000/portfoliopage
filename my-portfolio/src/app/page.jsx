"use client";


import ContactPage from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/herobanner";
import ProfileOverview from "@/components/IntroSec";
import Overview from "@/components/overviewsection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Overview/>
      <ProfileOverview/>
      <ContactPage/>
      <Footer/>
    </>
  );
}
