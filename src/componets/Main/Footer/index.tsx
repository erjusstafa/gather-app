import styles from "./style.module.css";
import fb from "../../../assets/footer/fb.svg";
import link from "../../../assets/footer/link.svg";
import tw from "../../../assets/footer/tw.svg";
import you from "../../../assets/footer/you.svg";
import logo from "../../../assets/footer/logofooter.svg";

interface INewsletterContent {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
}
const newsletterContent:INewsletterContent[] = [
    {
        title: 'Join our newsletter',
        description: 'We’ll send you a nice letter once per week. No spam.',
        placeholder: 'Enter your email',
        buttonText: 'Subscribe'
    }
];

interface IFooterData {
    description: string;
    navigationLinks: string[];
    supportLinks: string[];
    partnerLinks: string[];
    contactInfo: {
        email: string;
        phone: string;
    };
}

const footerData: IFooterData = {
    description: "Medfysio provides clear and easy-to-understand health-related information resource or services.",
    navigationLinks: ["Home", "Features", "How It Works", "Pricing", "About", "Contact"],
    supportLinks: ["FAQ's", "Contact Us", "Support Center", "Security"],
    partnerLinks: ["Our", "Partners", "Subscriber"],
    contactInfo: {
        email: "GatherGram@business.com",
        phone: "+61 7 7010 6803",
    },
};


function Footer() {
    return (
        <div>
            <div className={styles.newsletterContainer}>
                {newsletterContent.map((item:INewsletterContent, index:number) => (
                    <div key={index} className={styles.newsletter}>
                        <div className={styles.textContent}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                        <form className={styles.form}>
                            <input
                                type="email"
                                placeholder={item.placeholder}
                                className={styles.inputField}
                            />
                            <button type="submit" className={styles.subscribeButton}>
                                {item.buttonText}
                            </button>
                        </form>
                    </div>
                ))}
            </div>
            <span className={styles.spanHr} >
                <hr className={styles.customHr} />
            </span>
            <footer className={styles.footer}>
                <div className={styles.footerLeft}>
                    <img src={logo} alt={'logo'} />
                    <p>{footerData.description}</p>
                    <div className={styles.socialIcons}>
                        {
                            [tw, fb, link, you].map((icon, index: number) => {
                                return <img key={index} src={icon} alt={`icon-${index}`} className={styles.icon} />;
                            })
                        }
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.footerNav}>
                        <h2>Navigate</h2>
                        <ul>
                            {footerData.navigationLinks.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerSupport}>
                        <h2>Support Us</h2>
                        <ul>
                            {footerData.supportLinks.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerPartner}>
                        <h2>Partner</h2>
                        <ul>
                            {footerData.partnerLinks.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerContact}>
                        <h2>Contact Us</h2>
                        <p >{footerData.contactInfo.email}</p>
                        <p>{footerData.contactInfo.phone}</p>
                        <button className={styles.helpCenter}>Help Center</button>
                    </div>

                </div>
            </footer>
            <div className={styles.footerEnd}>
                <p>© {new Date().getFullYear()} GatherGram, We love our users!</p>
                <p>Copyright © {new Date().getFullYear()} all rights reserved</p>
                <div className={styles.links}>
                    <a href="/terms">Terms & Conditions</a>
                    <span>|</span>
                    <a href="/privacy">Privacy Policy</a>
                    <span>|</span>
                    <a href="/sitemap">Sitemap</a>
                </div>
            </div>

        </div>
    )
}

export default Footer