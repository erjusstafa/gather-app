import styles from './style.module.css';
import call from "../../../assets/contact/call.svg";
import sales from "../../../assets/contact/sales.svg";
import support from "../../../assets/contact/support.svg";
import visit from "../../../assets/contact/visit.svg";

const contactInfo = [
  {
    title: 'Chat to sales',
    description: 'Speak to our friendly team.',
    contact: 'sales@GatherGram.com',
    icon: sales
  },
  {
    title: 'Chat to support',
    description: 'We’re here to help.',
    contact: 'support@GatherGram.com',
    icon: support
  },
  {
    title: 'Visit us',
    description: 'Visit our office HQ.',
    contact: '100 Smith Street Collingwood VIC 3066 AU',
    icon: visit
  },
  {
    title: 'Call us',
    description: 'Mon-Fri from 8am to 5pm.',
    contact: '+1 (555) 000-0000',
    icon: call
  },
];

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.contactUs}>Contact us</p>
        <h2 className={styles.title}>We'd love to hear from you</h2>
        <p className={styles.subtitle}>Our friendly team is always here to chat.</p>
      </div>
      <div className={styles.cards}>
        {contactInfo.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.icon} alt={item.title} className={styles.cardIcon} />
            <div className={styles.cardContainer}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <p className={styles.cardContact}>{item.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
