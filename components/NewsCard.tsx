import styles from "./NewsCard.module.css";
import Image from "next/image";
import placeholderImage from "../public/placeholder.png";

import Link from "next/link"

export default function NewsCard({ title, date, slug, image }: any) {
    return (
        <Link href={`/news/${slug}`}>

            <div className={styles.newsCard}>

                <Image
                    src={image || placeholderImage}
                    alt={title}
                    width={600}
                    height={400}
                    className={styles.cardImage}
                />

                <div className={styles.cardContent}>

                    <p className={styles.cardDate}>
                        {new Date(date).toLocaleDateString()}
                    </p>

                    <h2
                        className={styles.cardTitle}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                </div>

            </div>

        </Link>
    );
}