export const revalidate = 60

import Navbar from "@/components/Navbar";
import NewsField from "@/components/NewsField";
import Footer from "@/components/Footer";

import stylesFullSection from "@/components/FullSection.module.css";

import { getPosts } from "@/lib/getPosts"

export default async function News() {
  const posts = await getPosts();
  return (
    <>
      <div className={stylesFullSection.FullSection}>
        <Navbar />
        <NewsField
          posts={posts}
          limit={posts.length}
          headerAboveCards="Recent Articles"
        />
        <Footer />
      </div>
    </>
  );
}