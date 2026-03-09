import Image from "next/image";
import islandZeroIcon from "../public/icon.png";

import styles from "./Navbar.module.css";

export default function Navbar() {
    return (

        <div className={styles.navbar}>
            <div className={styles.navbarSub}>
                <a href="/">
                    <Image
                        src={islandZeroIcon}
                        alt="Logotype"
                        className={styles.icon}
                    />
                </a>
                <a href="/" className={styles.navbarName}>Home</a>
                <a href="/news" className={styles.navbarName}>News</a>
                <a href="/maps" className={styles.navbarName}>Maps</a>
                <a href="/island-zero" className={styles.navbarName}>Island Zero</a>
            </div>
        </div>
    );
}
