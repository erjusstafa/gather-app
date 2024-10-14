import styles from './style.module.css';
import heart from "../../../assets/faq/heart.svg";
import disable from "../../../assets/faq/disable.svg";
import doc from "../../../assets/faq/doc.svg";
import email from "../../../assets/faq/email.svg";
import switchImg from "../../../assets/faq/switch.svg";
import wallet from "../../../assets/faq/wallet.svg";
import avatar from "../../../assets/faq/avatar.svg";

interface IFaqData {
    question: string;
    answer: string;
    icon: string;
}

const faqData :IFaqData[]= [
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.',
        icon: heart
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
        icon: switchImg
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
        icon: disable
    },
    {
        question: 'Can other info be added to an invoice?',
        answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace’s name.',
        icon: doc
    },
    {
        question: 'How does billing work?',
        answer: 'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
        icon: wallet
    },
    {
        question: 'How do I change my account email?',
        answer: 'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.',
        icon: email
    }
];

const FaqSection = () => {
    return (
        <div className={styles.faqSection}>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about the product and billing.</p>

            <div className={styles.faqContainer}>
                {faqData.map((item:IFaqData, index:number) => (
                    <div key={index} className={styles.faqCard}>
                        <img src={item.icon} className={styles.icon} alt={`icon-${index}`} />
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>

            <div className={styles.contactSection}>
                <img src={avatar} alt="avatar" />
                <h3>Still have questions? </h3>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button className={styles.contactButton}>Get in Touch</button>
            </div>
        </div>
    );
};

export default FaqSection;
