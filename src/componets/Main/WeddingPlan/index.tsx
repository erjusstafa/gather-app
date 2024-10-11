import styles from "./styles.module.css";
import image from "../../../assets/home/blur.svg";

function WeddingPlan() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Ready to Plan Your Wedding?</h1>
                    <p className={styles.text}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua. Ut enim ad minim veniam, quis ut aliquip ex ea commodo consequat."                    </p>
                    <button className={styles.button}>
                        Create Your Event for Free <span>&rarr;</span>
                    </button>
                </div>
                <img className={styles.imagePlaceholder} src={image} alt="imagge" />
            </div>
        </div>)
}

export default WeddingPlan 