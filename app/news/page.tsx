import Navbar from "@/components/Navbar";
import NewsField from "@/components/NewsField";
import Footer from "@/components/Footer";

import styles from "../../components/3Grid.module.css";
import stylesFullSection from "@/components/FullSection.module.css";

import { getPosts } from "@/lib/getPosts"
const posts = await getPosts()

export default async function News() {
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