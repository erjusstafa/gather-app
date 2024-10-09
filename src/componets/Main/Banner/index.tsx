import React from 'react'
import styles from "./styles.module.css";
import light from "../../../assets/banner/light.svg";
import star from "../../../assets/banner/star.svg";

function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.textSection}>
                <p>
                    "Powerful tool to manage your wedding, engage guests, and celebrate
                    together effortlessly."
                </p>
            </div>
            <div className={styles.iconsSection}>
                <div className={styles.iconGroup}>
                    <div className={styles.iconCircle}>
                        <img
                            src={light}// Add your SVG icons
                            alt="Connect Icon"
                            className={styles.iconImage}
                        />
                    </div>
                    <p>Connect with your guests</p>
                </div>
                <div className={styles.iconGroup}>
                    <div className={styles.iconCircle}>
                        <img
                            src={star} // Add your SVG icons
                            alt="Manage Icon"
                            className={styles.iconImage}
                        />
                    </div>
                    <p>Easy event management</p>
                </div>
            </div>
        </div>
    )
}

export default Banner