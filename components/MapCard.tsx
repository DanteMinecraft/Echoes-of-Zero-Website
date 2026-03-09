import styles from "./NewsCard.module.css";
import Image from "next/image";

import Link from "next/link"

export default function NewsCard({ title, onSiteLink, image }: any) {
    return (
        <Link href={`/maps/${onSiteLink}`}>

            <div className={styles.newsCard}>

                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    className={styles.cardImage}
                />

                <div className={styles.cardContent}>

                    <h2
                        className={styles.cardTitle}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                </div>

            </div>

        </Link>
    );
}