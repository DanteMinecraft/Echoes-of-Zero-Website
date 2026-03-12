export const revalidate = 60

import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import NewsField from "@/components/NewsField";
import Footer from "@/components/Footer";

import { getPosts } from "@/lib/getPosts";

import landingPageLogo from "@/public/inbetween_logo.png";

export default async function LandingPage() {
const posts = await getPosts();
  return (
    <>
      <Navbar />
      <LandingHero
        logotypeHero={landingPageLogo}
        heroBackground="/inbetween_hero.jpg"
        yellowButtonHref="https://www.fortnite.com/@danteminecraft?lang=en-US"
        yellowButtonText="Play Now"
        />
      <NewsField
        posts={posts}
        limit={3}
        headerAboveCards="Latest News"
      />
      <Footer />
    </>
  );
}