"use client"; // Add this directive if using hooks or client-specific logic in this file

import ResponsiveAppBar from '../components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutUsCard from '@/components/AboutUsCard';
import PartnerLogos from '@/components/PartnerLogos';
import ProductPage from '@/components/ProductPage';
import Mission from '@/components/Mission';
import Approach from '@/components/Approach';
import Invite from '@/components/Invite';
import Footer from '@/components/Connect';
export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <HeroSection /> 
      <AboutUsCard />
      <PartnerLogos />
      <ProductPage />
      <Mission />
      <Approach />
      <Invite />
      <Footer />
    </div>
  );
}
