import styles from "./3Grid.module.css";
import NewsCard from "./NewsCard";

type Post = {
    header: string
    id: number
    date: string
    slug: string
    title: { rendered: string }
    _embedded?: any
}

export default function NewsField({
    posts,
    limit = 6,
    headerAboveCards = "Recent Articles"
}: {
    posts: Post[]
    limit?: number,
    headerAboveCards?: string
}) {
    return (
        <>
            <h1 className={styles.recentArticlesHeader}>{headerAboveCards}</h1>
            <div className={styles.gridContainer}>
                {posts.slice(0, limit).map((post) => (
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