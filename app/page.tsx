import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import NewsSlim from "@/components/NewsSlim";
import Footer from "@/components/Footer";

import landingPageLogo from "@/public/echoes_of_zero.png";

export default function Home() {
  return (
    <>
        <Navbar/>
        <LandingHero
          logotypeHero={landingPageLogo}
        />
        <NewsSlim/>
        <Footer/>
    </>
  );
}