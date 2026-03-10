import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import NewsField from "@/components/NewsField";
import Footer from "@/components/Footer";

import { getPosts } from "@/lib/getPosts";

import inbetweenLogo from "@/public/inbetween_logo.png";
import inbetweenHero from "@/public/inbetween_hero.jpg";

const posts = await getPosts(10);

export default function InbetweenSubpage() {
  return (
    <>
      <Navbar />
      <LandingHero
        logotypeHero={inbetweenLogo}
        heroBackground="/inbetween_hero.jpg"

      />
      <NewsField
        posts={posts}
        headerAboveCards="Recent Articles for Inbetween"
      />
      <Footer />
    </>
  );
}