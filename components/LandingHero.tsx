import Image from "next/image";
import islandZeroImage from "../public/echoes_of_zero.png";

import styles from "./LandingHero.module.css";

export default function LandingHero() {
    return (
        <>
            <div className={styles.landingHero}>
                <div className={styles.content}>
                    <Image
                        src={islandZeroImage}
                        alt="Logotype"
                        className={styles.logotype}
                    />
                    <a href="/" className={styles.yellowButton}>Play Now</a>
                </div>
            </div>
        </>
    );
}