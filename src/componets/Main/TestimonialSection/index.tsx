
import styles from './styles.module.css';
import one from "../../../assets/about/1.svg";
import two from "../../../assets/about/2.svg";
import three from "../../../assets/about/3.svg";
import four from "../../../assets/about/4.svg";
import five from "../../../assets/about/5.svg";
import left from "../../../assets/about/left.svg";
import right from "../../../assets/about/right.svg";

const TestimonialSection = () => {
  return (
    <>
      <section className={styles.testimonialSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Don’t just take our word for it</h2>
            <p className={styles.subheading}>
              Hear from some of our amazing customers who are building faster.
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.outlinedButton}>Our customers</button>
            <button className={styles.filledButton}>Create account</button>
          </div>
        </div>
      </section>
      <section className={styles.sliderSection}>
        <div className={styles.testimonialContainer}>
          <div className={styles.card}>
            {
              [one, two, three, four, five].map((item, index) => {
                return <img
                key={index}
                  src={item}
                  alt={`item-${index}`}
                  className={styles.image}
                />
              })
            }

          </div>
        </div>

        {/* Next and Prev buttons */}
        <div className={styles.navigation}>
          <button className={styles.prevButton} >
            <img src={left} alt='left' />
          </button>
          <button className={styles.nextButton}>
            <img src={right} alt='right' />
          </button>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
