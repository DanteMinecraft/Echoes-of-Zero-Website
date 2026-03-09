import styles from "./3Grid.module.css";
import MapCard from "./MapCard";

import islandZeroImage from "../public/placeholder.png";

export default function MapContainer() {
    return (
        <>
            <h1 className={styles.recentArticlesHeader}>The Echoes of Zero Universe</h1>

            <div className={styles.gridContainer}>
                    <MapCard
                        title="Inbetween"
                        onSiteLink="inbetween"
                        image={islandZeroImage}
                    />
                    
                    <MapCard
                        title="Echoes of Zero"
                        onSiteLink="echoes-of-zero"
                        image={islandZeroImage}
                    />
                    
                    <MapCard
                        title="Island Zero"
                        onSiteLink="island-zero"
                        image={islandZeroImage}
                    />
            </div>
        </>
    );
}