import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import NewsSlim from "@/components/NewsSlim";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <Navbar/>
        <LandingHero/>
        <NewsSlim/>
        <Footer/>
    </>
  );
}