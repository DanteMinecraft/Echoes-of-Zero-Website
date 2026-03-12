import styles from "./3Grid.module.css";
import MapCard from "./MapCard";

import inbetweenThumbnail from "@/public/inbetween_thumbnail.jpg";
import placeholder from "@/public/placeholder.png";

export default function MapContainer() {
    return (
        <>
            <h1 className={styles.recentArticlesHeader}>The Island of Zero Universe</h1>

            <div className={styles.gridContainer}>
                    <MapCard
                        title="Inbetween"
                        onSiteLink="inbetween"
                        image={inbetweenThumbnail}
                    />
                    
                    <MapCard
                        title="Island Zero"
                        onSiteLink="island-zero"
                        image={placeholder}
                    />
            </div>
        </>
    );
}