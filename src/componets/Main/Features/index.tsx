import styles from "./style.module.css";
import event from "../../../assets/features/event.svg";
import customer from "../../../assets/features/customer.svg";
import donate from "../../../assets/features/donate.svg";
import guest from "../../../assets/features/guest.svg";

interface IBoxData {
  title: string;
  subTitle: string;
  icon: string;
}

const boxData: IBoxData[] = [
  {
    title: 'Event Management',
    subTitle: ' Increased conversion and expansion on new markets. Dynamic business development',
    icon: event
  },
  {
    title: 'Guest Interaction',
    subTitle: '  Execute payouts & refunds straight to your customer’s bank account via Fimpay. Increase satisfaction and retention.',
    icon: guest
  },
  {
    title: 'Donate & Contribute',
    subTitle: '  No cards or payment details insertion, no additional registration or app download by your customers.',
    icon: donate
  },
  {
    title: 'Custom Love Story Page',
    subTitle: ' Personal information is encrypted and protected by industry-standard banking security.',
    icon: customer
  },
]

function Features() {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.title}>Our Features</h2>
      <p className={styles.subtitle}>
        "Easily create and manage your wedding events, from the ceremony to the
        reception."
      </p>
      <div className={styles.featuresGrid}>
        {boxData.map((box:IBoxData, index:number) => (
          <div key={index} className={`${styles.featureBox} ${index === 1 ? styles.highlighted : ''}`}
          >
            <div className={styles.wraperBox}>
              <img src={box.icon} className={styles.icon} />
              <h5>{box.title}</h5>
              <p>{box.subTitle}</p></div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;
