export const revalidate = 60

import "./island-zero.css";
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
        yellowButtonTarget="_blank"
        yellowButtonText="Play Now"
      />
      <div className="island-zero-summary">
        <h2 className="h2-island-zero">Welcome to Chapter 2!</h2>
        <p className="ch2-summary">
          After the Zero Point stabilized the fractured world of the Inbetween, reality began to rebuild itself. From the remnants of what once existed, a new world emerged — a reality we now call Reality 55.
          </p>
      </div>
      <NewsField
        posts={posts}
        limit={posts.length}
        headerAboveCards="Recent Articles: Island Zero"
      />
      <Footer />
    </>
  );
}