export const revalidate = 60

import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import NewsField from "@/components/NewsField";
import Footer from "@/components/Footer";

import { getPosts } from "@/lib/getPosts";
import { CATEGORIES } from "@/lib/postCategories";

import inbetweenLogo from "@/public/inbetween_logo.png";

export default async function InbetweenSubpage() {
  const posts = await getPosts(CATEGORIES.INBETWEEN);
  return (
    <>
      <Navbar />
      <LandingHero
        logotypeHero={inbetweenLogo}
        heroBackground="/inbetween_hero.jpg"
        yellowButtonHref="https://www.fortnite.com/@danteminecraft?lang=en-US"
        yellowButtonText="Play Now"

      />
      <NewsField
        posts={posts}
        limit={posts.length}
        headerAboveCards="Recent Articles: Inbetween"
      />
      <Footer />
    </>
  );
}