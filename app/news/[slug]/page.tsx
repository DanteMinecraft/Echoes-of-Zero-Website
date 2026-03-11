import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

import styles from "./page.module.css";

async function getPost(slug: string) {
  const res = await fetch(
    `https://wpa.echoesofzero.net/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: "no-store" }
  )

  const posts = await res.json()

  return posts[0]
}

export default async function BlogPost({ params }: any) {

  const { slug } = await params

  const post = await getPost(slug)

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
      <div className={styles.article}>
        <Navbar />

        <div className={styles.articleHeader}>
          <h1 className={styles.articleTitle}
            dangerouslySetInnerHTML={{
              __html: post.title.rendered
            }}
          />

          <p className={styles.articleDate}>
            {"Published: " + new Date(post.date).toLocaleDateString()}
          </p>
        </div>

        <Image
          src={image}
          alt={post.title.rendered}
          width={1200}
          height={600}
          className={styles.articleImage}
        />

        <div className={styles.articleText}
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />

        <Footer />
      </div>
    </>
  );
}
