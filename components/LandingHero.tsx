import Image from "next/image";

import styles from "./LandingHero.module.css";

export default function LandingHero({ logotypeHero, heroBackground, yellowButtonText, yellowButtonHref }: any) {
    return (
        <>
            <div
                className={styles.landingHero}
                style={{
                    backgroundImage: `linear-gradient(#00000040,#00000040), url(${heroBackground})`
                }}
            >
                <div className={styles.content}>
                    <Image
                        src={logotypeHero}
                        alt="Logotype"
                        className={styles.logotype}
                    />
                    <a href={yellowButtonHref} className={styles.yellowButton} target="_blank" rel="noopener noreferrer">{yellowButtonText}</a>
                </div>
            </div >
        </>
    );
}