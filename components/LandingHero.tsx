import Image from "next/image";

import styles from "./LandingHero.module.css";

export default function LandingHero( {logotypeHero}: any) {
    return (
        <>
            <div className={styles.landingHero}>
                <div className={styles.content}>
                    <Image
                        src={logotypeHero}
                        alt="Logotype"
                        className={styles.logotype}
                    />
                    <a href="/" className={styles.yellowButton}>Play Now</a>
                </div>
            </div>
        </>
    );
}