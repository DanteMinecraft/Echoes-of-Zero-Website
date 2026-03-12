export const revalidate = 60

import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import NewsField from "@/components/NewsField";
import Footer from "@/components/Footer";

import { getPosts } from "@/lib/getPosts";
import { CATEGORIES } from "@/lib/postCategories";

import islandZeroLogo from "@/public/island_zero_logo.png";

export default async function IslandZeroSubpage() {
  const posts = await getPosts(CATEGORIES.ISLAND_ZERO);
  return (
    <>
      <Navbar />
      <LandingHero
        logotypeHero={islandZeroLogo}
        heroBackground="/island_zero_hero.webp"
        yellowButtonHref="https://www.fortnite.com/@danteminecraft?lang=en-US"
        yellowButtonText="Play Now"

      />
      <NewsField
        posts={posts}
        limit={posts.length}
        headerAboveCards="Recent Articles: Island Zero"
      />
      <Footer />
    </>
  );
}