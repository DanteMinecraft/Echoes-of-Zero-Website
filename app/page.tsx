import LandingHero from "@/components/LandingHero";
import Navbar from "@/components/Navbar";
import NewsField from "@/components/NewsField";
import Footer from "@/components/Footer";

import { getPosts } from "@/lib/getPosts";
const posts = await getPosts();

import landingPageLogo from "@/public/echoes_of_zero.png";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <LandingHero
        logotypeHero={landingPageLogo}
        heroBackground="./cover-image.webp"
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