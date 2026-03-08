import Navbar from "@/components/Navbar";
import NewsCard from "../../components/NewsCard";
import Footer from "@/components/Footer";

import styles from "../../components/NewsSlim.module.css";

import { getPosts } from "@/lib/getPosts"

const posts = await getPosts()

// This is the file for the subpage News. For the landing page, see NewsSlim.tsx

export default async function NewsSlim() {
  return (
    <>
      <Navbar />
      <h1 className={styles.recentArticlesHeader}>Recent Articles</h1>
      <div className={styles.gridContainer}>
        {posts.map((post: any) => (
          <NewsCard
            key={post.id}
            title={post.title.rendered}
            date={post.date}
            slug={post.slug}
            image={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}