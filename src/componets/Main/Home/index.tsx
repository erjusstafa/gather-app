import styles from "./style.module.css";
import blur from "../../../assets/home/blur.svg";
import personOne from "../../../assets/home/personOne.png";
import personTwo from "../../../assets/home/personTwo.png";
import personThree from "../../../assets/home/personThree.png";
import personFour from "../../../assets/home/personFour.png";
import others from "../../../assets/home/others.png";
function Home() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <h1 className={styles.mainHeading}>
                    "Plan, Share, and  
                    Celebrate Your Big 
                    Day in One Place"
                </h1>
                <p className={styles.subHeading}>
                    "Create unforgettable memories with a personalized wedding platform for
                    you and your guests."
                </p>
                <div className={styles.formContainer}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className={styles.emailInput}
                    />
                    <button className={styles.getStartedButton}>Get started</button>
                </div>
                <div className={styles.socialProof}>
                    <div className={styles.avatarGroup}>
                        {[personOne, personTwo, personThree, personFour, others].map((person, index) => {
                            if (index === 4) {
                                return (
                                    <div key={index} className={styles.avatarWithText}>
                                        <img src={person} alt={`user-${index}`} />
                                        <span className={styles.avatarText}>+2k</span>
                                    </div>
                                );
                            }
                            return <img key={index} src={person} alt={`user-${index}`} />;
                        })}
                    </div>
                    <p className={styles.joinedText}>+2k People Joined!</p>
                </div>
            </div>
            <div className={styles.placeholderContainer}>
                <img src={blur} alt="blur" />
            </div>
        </section>
    );
}

export default Home;
