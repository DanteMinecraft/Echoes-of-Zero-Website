import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import NewsSlim from "@/components/NewsSlim";
import Footer from "@/components/Footer";

import inbetweenLogo from "@/public/inbetween_logo.png";

export default function Inbetween() {
  return (
    <>
        <Navbar/>
        <LandingHero
          logotypeHero={inbetweenLogo}
        />
        <NewsSlim/>
        <Footer/>
    </>
  );
}