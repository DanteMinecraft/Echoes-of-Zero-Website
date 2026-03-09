import styles from "./3Grid.module.css";
import NewsCard from "./NewsCard";

import { getPosts } from "@/lib/getPosts"

const posts = await getPosts()

export default async function NewsSlim() {
    return (
        <>
            <h1 className={styles.recentArticlesHeader}>Recent Articles</h1>
            <div className={styles.gridContainer}>
                {posts.slice(0, 3).map((post: any) => (
                    <NewsCard
                        key={post.id}
                        title={post.title.rendered}
                        date={post.date}
                        slug={post.slug}
                        image={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                    />
                ))}
            </div>
        </>
    );
}